using System.Collections.Generic;
using GenericBackend.DataModels.GoodNightMedical;

namespace GenericBackend.Models
{
    public class CatalogModel
    {
        public string Title { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }
        public string Ships { get; set; }
        public string ImageUrl { get; set; }
        public List<string> Features { get; set; }
        public string Type { get; set; }
    }
}