using AutoMapper;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Helpers.Mappings.Interfaces;

namespace GenericBackend.Areas.Admin.Models.Settings
{
    public class SettingAdminModel : ICustomMapping
    {
        public string Id { get; set; }
        public string ParamName { get; set; }
        public string ParamValue { get; set; }

        public void CreateMappings(IConfiguration configuration)
        {
            configuration.CreateMap<Setting, SettingAdminModel>();

            configuration.CreateMap<SettingAdminModel, Setting>()
                .ForMember(m => m.Id, opt => opt.Ignore());
        }
    }
}