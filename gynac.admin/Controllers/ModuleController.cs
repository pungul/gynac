using Sculptor.Gynac.Models;
using Sculptor.Gynac.Repository.Module;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Sculptor.Gynac.Controllers
{
    [Authorize]
    public class ModuleController : BaseController
    {
        private readonly IModuleMasterRepository _moduleRepo;

        public ModuleController()
        {
            _moduleRepo = new ModuleMasterRepository();
        }

        [HttpGet]
        // GET: Module
        public async Task<ActionResult> Index()
        {
            var data = await _moduleRepo.GetModuleMaster();

            var moduleData = await _moduleRepo.GetModuleMaster();
            var moduleDataList = moduleData.ToList().Select(m => new ModuleMasterSelect()
            {
                ModuleId = m.Id,
                ModuleName = m.Name
            }).ToList();

            ViewBag.moduleList = new SelectList(moduleDataList, "ModuleId", "ModuleName");

            return View();
        }

        [HttpGet]
        //GetSampleImages
        public async Task<ActionResult> GetSampleImages(Int32 moduleId)
        {
            var SampleImages = await _moduleRepo.GetModuleSmapleImages(moduleId);
            var data = SampleImages.ToList().Select(m => new ModuleSampleImageList()
            {
                SampleImage = m.SampleImage,
                ModuleSampleImageId = m.Id,
                ImageDesc = m.Description
            });
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        //UploadSampleImage        
        public async Task<ActionResult> UploadFiles()
        {
            var httpRequest = System.Web.HttpContext.Current.Request;
            //int result = 0;
            var model = new ModuleSampleImageList();
            model.ModuleId = Convert.ToInt32(httpRequest.Form[0]);
            model.ImageDesc = httpRequest.Form[1];

            foreach (string file in httpRequest.Files)
            {
                var postedFile = httpRequest.Files[file];
                if (postedFile != null && postedFile.ContentLength > 0)
                {

                    int MaxContentLength = 1024 * 1024 * 20; //Size = 20 MB  

                    IList<string> AllowedFileExtensions = new List<string> { ".jpg", ".jpeg", ".gif", ".png" };
                    var ext = postedFile.FileName.Substring(postedFile.FileName.LastIndexOf('.'));
                    var extension = ext.ToLower();
                    if (!AllowedFileExtensions.Contains(extension))
                    {
                        throw new Exception("Please upload image of type .jpg, .jpeg, .gif, .png.");
                    }
                    else if (postedFile.ContentLength > MaxContentLength)
                    {
                        throw new Exception("Please upload a file upto 1 mb.");
                    }
                    else
                    {
                        var fileName = Guid.NewGuid().ToString() + extension;
                        var filePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/images/" + fileName);
                        postedFile.SaveAs(filePath);
                        model.SampleImage = "/Content/images/" + fileName;
                        var res = await _moduleRepo.UploadSampleImage(model);
                    }
                }
                else
                {
                    return Json(true, JsonRequestBehavior.AllowGet);
                }
            }

            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        //GetSampleImages
        public async Task<ActionResult> DeleteSampleImage(Int32 sampleModuleId)
        {
            var SampleImages = await _moduleRepo.DeleteSampleImage(sampleModuleId);            
            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }

    
}