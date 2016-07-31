using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Models;
using GenericBackend.Repository;
using GenericBackend.UnitOfWork.GoodNightMedical;
using MongoDB.Bson;
using MongoDB.Driver;

namespace GenericBackend.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/machines")]
    public class MachineController : ApiController
    {
        private readonly IMongoRepository<Machine> _machinesRepository;
        private readonly IMongoRepository<FullRentCustomer> _rentsRepository;
        private readonly IMongoRepository<RentProgram> _rentProgramsRepository;

        public MachineController(IUnitOfWork unitOfWork)
        {
            _machinesRepository = unitOfWork.Machines;
            _rentsRepository = unitOfWork.FullRentCustomers;
            _rentProgramsRepository = unitOfWork.RentPrograms;
        }

        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> Get()
        {
            var machines = await _machinesRepository.Collection.Find(new BsonDocument()).ToListAsync();

            return Ok(machines);
        }

        [HttpGet]
        [Route("catalog")]
        public async Task<IHttpActionResult> GetMachinePrograms()
        {
            var rentPrograms = await _rentProgramsRepository.Collection.Find(new BsonDocument()).ToListAsync();
            var models = new List<CatalogModel>();

            foreach (var rentProgram in rentPrograms)
            {
                models.Add(new CatalogModel
                {
                    Title = rentProgram.Title,
                    Description = rentProgram.CatalogBriefInfo.CatalogDescription,
                    Ships = rentProgram.CatalogBriefInfo.Ships,
                    Features = rentProgram.CatalogBriefInfo.CatalogFeatures,
                    Type = rentProgram.Type.ToString(),
                    ImageUrl = rentProgram.ImageUrl,
                    Price = rentProgram.Price,
                    IsPayment = Convert.ToBoolean(ConfigurationManager.AppSettings["IsPayment"])
                });
            }

            return Ok(models);
        }

        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> GetByType([FromUri]ProgramType type)
        {
            var program = _rentProgramsRepository
                .FirstOrDefault(x => x.Type == type);

            var machinesByType = await _machinesRepository.Collection
                .Find(x => x.Type == type)
                .ToListAsync();
            
            return Ok(new MachineProgramModel
            {
              Program  = program,
              Machines = machinesByType,
              IsPayment = Convert.ToBoolean(ConfigurationManager.AppSettings["IsPayment"])
            });
        }

        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult Get(string id)
        {
            var machine = _machinesRepository.GetById(id);

            return Ok(machine);
        }

        [HttpGet]
        [Route("rents/seen/{id}")]
        public IHttpActionResult SetSeen(string id)
        {
            var customer = _rentsRepository.GetById(id);

            if (customer == null) return Ok();

            customer.New = false;
            _rentsRepository.Update(customer);

            return Ok();
        }

        [HttpGet]
        [Route("rents")]
        public async Task<IHttpActionResult> GetRentAsks()
        {
            var rents = await _rentsRepository.Collection.Find(new BsonDocument()).ToListAsync();

            return Ok(rents);
        }
    }
}
