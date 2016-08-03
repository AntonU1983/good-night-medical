using System;

namespace GenericBackend.Logging.Interfaces
{
    public interface ILogger
    {
        void Info(string message);
        void Error(string message);
        void Error(string message, Exception e);
        void Error(Exception e);
        void Fatal(string message);
        void Fatal(Exception e);
    }
}
