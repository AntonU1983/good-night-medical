using AutoMapper;

namespace GenericBackend.Helpers.Mappings.Interfaces
{
	/// <summary>
	/// Mapping entities with AutoMapper
	/// </summary>
	public interface ICustomMapping
	{
		/// <summary>
		/// Creates the mappings.
		/// </summary>
		/// <param name="configuration">The configuration.</param>
		void CreateMappings(IConfiguration configuration);
	}
}