using System.Web;
using System.Web.Optimization;

namespace Sculptor.Gynac
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/jquery.min.js",      
                "~/Scripts/bootstrap.js",                
                      "~/Scripts/js/jquery.metisMenu.js",
                      "~/Scripts/js/jquery.slimscroll.min.js",
                      "~/Scripts/js/custom.js",
                      "~/Scripts/js/screenfull.js",
                      "~/Scripts/js/skycons.js",
                      "~/Scripts/js/jquery.nicescroll.js",
                      "~/Scripts/js/scripts.js",
                      "~/Scripts/js/underscore-min.js",
                      "~/Scripts/js/moment-2.2.1.js",
                      "~/Scripts/js/clndr.js",
                      "~/Scripts/js/jquery.dataTables.js",
                      "~/Scripts/js/dataTables.bootstrap.js",                      
                      "~/Scripts/js/site.js",
                      "~/Scripts/respond.js",
                      "~/Scripts/bootstrap-multiselect.js"
                      ));

            

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                       "~/Content/font-awesome.css",                        
                         "~/Content/custom.css",
                         "~/Content/clndr.css",
                          "~/Content/custom_1.css",
                          "~/Content/dataTables.bootstrap.css",
                          "~/Content/bootstrap-multiselect.css",
                      "~/Content/style.css"));
        }
    }
}
