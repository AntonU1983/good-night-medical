using MongoDB.Bson.Serialization.Attributes;

namespace GenericBackend.Core
{
    /// <summary>
    /// "Default" Entity interface.
    /// </summary>
    /// <remarks>Entities are assumed to use strings for Id's.</remarks>
    public interface IMongoEntity : IMongoEntity<string>
    {

    }

    public interface IMongoEntity<TKey> : IEntity<TKey>
    {
        /// <summary>
        /// Gets or sets the Id of the Entity.
        /// </summary>
        /// <value>Id of the Entity.</value>
        [BsonId]
        new TKey Id { get; set; }
    }
}