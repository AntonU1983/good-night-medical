using System.Net;
using System.Net.Http;
using System.Web.Http.ExceptionHandling;
using System.Web.Http.Results;

namespace GenericBackend.Handlers
{
    public class GlobalExceptionHandler : ExceptionHandler
    {
        private static readonly string _message = "Internal server error.";

        public override void Handle(ExceptionHandlerContext context)
        {
            context.Result = new ResponseMessageResult(BuildResponseMessage(context));
        }

        private static HttpResponseMessage BuildResponseMessage(ExceptionHandlerContext context)
        {
            return context.Request.CreateResponse(HttpStatusCode.InternalServerError, _message);
        }
    }
}