using System;
using System.Web.Http;
using GenericBackend.PaymentProcessor;
using GenericBackend.PaymentProcessor.Models;

namespace GenericBackend.Controllers
{
    [RoutePrefix("api/payment")]
    public class PaymentController : ApiController
    {
        [HttpPost]
        [Route("")]
        public IHttpActionResult Post()
        {
            var paymentProcessor = new AuthorizeNetProcessor();

            paymentProcessor.SetCreditCard(new CreditCardModel {CardNumber = "4007000000027", Cvv = "123", ExpirationMonth = "01", ExpirationYear = "2020"});
            var shippingModel = new ShipmentModel
            {
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                City = "TestCity",
                PrimaryAddress = "Address",
                SecondaryAddress = "SecondaryAddress",
                State = "TestState",
                Zip = "1234"
            };
            var billingModel = new ShipmentModel
            {
                FirstName = "TestFirstName",
                LastName = "TestLastName",
                City = "TestCity",
                PrimaryAddress = "Address",
                SecondaryAddress = "SecondaryAddress",
                State = "TestState",
                Zip = "1234"
            };

            paymentProcessor.SetShippingBillingAddress(shippingModel, billingModel);
            paymentProcessor.InitializeChargeRequestAndExecute("Refurbished CPAP", 29);

            return Ok();
        }
    }
}
