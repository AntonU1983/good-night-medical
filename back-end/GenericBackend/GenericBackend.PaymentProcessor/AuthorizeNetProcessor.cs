using System.Diagnostics;
using AuthorizeNet.Api.Contracts.V1;
using AuthorizeNet.Api.Controllers;
using AuthorizeNet.Api.Controllers.Bases;
using GenericBackend.PaymentProcessor.Core.Interfaces;
using GenericBackend.PaymentProcessor.Models;
using JetBrains.Annotations;

namespace GenericBackend.PaymentProcessor
{
    public class AuthorizeNetProcessor : IPaymentProcessor
    {
        private readonly string _apiLogin = "38Dg9jAw";
        private readonly string _transactionKey = "78v8VJzMw2t99B4W";
        private readonly int _defaultQuantity = 1;
        private customerAddressType _billingAddress;
        private nameAndAddressType _shippingAddress;
        private paymentType _paymentType;

        public AuthorizeNetProcessor()
        {
            ApiOperationBase<ANetApiRequest, ANetApiResponse>.RunEnvironment = AuthorizeNet.Environment.SANDBOX;

            ApiOperationBase<ANetApiRequest, ANetApiResponse>.MerchantAuthentication = new merchantAuthenticationType()
            {
                name = _apiLogin,
                ItemElementName = ItemChoiceType.transactionKey,
                Item = _transactionKey
            };
        }

        public void SetCreditCard([NotNull]CreditCardModel creditCardModelModel)
        {
            var creditCard = new creditCardType
            {
                cardNumber = creditCardModelModel.CardNumber,
                expirationDate = creditCardModelModel.GetShortExpirationDate(),
                cardCode = creditCardModelModel.Cvv
            };

            _paymentType = new paymentType {Item = creditCard};
        }

        public void SetShippingBillingAddress([NotNull]ShipmentModel shipmentModel, [NotNull]ShipmentModel billingModel)
        {
            _shippingAddress = new nameAndAddressType
            {
                firstName = shipmentModel.FirstName,
                lastName = shipmentModel.LastName,
                address = shipmentModel.PrimaryAddress,
                city = shipmentModel.City,
                zip = shipmentModel.Zip,
                state = shipmentModel.State
            };

            _billingAddress = new customerAddressType
            {
                firstName = billingModel.FirstName,
                lastName = billingModel.LastName,
                address = billingModel.PrimaryAddress,
                city = billingModel.City,
                zip = billingModel.Zip,
                state = billingModel.State
            };
        }

        public void InitializeChargeRequestAndExecute(string itemOrTypeName, decimal price)
        {
            var lineItems = new lineItemType[_defaultQuantity];
            lineItems[0] = new lineItemType { itemId = "1", name = itemOrTypeName, quantity = _defaultQuantity, unitPrice = price };

            var transactionRequest = new transactionRequestType
            {
                transactionType = transactionTypeEnum.authCaptureTransaction.ToString(),
               
                amount = price,
                payment = _paymentType,
                billTo = _billingAddress,
                shipTo = _shippingAddress,
                lineItems = lineItems,
            };

            Execute(transactionRequest);
        }

        private void Execute(transactionRequestType transactionRequest)
        {
            var request = new createTransactionRequest { transactionRequest = transactionRequest };

            var controller = new createTransactionController(request);
            controller.Execute();

            var response = controller.GetApiResponse();

            if (response != null && response.messages.resultCode == messageTypeEnum.Ok)
            {
                if (response.transactionResponse != null)
                {
                    Debug.WriteLine("Success, Auth Code : " + response.transactionResponse.authCode);
                    Debug.WriteLine("Success, Auth Code : " + response.transactionResponse.transId);
                }
            }
            else if (response != null)
            {
                Debug.WriteLine("Error: " + response.messages.message[0].code + "  " + response.messages.message[0].text);
                if (response.transactionResponse != null)
                {
                    Debug.WriteLine("Transaction Error : " + response.transactionResponse.errors[0].errorCode + " " + response.transactionResponse.errors[0].errorText);
                }
            }
        }
        
    }
}
