using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Repository;
using NUnit.Framework;

namespace GenericBackend.Tests
{
    [TestFixture]
    public class MongoRepositoryTests
    {
        [SetUp]
        public void Init()
        {
            
        }

        [Test]
        public void Add_ForMongoDb_ShouldAddEntity_Test()
        {
            var repo = new MongoRepository<Machine>();
            var machineName = "TestMachine";
            
            var machine = new Machine()
            {
                Name = machineName ,
                ImageUrl = "http://www.goodnightmedical.com/images/cpap-machine-photos/Fisher-Paykel-Icon1.jpg",
                PricePerMonth = 100m
            };
            /*var rentOptions = new List<RentOption>();
            rentOptions.Add(new RentOption() { Name = "Rent 1", PricePerMonth = 100m });
            rentOptions.Add(new RentOption() { Name = "Rent 2", PricePerMonth = 200m });
            rentOptions.Add(new RentOption() { Name = "Rent 3", PricePerMonth = 300m });
            machine.RentOptions = rentOptions;*/
            repo.Add(machine);
            
            Assert.That(repo.Any(x => x.Name == machineName));
        }

        [Test]
        public void Add_ForMongoDb_ShouldAddRent_Test()
        {
            var repo = new MongoRepository<RentProgram>();
            var programs = new List<RentProgram>()
            {
                new RentProgram
                {
                    Name = "Refurbished CPAP",
                    Title = "Refurbished CPAP",
                    ImageUrl = "resmed-s9-auto-cpap.jpg",
                    Type = ProgramType.Refurbished,
                    Price = "29",
                    ProgramDescription = new List<string>()
                    {
                        "Email/Fax your valid sleep study and prescription to info@goodnightmedical.com and make sure to specify you are interested in a Refurbished CPAP rental",
                        "A dedicated service team member will contact you by phone or email to complete the order",
                        "Check your porch! Your CPAP machine with tubing and filter will be delivered to your door"
                    },
                    HowItWorks =
                        "After your completed order of a rental machine through Good Night Medical, we will send your sanitized machine with tubing and filter. Refurbished machines must be rented for a minimum of one (1) month. There is a one-time Set Up charge equal to the monthly fee to retrieve the initial physician order to set up the unit and confirm the validity of the prescription. This fee will be waived if you supply a copy of your sleep study and a scan/photo of your valid, up-to-date presription. If for any reason we cannot provide you with a machine, Good Night Medical will issue a full refund equivalent to the initial fee paid.",
                    AdditionalTitle = "ONLY FOR REFURBISHD:",
                    AdditionalDescription =
                        "Good Knight Guarantee: If somehow your machine breaks down, we will replace the unit with the same or comparable unit.",
                    CatalogBriefInfo = new CatalogBriefInfo()
                    {
                        CatalogDescription = "Our most affordable option, refurbished machines are perfect for users who are currently or have previously undergone therapy. Each machines goes through a rigorous 27 point inspection and cleaning",
                        CatalogFeatures = new List<string>()
                        {
                            "No insurance necessary",
                            "Standard pressure capability",
                            "The Good Knight’s Guarantee",
                            "Humidifier included"
                        },
                        Ships = "+2.00 S&H"
                    }
                },
                new RentProgram
                {
                    Name = "New CPAP",
                    Title = "New CPAP",
                    Type = ProgramType.New,
                    ImageUrl = "resmed-s10-airsense-auto.jpg",
                    Price = "49",
                    ProgramDescription = new List<string>()
                    {
                        "Email/Fax your valid sleep study and prescription to info@goodnightmedical.com and make sure to specify you are interested in a New CPAP rental",
                        "A dedicated service team member will contact you by phone or email to complete the order",
                        "Check your porch! Your CPAP machine with tubing and filter will be delivered to your door"
                    },
                    HowItWorks =
                        "After your completed order of a rental machine through Good Night Medical, we will send your new machine with tubing and filter. New machines must be rented for a minimum of eight (8) months. There is a one-time set up charge equal to the monthly fee to retrieve the initial physician order to set up the unit and confirm the validity of the prescription. This fee is waived if you are a current customer of Good Night Medical. If for any reason we cannot provide you with a machine, Good Night Medical will issue a full refund equivalent to the initial monthly fee paid. Good Night Medical also offers unlimited telephone support during the life of your rental.",
                    AdditionalTitle = "",
                    AdditionalDescription =
                        "*The rental amount will be charged until the rental program is returned or purchased. During your rental period, you may purchase the unit from us at any time. If the unit is damaged or lost due to your negligence, you will be obligated to purchase the unit. You may alternately choose to return the damaged machine to us, and for $75 we will diagnose and quote the repair. After the quote, the up-front $75 fee can be applied towards the cost of the  repair, the rental of a different unit, or the purchase of another unit.",
                    CatalogBriefInfo = new CatalogBriefInfo()
                    {
                        CatalogDescription = "Looking for a machine insurance will cover? Sometimes insurance requires starting out on rentals. These machines provide the highest quality care, with data upload capability and advanced pressure titration",
                        CatalogFeatures = new List<string>()
                        {
                            "Full compliance and efficacy reporting",
                            "Auto adjusting pressure",
                            "Manufacturer’s Warranty",
                            "Covered by most insurance"
                        },
                        Ships = "ships free"
                    }
                },
                new RentProgram
                {
                    Name = "New BiPAP",
                    Title = "BiPAP",
                    Type = ProgramType.Bipap,
                    ImageUrl = "philips-respironics-dreamstation-bipap.jpg",
                    Price = "79",
                    ProgramDescription = new List<string>()
                    {
                        "Email/Fax your valid sleep study and prescription to info@goodnightmedical.com and make sure to specify you are interested in a BiPAP rental",
                        "A dedicated service team member will contact you by phone or email to complete the order",
                        "Check your porch! Your CPAP machine with tubing and filter will be delivered to your door"
                    },
                    HowItWorks =
                        "After your completed order of a rental machine through Good Night Medical, we will send your new machine with tubing and filter. New machines must be rented for a minimum of eight (8) months. There is a one-time set up charge equal to the monthly fee to retrieve the initial physician order to set up the unit and confirm the validity of the prescription. This fee is waived if you are a current customer of Good Night Medical. If for any reason we cannot provide you with a machine, Good Night Medical will issue a full refund equivalent to the initial monthly fee paid. Good Night Medical also offers unlimited telephone support during the life of your rental.",
                    AdditionalTitle = "",
                    AdditionalDescription =
                        "*The rental amount will be charged until the rental program is returned or purchased. During your rental period, you may purchase the unit from us at any time. If the unit is damaged or lost due to your negligence, you will be obligated to purchase the unit. You may alternately choose to return the damaged machine to us, and for $75 we will diagnose and quote the repair. After the quote, the up-front $75 fee can be applied towards the cost of the repair, the rental of a different unit, or the purchase of another unit.",
                    CatalogBriefInfo = new CatalogBriefInfo()
                    {
                        CatalogDescription = "Premium bilevel sleep therapy that automatically adjusts inspiratory and expiratory pressure on a breath-by-breath basis",
                        CatalogFeatures = new List<string>()
                        {
                            "Perfect for high pressure settings or low oxygen levels",
                            "Bi-level auto adjusting pressure",
                            "Manufacturer’s Warranty",
                            "Humidifier included"
                        },
                        Ships = "ships free"
                    }
                }
            };

            foreach (var rentProgram in programs)
            {
                repo.Add(rentProgram);
            }

            Assert.That(repo.Any());
        }
    }
}



