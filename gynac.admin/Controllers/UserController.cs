using Sculptor.Gynac.Repository.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Sculptor.Gynac.Repository;
using Sculptor.Gynac.Repository.Common;
using Sculptor.Gynac.Models;
using Sculptor.Gynac.Repository.UserTalks;
using System.IO;
using System.Text;



namespace Sculptor.Gynac.Controllers
{
    [Authorize]
    public class UserController : BaseController
    {
        private readonly IUserRepository _userRepo;
        private readonly ICommonRepository _commonRepo;
        private readonly IUserTalksRepository _userTalkRepo;

        public UserController()
        {
            _userRepo = new UserRepository();
            _commonRepo = new CommonRepository();
            _userTalkRepo = new UserTalksRepository();
        }
        // GET: User
        [HttpGet]
        public async Task<ActionResult> Index()
        {
            var data = await _userRepo.GetAllUsers();
            return View(data.ToList());
        }

        //get All users return in json
        //public async Task<JsonResult> GetAllUsers()
        //{
        //    var data = await _userRepo.GetAllUsers();
        //    var users = data.ToList().Select(u => new UserModelSelect()
        //    {
        //        UserId = u.User_Id,
        //        UserName = u.First_Name
        //    }).ToList();
        //    return Json(users, JsonRequestBehavior.AllowGet);
        //}


        // GET: User by Id
        [HttpGet]
        public async Task<ActionResult> GetUserById(Int32 userId)
        {
            var data = await _userRepo.GetUserById(userId);
            return View(data);
        }

        // UPDATE : User
        [HttpPost]
        public async Task<ActionResult> UpdateUser(User model)
        {
            var data = await _userRepo.UpdateUser(model);
            return RedirectToAction("Index", "User");
        }

        // Get : all set Access User Talks Links
        [HttpGet]
        public async Task<ActionResult> SetTalksLink(Int32 userId)
        {
            //var data = await _userRepo.UpdateUser(model);
            ViewBag.userId = userId;

            var data = new UserTaskModel();
            ViewBag.userTalksExits = await _userTalkRepo.IsUserTalksExits(userId);

            var sessionDataModel = await _commonRepo.GetAllSession();

            var checkList = await _userTalkRepo.GetUserTalks(userId);

            //var sessionModel = new List<SessionMasterModel>();
            foreach (var session in sessionDataModel)
            {
                var sessionModel = new SessionMasterModel();
                sessionModel.Id = session.Id;
                sessionModel.Name = session.Name;

                //sessionModel.Add(model);
                var moduleDataModel = await _commonRepo.GetAllModule(sessionModel.Id);
                var sessionModuleCount = moduleDataModel.Count();
                var moduleCount = 0;
                foreach (var module in moduleDataModel)
                {
                    var moduleModel = new ModuleMasterModel();
                    moduleModel.Id = module.Id;
                    moduleModel.Name = module.Name;
                    moduleModel.SessionId = module.SessionId;
                    moduleModel.IsModuleChecked = false;

                    var talksDataModel = await _commonRepo.GetAllTalks(sessionModel.Id, moduleModel.Id);
                    var moduleTalksCount = talksDataModel.Count();
                    var talksCount = 0;
                    foreach (var talks in talksDataModel)
                    {
                        var talksModel = new TalkMasterModel();
                        talksModel.Id = talks.Id;
                        talksModel.Name = talks.Name;
                        talksModel.VideoLink = talks.VideoLink;
                        talksModel.SessionId = talks.SessionId;
                        talksModel.ModulId = talks.ModulId;


                        var check = checkList.Where(c => c.TalkId == talks.Id).FirstOrDefault();
                        if (check != null)
                        {
                            talksModel.IsTalksChecked = true;
                            talksModel.EndDate = check.Enddate.GetValueOrDefault();
                            talksCount++;
                        }
                        else
                        {
                            talksModel.IsTalksChecked = false;
                        }
                        //bool s = false;
                        //DateTime setEndDate;
                        //talksModel.IsTalksChecked = s;
                        //foreach (var chk in chekList)
                        //{
                        //    if (talks.Id == chk.TalkId)
                        //    {
                        //        talksCount++;
                        //        talksModel.EndDate = chk.Enddate.GetValueOrDefault();
                        //        s = true;
                        //    }
                        //}
                        //if (s)
                        //{
                        //    talksModel.IsTalksChecked = s;
                        //}

                        moduleModel.UserTalkMaster.Add(talksModel);
                    }
                    if (moduleTalksCount == talksCount)
                    {
                        moduleCount++;
                        moduleModel.IsModuleChecked = true;
                    }
                    sessionModel.UserModuleMaster.Add(moduleModel);
                }
                if (moduleCount == sessionModuleCount)
                {
                    sessionModel.IsSessionChecked = true;
                }
                data.UserSessionMaster.Add(sessionModel);

            }

            return View(data);
        }

        [HttpPost]
        public async Task<ActionResult> SetUserTalksLink(Int32 userId, List<int> talksId, string endDate, bool isUnCheckAll)
        {
            var data = await _userTalkRepo.SetUserTalks(userId, talksId, endDate, isUnCheckAll);
            var userEmail= await _userRepo.GetUserById(userId);

            string toAddress = userEmail.Email.ToString();

            string body = string.Empty;

            if (data.addTalkList.Count() > 0) {

                string path = System.Web.HttpContext.Current.Server.MapPath("~/Views/EmailTemplates/AccessRight.html");
                using (StreamReader reader = new StreamReader(path))
                {
                    body = reader.ReadToEnd();
                }

                var names = new StringBuilder();
                var talksName = data.addTalkList;
                for (var i = 0; i < talksName.Count(); i++)
                {
                    names.Append(i + 1);
                    names.Append(' ');
                    names.Append(talksName.ElementAt(i).TalkName);
                    names.Append("<br/>");
                }

                body = body.Replace("{talklist}", names.ToString());
                body = body.Replace("{supoortEmail}", System.Configuration.ConfigurationManager.AppSettings["supportEmail"]);
                
                _commonRepo.SendMail(toAddress, Sculptor.Gynac.Repository.Common.CommonRepository.EmailType.TalkAccess, "", body);
            }

            if (data.removeTalkList.Count() > 0)
            {
                string path = System.Web.HttpContext.Current.Server.MapPath("~/Views/EmailTemplates/RevokedRight.html");
                using (StreamReader reader = new StreamReader(path))
                {
                    body = reader.ReadToEnd();
                }

                var names = new StringBuilder();
                var talksName = data.removeTalkList;
                for (var i = 0; i < talksName.Count() ; i++)
                {
                    names.Append(i + 1);
                    names.Append(' ');
                    names.Append(talksName.ElementAt(i).TalkName);
                    names.Append("<br/>");
                }

                body = body.Replace("{talklist}", names.ToString());
                body = body.Replace("{supoortEmail}", System.Configuration.ConfigurationManager.AppSettings["supportEmail"]);
                
                _commonRepo.SendMail(toAddress, Sculptor.Gynac.Repository.Common.CommonRepository.EmailType.TalkRevoked, "", body);
            }

            return Json(new { success = true });
        }

        [HttpGet]
        public async Task<ActionResult> TutorialSummary(Int32 userId)
        {
            var data =  _userTalkRepo.TutorialSummary(userId);
            var userdata = await _userRepo.GetUserById(userId);
            ViewBag.TutorialSummaryTitle = userdata.TutorialSummaryTitle;
            return View(data);
        }
    }
}