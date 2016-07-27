using System.Collections.Generic;
using GenericBackend.Core;

namespace GenericBackend.DataModels.GoodNightMedical
{
    public class RentProgram : MongoEntityBase
    {
        public ProgramType Type { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string ImageUrl { get; set; }
        public string Price { get; set; }
        public List<string> ProgramDescription { get; set; }
        public string HowItWorks { get; set; }
        public string AdditionalTitle { get; set; }
        public string AdditionalDescription { get; set; }
        public CatalogBriefInfo CatalogBriefInfo { get; set; }
    }

    public class CatalogBriefInfo
    {
        public string CatalogDescription { get; set; }
        public List<string> CatalogFeatures { get; set; }
        public string Ships { get; set; }
    }

    public enum ProgramType : short
    {
        New = 0,
        Refurbished,
        Bipap
    }
}
