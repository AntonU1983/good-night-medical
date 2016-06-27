using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GenericBackend.DataModels.GoodNightMedical;
using NUnit.Framework;

namespace GenericBackend.Tests.GoodNightMedical
{
    [TestFixture]
    class SeedDbWithTestDataTests
    {
        public void RentOptions()
        {
            
        }
        public void Seed()
        {
            var resMedS10 = new Machine
            {
                ImageUrl = "image1",
                Name = "ResMed S10 AirSense Auto/Pro",
                PricePerMonth = 65
            };

            var resMedS10Ref = new Machine
            {
                ImageUrl = "image1",
                Name = "ResMed S10 AirSense Auto",
                PricePerMonth = 45
            };







        }
    }
}
