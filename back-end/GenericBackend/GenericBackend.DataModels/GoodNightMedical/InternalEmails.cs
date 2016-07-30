using GenericBackend.Core;

namespace GenericBackend.DataModels.GoodNightMedical
{
    public class InternalEmails :  MongoEntityBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }
}
