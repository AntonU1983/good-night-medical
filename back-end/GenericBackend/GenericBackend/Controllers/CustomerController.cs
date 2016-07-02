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
        private readonly IMongoRepository<FullRentCustomer> _fullCustomersRepository;

        public CustomerController(IUnitOfWork unitOfWork)
        {
            _customersRepository = unitOfWork.Customers;
            _fullCustomersRepository = unitOfWork.FullRentCustomers;
        }

        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> Get()
        {
            var customers = await _customersRepository.Collection.Find(new BsonDocument()).ToListAsync();

            return Ok(customers);
        }

        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult Get(string id)
        {
            var customer = _customersRepository.GetById(id);

            return Ok(customer);
        }

        [HttpGet]
        [Route("seen/{id}")]
        public IHttpActionResult SetSeen(string id)
        {
            var customer = _customersRepository.GetById(id);

            if (customer == null) return Ok();

            customer.New = false;
            _customersRepository.Update(customer);

            return Ok();
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody] CustomerInsert customer)
        {
            _customersRepository.Add(new Customer
            {
                LandingId = customer.LandingId,
                Email = customer.Email,
                FullName = customer.FullName,
                Phone = customer.Phone
            });

            return Ok();
        }

        [HttpPost]
        [Route("rent")]
        public IHttpActionResult PostContact([FromBody] CustomerRentInsert customerRent)
        {
            _fullCustomersRepository.Add(new FullRentCustomer
            {
                LandingId = customerRent.LandingId,
                Email = customerRent.Email,
                FullName = customerRent.FullName,
                Phone = customerRent.Phone,
                Comments = customerRent.Comments,
                ContactMethod = customerRent.Contact,
                DoctorPrescription = customerRent.Prescription,
                MachineId = customerRent.MachineId
            });

            return Ok();
        }
    }
}
