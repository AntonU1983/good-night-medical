using GenericBackend.Core;

namespace GenericBackend.DataModels.GoodNightMedical
{
    public class Setting : MongoEntityBase
    {
        public string ParamName { get; set; }
        public string ParamValue { get; set; }
    }
}
