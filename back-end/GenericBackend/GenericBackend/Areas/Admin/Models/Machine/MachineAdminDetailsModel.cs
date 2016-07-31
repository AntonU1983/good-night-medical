using System.Globalization;
using AutoMapper;
using GenericBackend.Helpers.Mappings.Interfaces;

namespace GenericBackend.Areas.Admin.Models.Machine
{
    public class MachineAdminDetailsModel : ICustomMapping
    {
        public string Id { get; set; }
        public string Company { get; set; }
        public string Model { get; set; }
        public string Price { get; set; }
        public bool Refurbished { get; set; }
        public string ImageUrl { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }

        public void CreateMappings(IConfiguration configuration)
        {
            configuration.CreateMap<DataModels.GoodNightMedical.Machine, MachineAdminDetailsModel>()
                .ForMember(m => m.Company, opt => opt.MapFrom(x => x.Company.Name))
                .ForMember(m => m.Model, opt => opt.MapFrom(x => x.Name))
                .ForMember(m => m.Type, opt => opt.MapFrom(x => x.Type.ToString()))
                .ForMember(m => m.Price, opt => opt.MapFrom(x => x.PricePerMonth.ToString(CultureInfo.CurrentCulture)))
                .ForMember(m => m.Refurbished, opt => opt.MapFrom(x => x.Refurbished));
        }
    }
}