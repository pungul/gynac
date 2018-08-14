using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Sculptor.Gynac.Repository;

namespace Sculptor.Gynac.Controllers
{
    public class BaseController : Controller
    {
        public GynacEntities _newContext = new GynacEntities();

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            ViewBag.IsFaculty = User.IsInRole("Faculty");
            ViewBag.IsAdmin = User.IsInRole("Admin");
            if (ViewBag.IsAdmin)
            {
                ViewBag.UserId = User.Identity.GetUserId();
            }
            else
            {
                ViewBag.UserId = (User.Identity.GetUserId() != null ? User.Identity.GetUserId() : "0");
                var fid = Convert.ToString(User.Identity.GetUserId());
                var data = (User.Identity.GetUserId() != null ? _newContext.Faculties.Where(f => f.AspNetUsersId == fid).Select(s => s.Faculty_Id).FirstOrDefault().ToString() : "0"); ;
                ViewBag.FacultyId = data;
            }

            ViewBag.UserName = User.Identity.GetUserName();
            base.OnActionExecuting(filterContext);
        }
    }
}