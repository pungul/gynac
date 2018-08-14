using Sculptor.Gynac.Models;
using Sculptor.Gynac.Repository.Notifications;
using Sculptor.Gynac.Repository.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Sculptor.Gynac.Controllers
{
    [Authorize]
    public class NotificationController : BaseController
    {
        private readonly INotificationRepository _notificationRepo;
        private readonly IUserRepository _userRepo;
        public NotificationController()
        {
            _notificationRepo = new NotificationRepository();
            _userRepo = new UserRepository();
        }
        // GET: Notification
        [HttpGet]
        public async Task<ActionResult> Index()
        {
            var data = await _notificationRepo.GetAllNotification();
            var userData = await _userRepo.GetAllUsers();
            var data1 =userData.ToList().Select(u => new UserModelSelect()
            {
                UserId = u.User_Id,
                UserName = u.First_Name
            }).ToList();
            ViewBag.UserList = new MultiSelectList(data1, "UserId", "UserName");
            return View(data);
        }

        // GET: Notification by id
        //[HttpGet]
        //public async Task<JsonResult> GetNotification(Int32 notificationId)
        //{
        //    var data = await _notificationRepo.GetNotification(notificationId);
        //    return Json(data, JsonRequestBehavior.AllowGet);
        //}

        // ADD: Notification
        [HttpPost]
        public async Task<JsonResult> AddNotification(NotificationModel model)
        {
            bool res;            
            res = await _notificationRepo.AddNotification(model);            
            return Json(res, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public async Task<JsonResult> DeleteNotification(Int32 notificationId)
        {
            bool res;
            res = await _notificationRepo.DeleteNotification(notificationId);
            return Json(res, JsonRequestBehavior.AllowGet);
        }
    }
}