﻿using System;
using AutoMapper;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Helpers.Mappings.Interfaces;

namespace GenericBackend.Areas.Admin.Models.Machine
{
    public class MachineAdminUpdateModel : ICustomMapping
    {
        public string Company { get; set; }
        public string Model { get; set; }
        public string Price { get; set; }
        public bool Refurbished { get; set; }
        public string ImageUrl { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }

        public void CreateMappings(IConfiguration configuration)
        {
            configuration.CreateMap<MachineAdminUpdateModel, Company>()
                .ForMember(m => m.Name, opt => opt.MapFrom(x => x.Company));

            configuration.CreateMap<MachineAdminUpdateModel, DataModels.GoodNightMedical.Machine>()
                .ForMember(m => m.Id, opt => opt.Ignore())
                .ForMember(m => m.Type, opt => opt.MapFrom(x => Enum.Parse(typeof(ProgramType), x.Type)))
                .ForMember(m => m.Name, opt => opt.MapFrom(x => x.Model))
                .ForMember(m => m.PricePerMonth, opt => opt.MapFrom(x => x.Price))
                .ForMember(m => m.Company, opt => opt.MapFrom(x => x))
                .ForMember(m => m.Refurbished, opt => opt.MapFrom(x => x.Refurbished));

        }
    }
}