namespace GenericBackend.DataModels.GoodNightMedical
{
    public class RentOption
    {
        public Machine Machine { get; set; }
        public int MachineId { get; set; }
        public string Name { get; set; }
        public decimal PricePerMonth { get; set; }
    }
}