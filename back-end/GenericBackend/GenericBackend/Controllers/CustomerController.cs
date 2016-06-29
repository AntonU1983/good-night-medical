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
        public IHttpActionResult Post([FromBody] CustomerInsert customer)
        {
            _customersRepository.Add(new Customer
            {
                Email = customer.Email,
                FullName = customer.FullName,
                Phone = customer.Phone
            });

            return Ok();
        }
    }
}
