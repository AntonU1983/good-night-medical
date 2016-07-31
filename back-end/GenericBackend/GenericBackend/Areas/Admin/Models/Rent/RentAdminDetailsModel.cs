using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Helpers.Mappings.Interfaces;

namespace GenericBackend.Areas.Admin.Models
{
    public class RentAdminDetailsModel : ICustomMapping
    {
        public string Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Prescription { get; set; }
        public string ContactMethod { get; set; }
        public string Comment { get; set; }
        public bool IsNew { get; set; }

        public void CreateMappings(IConfiguration configuration)
        {
            Mapper.CreateMap<FullRentCustomer, RentAdminDetailsModel>()
                .ForMember(m => m.ContactMethod, opt => opt.MapFrom(x => x.ContactMethod.ToString()))
                .ForMember(m => m.IsNew, opt => opt.MapFrom(x => x.New))
                .ForMember(m => m.Prescription, opt => opt.MapFrom(x => x.DoctorPrescription.ToString()));
        }
    }
}