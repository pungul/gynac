using Newtonsoft.Json;
using Sculptor.Gynac.Models;
using Sculptor.Gynac.Repository.Common;
using Sculptor.Gynac.Repository.Faculties;
using Sculptor.Gynac.Repository.Users;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Sculptor.Gynac.Controllers
{
    [Authorize]
    public class FacultyController : BaseController
    {
        private readonly IFacultyRepository _facultyRepo;
        private readonly IUserRepository _userRepo;
        private readonly ICommonRepository _commonRepo;

        public FacultyController()
        {
            _facultyRepo = new FacultyRepository();
            _userRepo = new UserRepository();
            _commonRepo = new CommonRepository();
        }

        public ActionResult Dashboard()
        {
            return View();
        }

        // GET: Faculty
        [HttpGet]
        public async Task<ActionResult> Index()
        {
            var data = await _facultyRepo.GetAllFaculty();
            return View(data.ToList());
        }

        // GET: Faculty Users
        //[HttpGet]
        //public async Task<ActionResult> GetFacultyUsers(Int32 facultyId)
        //{
        //    var data = await _userRepo.GetAllUsersByFaculty(facultyId);
        //    ViewBag.facultyId = facultyId;
        //    return View(data.ToList());
        //}

        //get user list for review bases of talks
        [HttpGet]
        public async Task<ActionResult> GetFacultyUsers(Int32 facultyId)
        {
            var data = await _facultyRepo.GetUserImagesForReview(facultyId);
            ViewBag.facultyId = facultyId;
            return View(data.ToList());
        }

        // GET: Faculty Users except this facultyId
        [HttpGet]
        public async Task<JsonResult> GetFacultyUserExceptThis(Int32 facultyId)
        {
            var facultyUserListExcepThis = await _facultyRepo.GetAllFaculty();
            var data = facultyUserListExcepThis.Where(f => f.Faculty_Id != facultyId).Select(s => new FacultyModel()
                {
                    Faculty_Id = s.Faculty_Id,
                    Title = s.Title,
                    Name = s.Name,
                    Image = s.Image,
                    Profile_Summary = s.Profile_Summary,
                    //Insert_Date = s.Insert_Date.Value,
                    //Update_Date = s.Update_Date.Value
                }).ToList();

            return Json(data, JsonRequestBehavior.AllowGet);
        }

        // GET: Module Images by Users
        //[HttpGet]
        //public async Task<ActionResult> GetAllReviewImages(Int32 moduleId, Int32 userId, Int32 facultyId)
        //{
        //    var model = new ModuleDetailsModel();

        //    var module = await _commonRepo.GetModuleById(moduleId);
        //    model.Module.Id = module.Id;
        //    model.Module.Name = module.Name;

        //    foreach (var item in module.ModuleImages)
        //    {
        //        var SampleImages = new ModuleSampleImages();
        //        SampleImages.Id = item.Id;
        //        SampleImages.Description = item.Description;
        //        SampleImages.ModulId = item.ModulId;
        //        SampleImages.SampleImage = item.SampleImage;
        //        model.Module.ModuleSampleImages.Add(SampleImages);
        //    }

        //    var userModuleImages = await _commonRepo.GetUserModuleImageByModuleId(moduleId, userId, facultyId);

        //    foreach (var item in userModuleImages)
        //    {
        //        var userImages = new UserSampleImages();
        //        userImages.Id = item.Id;
        //        userImages.ModulId = item.ModulId;
        //        userImages.ModuleImageId = item.ModuleImageId;
        //        userImages.UserId = item.UserId;
        //        userImages.FacultyId = item.Faculty_Id;
        //        userImages.ImagePath = item.ImagePath;
        //        userImages.IsStatus = item.IsStatus;
        //        userImages.Comment = item.Comment;
        //        model.UserModuleImages.Add(userImages);
        //    }

        //    return View(model);
        //}

        //get user image for review bases of talks
        [HttpGet]
        public async Task<ActionResult> GetAllReviewImages(Int32 userModuleImageId)
        {
            var data = await _facultyRepo.GetUserModuleImage(userModuleImageId);            
            return View(data);
        }

        [HttpPost]
        public async Task<ActionResult> AddReveiewImage(ReviewCommentModel model)
        {
            var data = await _facultyRepo.ReviewImage(model);

            var userEmail = await _userRepo.GetUserById(model.UserId);
            var facultiesData = await _facultyRepo.GetAllFaculty();
            var facultyEmail = facultiesData.Where(f => f.Faculty_Id == model.FacultyId).First().Email;
            var moduleData = await _commonRepo.GetModuleById(model.ModuleId);
            var moduleName = moduleData.Name;

            var userModuleData = await _commonRepo.GetUserModuelImageById(model.UserModuleImageId);
            var moduleImageName = userModuleData.ImagePath;
            var moduleComment = userModuleData.Comment;

            string toAddress = string.Empty;//userEmail.Email.ToString();

            string body = string.Empty;
            if (model.IsStatus == 1) { // 1 for accept
                
                string path = System.Web.HttpContext.Current.Server.MapPath("~/Views/EmailTemplates/ImageAccepted.html");
                using (StreamReader reader = new StreamReader(path))
                {
                    body = reader.ReadToEnd();
                }

                body = body.Replace("{modulename}", moduleName);
               // body = body.Replace("{moduleimage}", moduleImageName);
                body = body.Replace("{moduleComment}", moduleComment);

               // toAddress = userEmail.Email.ToString() + "," + facultyEmail.ToString();
                toAddress = userEmail.Email.ToString();
                _commonRepo.SendMail(toAddress, Sculptor.Gynac.Repository.Common.CommonRepository.EmailType.AcceptImage, "", body);
            }
            else if (model.IsStatus == 2)// 2 for rejected
            {
                string path = System.Web.HttpContext.Current.Server.MapPath("~/Views/EmailTemplates/ImageRejected.html");
                using (StreamReader reader = new StreamReader(path))
                {
                    body = reader.ReadToEnd();
                }

                body = body.Replace("{modulename}", moduleName);
               // body = body.Replace("{moduleimage}", moduleImageName);
                body = body.Replace("{moduleComment}", moduleComment);

                //toAddress = userEmail.Email.ToString() + "," + facultyEmail.ToString();
                toAddress = userEmail.Email.ToString();

                _commonRepo.SendMail(toAddress, Sculptor.Gynac.Repository.Common.CommonRepository.EmailType.RejectImage, "", body);
            }

            

            return Json(new { success = true });
        }

        [HttpPost]
        public async Task<ActionResult> TransferFacultyForReviews(TransferToFacultyModel model)
        {
            var data = await _facultyRepo.TransferToFaculty(model);

            return Json(new { success = true });
        }
    }
}