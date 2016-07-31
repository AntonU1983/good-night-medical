using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using GenericBackend.Areas.Admin.Models;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Repository;
using GenericBackend.UnitOfWork.GoodNightMedical;
using MongoDB.Bson;
using MongoDB.Driver;

namespace GenericBackend.Areas.Admin.Controllers
{
    [RoutePrefix("admin/rents")]
    public class RentAdminController : ApiController
    {
        private readonly IMongoRepository<FullRentCustomer> _repository;

        public RentAdminController(IUnitOfWork unitOfWork)
        {
            _repository = unitOfWork.FullRentCustomers;
        }

        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> Get()
        {
            var rents = await _repository.Collection.Find(new BsonDocument()).ToListAsync();

            return Ok(Mapper.Map<List<RentAdminPreviewModel>>(rents));
        }

        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult Get(string id)
        {
            var rent = _repository.GetById(id);

            return Ok(Mapper.Map<RentAdminDetailsModel>(rent));
        }

        [HttpPut]
        [Route("{id}/read")]
        public IHttpActionResult Put(string id)
        {
            var rent = _repository.GetById(id);

            if (rent != null)
            {
                rent.New = false;
                _repository.Update(rent);
            }

            return Ok();
        }
    }
}