using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using GenericBackend.Areas.Admin.Models.Machine;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Repository;
using GenericBackend.UnitOfWork.GoodNightMedical;
using MongoDB.Bson;
using MongoDB.Driver;

namespace GenericBackend.Areas.Admin.Controllers
{
    [RoutePrefix("admin/machines")]
    public class MachineAdminController : ApiController
    {
        private readonly IMongoRepository<Machine> _repository;

        public MachineAdminController(IUnitOfWork unitOfWork)
        {
            _repository = unitOfWork.Machines;
        }

        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> Get()
        {
            var machines = await _repository.Collection.Find(new BsonDocument()).ToListAsync();

            return Ok(Mapper.Map<List<MachineAdminPreviewModel>>(machines));
        }

        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult Get(string id)
        {
            var machine = _repository.GetById(id);

            if (machine == null)
            {
                return NotFound();
            }

            return Ok(Mapper.Map<MachineAdminDetailsModel>(machine));
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody]MachineAdminCreateModel model)
        {
            var machine = Mapper.Map<Machine>(model);

            _repository.Add(machine);

            return Ok();
        }

        [HttpPut]
        [Route("{id}")]
        public IHttpActionResult Put(string id, [FromBody]MachineAdminUpdateModel model)
        {
            var machine = _repository.GetById(id);

            if (machine != null)
            {
                Mapper.Map(model, machine);
                _repository.Update(machine);
            }
            else
            {
                return NotFound();
            }

            return Ok();
        }
    }
}