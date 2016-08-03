using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericBackend.Common.Utility
{
    public class LogUtility
    {
        /// <summary>
        /// This methods formats an error message so that it is 
        /// in a nice format for the event log or other places
        /// </summary>
        /// <param name="exception">The exception</param>
        /// <returns>A formatted error message</returns>
        public static string BuildExceptionMessage(Exception exception)
        {
            Exception logException = exception;

            if (exception.InnerException != null)
            {
                logException = exception.InnerException;
            }

            string strErrorMsg = Environment.NewLine + "Error in Path :" + System.Web.HttpContext.Current.Request.Path;

            strErrorMsg += Environment.NewLine + "Raw Url :" + System.Web.HttpContext.Current.Request.RawUrl;

            strErrorMsg += Environment.NewLine + "Message :" + logException.Message;

            strErrorMsg += Environment.NewLine + "Source :" + logException.Source;

            strErrorMsg += Environment.NewLine + "Stack Trace :" + logException.StackTrace;

            strErrorMsg += Environment.NewLine + "TargetSite :" + logException.TargetSite;

            return strErrorMsg;
        }

        public static string GetUnwrappedMessage(Exception exception)
        {
            var aggregate = exception as AggregateException;

            if (aggregate != null)
                return GetUnwrappedMessage(aggregate);

            var builder = new StringBuilder();

            while (exception != null)
            {
                builder.AppendFormat("{0}. ", exception.Message);
                exception = exception.InnerException;
            }

            return builder.ToString();
        }

        public static string GetUnwrappedMessage(AggregateException exception)
        {
            var builder = new StringBuilder();

            foreach (var innerException in exception.InnerExceptions)
                builder.AppendLine(GetUnwrappedMessage(innerException));

            return builder.ToString();
        }
    }
}
