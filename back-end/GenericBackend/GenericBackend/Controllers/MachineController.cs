using System.Threading.Tasks;
using System.Web.Http;
using GenericBackend.DataModels.GoodNightMedical;
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

        public MachineController(IUnitOfWork unitOfWork)
        {
            _machinesRepository = unitOfWork.Machines;
        }

        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> Get()
        {
            var machines = await _machinesRepository.Collection.Find(new BsonDocument()).ToListAsync();

            return Ok(machines);
        }
    }
}
