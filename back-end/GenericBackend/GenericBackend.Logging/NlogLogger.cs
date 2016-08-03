using System;
using NLog;
using ILogger = GenericBackend.Logging.Interfaces.ILogger;

namespace GenericBackend.Logging
{
    public class NlogLogger : ILogger
    {
        private static readonly Lazy<NlogLogger> _lazyLogger = new Lazy<NlogLogger>(() => new NlogLogger());
        private static readonly Lazy<NLog.Logger> _lazyNlogLogger = new Lazy<Logger>(NLog.LogManager.GetCurrentClassLogger);

        public static ILogger Instance => _lazyLogger.Value;

        static NlogLogger()
        {
            
        }

        public void Info(string message)
        {
            _lazyNlogLogger.Value.Info(message);
        }

        public void Error(string message)
        {
            _lazyNlogLogger.Value.Error(message);
        }

        public void Error(string message, Exception e)
        {
            _lazyNlogLogger.Value.Error(e, message);
        }

        public void Error(Exception e)
        {
            _lazyNlogLogger.Value.Error(e);
        }

        public void Fatal(string message)
        {
            _lazyNlogLogger.Value.Fatal(message);
        }

        public void Fatal(Exception e)
        {
            _lazyNlogLogger.Value.Fatal(e);
        }
    }
}
