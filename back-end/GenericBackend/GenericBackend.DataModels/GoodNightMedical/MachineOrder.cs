namespace GenericBackend.DataModels.GoodNightMedical
{
    public class MachineOrder
    {
        public RentOption RentOption { get; set; }
        public DoctorPrescription Prescription { get; set; }
        public string ClientName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public ContractMethod PreferredContract { get; set; }
        public string Comments { get; set; }

    }
}