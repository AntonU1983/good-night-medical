using AutoMapper;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Helpers.Mappings.Interfaces;

namespace GenericBackend.Models.Customer
{
    public class CustomerRentInsert : ModelBase, ICustomMapping
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public ContactMethod Contact { get; set; }
        public DoctorPrescription Prescription { get; set; }
        public string Comments { get; set; }
        public string Program { get; set; }

        public void CreateMappings(IConfiguration configuration)
        {
            configuration.CreateMap<CustomerRentInsert, FullRentCustomer>()
                .ForMember(m => m.ContactMethod, opt => opt.MapFrom(x => x.Contact))
                .ForMember(m => m.DoctorPrescription, opt => opt.MapFrom(x => x.Prescription));
        }
    }
}