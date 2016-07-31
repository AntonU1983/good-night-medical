using System.Web.Http;
using GenericBackend.Models.Payment;

namespace GenericBackend.Controllers
{
    [RoutePrefix("api/payment")]
    public class PaymentController : ApiController
    {
        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody] PaymentModel model)
        {
            return Ok();
        }
    }
}
