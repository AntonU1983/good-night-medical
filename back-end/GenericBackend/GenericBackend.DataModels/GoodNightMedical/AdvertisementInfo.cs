using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericBackend.DataModels.GoodNightMedical
{
    public class AdvertisementInfo
    {
        public string CampaignId { get; set; }
        public string AdgroupId { get; set; }
        public string Creative { get; set; }
        public string Keyword { get; set; }
        public string MatchType { get; set; }
        public string Device { get; set; }
        public string AdPosition { get; set; }
        public string Location { get; set; }
    }
}
