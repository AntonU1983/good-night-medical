using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using GenericBackend.Notifications.Template;

namespace GenericBackend.Notifications
{
    public class EmailSender
    {
        private SmtpClient _smtpClient;
        private readonly string _email;
        private readonly string _password;
        private readonly string _serverName;
        private readonly int _serverPort;
        private readonly bool _defaultCredentials;
        private readonly bool _useSsl;

        public EmailSender()
        {
            _email = ConfigurationManager.AppSettings["Email"];
            _password = ConfigurationManager.AppSettings["Password"];
            _serverName = ConfigurationManager.AppSettings["Host"];
            _serverPort = Convert.ToInt32(ConfigurationManager.AppSettings["Port"]);
            _defaultCredentials = Convert.ToBoolean(ConfigurationManager.AppSettings["DefaultCredentials"]);
            _useSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableSSL"]);
        }
        public void Initialize()
        {
            _smtpClient = new SmtpClient(_serverName, _serverPort)
            {
                UseDefaultCredentials = _defaultCredentials
            };

            if (!_defaultCredentials)
                _smtpClient.Credentials = new NetworkCredential(_email, _password);

            _smtpClient.EnableSsl = _useSsl;
        }

        public void SendMessage(EmailModel model)
        {
            var emailMessage = CreateEmailMessage(model);

            try
            {
                _smtpClient.Send(emailMessage);
            }
            catch
            {
                throw;
            }
        }

        protected virtual MailMessage CreateEmailMessage(EmailModel model)
        {
            return new MailMessage
            {
                From = new MailAddress(_email, _email),
                To = { model.To },
                Subject = model.Subject,
                Body = model.Body,
                IsBodyHtml = true
            };
        }
    }
}
