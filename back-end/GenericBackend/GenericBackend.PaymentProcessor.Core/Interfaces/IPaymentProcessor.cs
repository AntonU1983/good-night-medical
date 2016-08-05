using GenericBackend.PaymentProcessor.Models;

namespace GenericBackend.PaymentProcessor.Core.Interfaces
{
    public interface IPaymentProcessor
    {
        void SetCreditCard(CreditCardModel creditCardModelModel);
        void SetShippingBillingAddress(ShipmentModel shipmentModel, ShipmentModel billingModel);
        void InitializeChargeRequestAndExecute(string itemOrTypeName, decimal price);
    }
}