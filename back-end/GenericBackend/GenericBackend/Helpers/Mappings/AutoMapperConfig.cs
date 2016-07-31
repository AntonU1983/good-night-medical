using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using AutoMapper;
using GenericBackend.Helpers.Mappings.Interfaces;

namespace GenericBackend.Helpers.Mappings
{
    /// <summary>
    /// Configrate automapping
    /// </summary>
    public class AutoMapperConfig
    {
        /// <summary>
        /// Registers this instance.
        /// </summary>
        public static void Register()
        {
            var types = Assembly.GetExecutingAssembly().GetExportedTypes();
            LoadStandardMappings(types);
            LoadCustomMappings(types);
        }

        private static void LoadCustomMappings(IEnumerable<Type> types)
        {
            var maps = (from t in types
                from i in t.GetInterfaces()
                where typeof(ICustomMapping).IsAssignableFrom(t) &&
                      !t.IsAbstract &&
                      !t.IsInterface
                select (ICustomMapping) Activator.CreateInstance(t)).ToArray();
            foreach (var map in maps)
            {
                map.CreateMappings(Mapper.Configuration);
            }
        }

        private static void LoadStandardMappings(IEnumerable<Type> types)
        {
            var maps = (from t in types
                from i in t.GetInterfaces()
                where i.IsGenericType &&
                      i.GetGenericTypeDefinition() == typeof(IMapFrom<>) &&
                      !t.IsAbstract &&
                      !t.IsInterface
                select new
                {
                    Source = i.GetGenericArguments()[0],
                    Destination = t
                }).ToArray();

            foreach (var map in maps)
            {
                Mapper.CreateMap(map.Source, map.Destination);
            }
        }
    }
}