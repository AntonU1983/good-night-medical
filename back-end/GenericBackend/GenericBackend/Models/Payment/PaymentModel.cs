using GenericBackend.PaymentProcessor.Models;

namespace GenericBackend.Models.Payment
{
    public class PaymentModel
    {
        public ShipmentModel Shipment { get; set; }
        public CreditCardModel CreditCard { get; set; }
        public bool IsSameBillShip { get; set; }
        public ShipmentModel Billing { get; set; }
        public string Type { get; set; }
        public string Price { get; set; }
    }
}