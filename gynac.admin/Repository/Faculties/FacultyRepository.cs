using Sculptor.Gynac.Models;
using Sculptor.Gynac.Models.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Sculptor.Gynac.Repository.Faculties
{
    public class FacultyRepository : BaseRepository, IFacultyRepository
    {
        public async Task<IQueryable<Faculty>> GetAllFaculty()
        {
            return await Task.Run(() =>
            {
                return _contex.Faculties;
            });
        }


        public async Task<IEnumerable<UsersForReviewModel>> GetUserImagesForReview(int facultyId)
        {
            return await Task.Run(() =>
            {
                var userImagesDataModel = _contex.UserModuleImages.Where(u => u.Faculty_Id == facultyId && u.IsStatus == (int)StatusEnum.Pending);
                var userImagesModel = new List<UsersForReviewModel>();
                foreach (var item in userImagesDataModel)
                {
                    var model = new UsersForReviewModel();
                    model.UserModuleImagesId = item.Id;
                    model.UserId = item.UserId;
                    model.UserName = item.User.First_Name;
                    model.Email = item.User.Email;
                    model.ModuleId = item.ModulId;
                    model.ModuleName = item.ModuleMaster.Name;
                    userImagesModel.Add(model);
                }
                return userImagesModel;
            });

        }


        public async Task<UserImageForReviewModel> GetUserModuleImage(int userModuleImageId)
        {
            var data = await _contex.UserModuleImages.FindAsync(userModuleImageId);
            var model = new UserImageForReviewModel();
            model.UserModuleImageId = data.Id;
            model.FacultyId = data.Faculty_Id;
            model.ModuleId = data.ModulId;
            model.ModuleName = data.ModuleMaster.Name;            
            model.SampleImagePath = data.ModuleImage.SampleImage;
            model.Description = data.ModuleImage.Description;
            model.UserId = data.UserId;

            var imgUrl = System.Configuration.ConfigurationManager.AppSettings["FrontEndUrl"];
            model.UserImagePath = imgUrl + data.ImagePath;

            return model;
        }

        public async Task<bool> ReviewImage(ReviewCommentModel model)
        {
            var data = await _contex.UserModuleImages.FindAsync(model.UserModuleImageId);

            data.Comment = model.Comment;
            data.IsStatus = model.IsStatus;

            await _contex.SaveChangesAsync();


            var sampleModuleImageCount = _contex.ModuleImages.Where(m => m.ModulId == model.ModuleId).Count();

            var userModuleImageCount = _contex.UserModuleImages.Where(m => m.ModulId == model.ModuleId && m.UserId == model.UserId && m.IsStatus == 1).Count();

            var userImageData = _contex.UserModuleImages.Where(m => m.ModulId == model.ModuleId && m.UserId == model.UserId).ToList();

            var userTalksList = _contex.UserTalks.Where(m => m.ModuleId == model.ModuleId && m.UserId == model.UserId).ToList();

            if (sampleModuleImageCount == userModuleImageCount)
            {
               

                for (int i = 0; i < userTalksList.Count(); i++)
                {
                    userTalksList[i].IsModuleClear = 2; //this for module image submittion clear
                }
            }
            else {
                

                for (int i = 0; i < userTalksList.Count(); i++)
                {
                    userTalksList[i].IsModuleClear = 1; //this for module image submittion pending
                }
            }           

            return await _contex.SaveChangesAsync() > 0 ? true : false;
        }


        public async Task<bool> TransferToFaculty(TransferToFacultyModel model)
        {
            var data = await _contex.UserModuleImages.FindAsync(model.UserModuleImageId);
            data.Faculty_Id = model.ToFacultyId;

            return await _contex.SaveChangesAsync() > 0 ? true : false;
        }
    }
}