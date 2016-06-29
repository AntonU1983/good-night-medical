using GenericBackend.DataModels.GoodNightMedical;

namespace GenericBackend.Models.Customer
{
    public class CustomerRentInsert
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public ContactMethod Contact { get; set; }
        public DoctorPrescription Prescription { get; set; }
        public string Comments { get; set; }
    }
}