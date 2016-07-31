using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Repository;
using GenericBackend.UnitOfWork.GoodNightMedical;
using MongoDB.Bson;
using MongoDB.Driver;

namespace GenericBackend.Areas.Admin.Controllers
{
    [RoutePrefix("admin/help")]
    public class HelpAdminController : ApiController
    {
        private readonly IMongoRepository<FullRentCustomer> _fullCustomersRepository;

        public HelpAdminController(IUnitOfWork unitOfWork)
        {
            _fullCustomersRepository = unitOfWork.FullRentCustomers;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult Get()
        {
            var helpPrograms = _fullCustomersRepository.Collection.Find(new BsonDocument()).ToListAsync();
            return Ok();
        }

        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult Get(string id)
        {
            return Ok();
        }
    }
}
