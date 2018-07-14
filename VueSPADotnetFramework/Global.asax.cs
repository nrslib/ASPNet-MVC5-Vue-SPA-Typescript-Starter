using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace VueSPADotnetFramework {
    public class WebApiApplication : System.Web.HttpApplication
    {
        private const string SpaRootUrl = "~/Home/Index";

        private readonly HashSet<string> AllowedUrl = new HashSet<string>
        {
        };

        protected void Application_Start() {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        protected void Application_BeginRequest(Object sender, EventArgs e)
        {
            var path = Request.Url.AbsolutePath;

            var isApi = path.StartsWith("/api", StringComparison.InvariantCultureIgnoreCase);
            if (isApi)
            {
                return;
            }

            if (AllowedUrl.Contains(path))
            {
                return;
            }

            // For SPA
            if (!System.IO.File.Exists(Context.Server.MapPath(path)))
            {
                Context.RewritePath(SpaRootUrl);
            }
        }
    }
}
