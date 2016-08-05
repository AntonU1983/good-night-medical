using System;
using System.Web.Http;
using GenericBackend.Models.Payment;
using GenericBackend.PaymentProcessor.Core.Interfaces;

namespace GenericBackend.Controllers
{
    [RoutePrefix("api/payment")]
    public class PaymentController : ApiController
    {
        private readonly IPaymentProcessor _paymentProcessor;

        public PaymentController(IPaymentProcessor paymentProcessor)
        {
            _paymentProcessor = paymentProcessor;
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody]PaymentModel model)
        {
            _paymentProcessor.SetCreditCard(model.CreditCard);
            _paymentProcessor.SetShippingBillingAddress(model.Shipment, model.IsSameBillShip ? model.Shipment : model.Billing);
            _paymentProcessor.InitializeChargeRequestAndExecute(model.Type, Convert.ToDecimal(model.Price));

            return Ok();
        }
    }
}
