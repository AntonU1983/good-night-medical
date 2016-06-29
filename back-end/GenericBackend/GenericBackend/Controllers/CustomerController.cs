using System.Web.Http;
using GenericBackend.DataModels.GoodNightMedical;
using GenericBackend.Models.Customer;
using GenericBackend.Repository;
using GenericBackend.UnitOfWork.GoodNightMedical;

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

        [HttpPost]
        [Route("rent")]
        public IHttpActionResult PostContact([FromBody] CustomerRentInsert customerRent)
        {
            _fullCustomersRepository.Add(new FullRentCustomer
            {
                Email = customerRent.Email,
                FullName = customerRent.FullName,
                Phone = customerRent.Phone,
                Comments = customerRent.Comments,
                ContactMethod = customerRent.Contact,
                DoctorPrescription = customerRent.Prescription
            });

            return Ok();
        }
    }
}
