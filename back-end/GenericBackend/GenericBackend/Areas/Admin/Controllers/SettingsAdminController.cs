using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using GenericBackend.Areas.Admin.Models.Settings;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Repository;
using GenericBackend.UnitOfWork.GoodNightMedical;
using MongoDB.Bson;
using MongoDB.Driver;

namespace GenericBackend.Areas.Admin.Controllers
{
    [RoutePrefix("admin/settings")]
    [AllowAnonymous]
    public class SettingsAdminController : ApiController
    {
        private readonly IMongoRepository<Setting> _repository;

        public SettingsAdminController(IUnitOfWork unitOfWork)
        {
            _repository = unitOfWork.Settings;
        }

        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> Get()
        {
            var settings = await _repository.Collection.Find(new BsonDocument()).ToListAsync();

            return Ok(Mapper.Map<List<SettingAdminModel>>(settings));
        }

        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult Get(string id)
        {
            var setting = _repository.GetById(id);

            if (setting == null)
            {
                return NotFound();
            }

            return Ok(Mapper.Map<SettingAdminModel>(setting));
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody]SettingAdminModel adminModel)
        {
            var setting = Mapper.Map<Setting>(adminModel);

            _repository.Add(setting);

            return Ok();
        }
    }
}
