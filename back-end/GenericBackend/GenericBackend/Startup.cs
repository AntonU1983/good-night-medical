using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;

[assembly: OwinStartup(typeof(GenericBackend.Startup))]
namespace GenericBackend
{
	public partial class Startup
	{
		public void Configuration(IAppBuilder app)
		{
			var configuration = new HttpConfiguration();

            
            WebApiConfig.Register(configuration);
            app.UseWebApi(configuration);
            ConfigurateAutofac(configuration, app);

            ConfigureOAuth(app);

            app.UseCors(CorsOptions.AllowAll);
        }
	}
}
