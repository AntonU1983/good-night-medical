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

    public class ShipmentModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PrimaryAddress { get; set; }
        public string SecondaryAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
    }

    public class CreditCardModel
    {
        public string Number { get; set; }
        public string Month { get; set; }
        public string Year { get; set; }
        public string Cvv { get; set; }
    }
}