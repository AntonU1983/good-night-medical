namespace GenericBackend.PaymentProcessor.Models
{
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
}
