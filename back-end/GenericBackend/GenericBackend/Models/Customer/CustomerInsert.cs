using AutoMapper;
using GenericBackend.Helpers.Mappings.Interfaces;

namespace GenericBackend.Models.Customer
{
    public class CustomerInsert : ModelBase, ICustomMapping
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public void CreateMappings(IConfiguration configuration)
        {
            configuration.CreateMap<CustomerInsert, DataModels.GoodNightMedical.Customer>()
                .ForMember(m => m.New, opt => opt.UseValue(true));
        }
    }
}