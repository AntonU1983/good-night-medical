using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Models.Customer;
using GenericBackend.Repository;
using GenericBackend.UnitOfWork.GoodNightMedical;
using MongoDB.Bson;
using MongoDB.Driver;

namespace GenericBackend.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/customer")]
    public class CustomerController : ApiController
    {
        private readonly IMongoRepository<Customer> _customersRepository;

        public CustomerController(IUnitOfWork unitOfWork)
        {
            _customersRepository = unitOfWork.Customers;
        }

        [HttpPost]
        [Route("")]
        public async Task<IHttpActionResult> Post([FromBody] Customer customer)
        {
            var machines = await _customersRepository.Collection.Find(new BsonDocument()).ToListAsync();

            return Ok(machines);
        }
    }
}
