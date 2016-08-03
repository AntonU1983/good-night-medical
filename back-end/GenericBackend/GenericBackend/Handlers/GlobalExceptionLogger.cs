using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.ExceptionHandling;
using GenericBackend.Common.Utility;
using GenericBackend.Logging;
using GenericBackend.Logging.Interfaces;

namespace GenericBackend.Handlers
{
    public class GlobalExceptionLogger : IExceptionLogger
    {
        private readonly ILogger _logger = NlogLogger.Instance;

        public Task LogAsync(ExceptionLoggerContext context, CancellationToken cancellationToken)
        {
            _logger.Error(LogUtility.BuildExceptionMessage(context.Exception));
            
            return Task.FromResult<object>(null);
        }
    }
}