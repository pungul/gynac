using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using Sculptor.Gynac.Models;

namespace Sculptor.Gynac.Repository.Users
{
    public class UserRepository : BaseRepository, IUserRepository
    {

        public async Task<IQueryable<User>> GetAllUsers()
        {
            return await Task.Run(() =>
            {
               return _contex.Users;
            });
        }

        public async Task<User> GetUserById(int userId)
        {
            return await _contex.Users.FindAsync(userId);
        }

        public async Task<User> UpdateUser(User dataModel)
        {
            var data = await _contex.Users.FindAsync(dataModel.User_Id);

            data.Title = dataModel.Title;
            data.First_Name = dataModel.First_Name;
            data.Middle_Name = dataModel.Middle_Name;
            data.Last_Name = dataModel.Last_Name;
            data.Email = dataModel.Email;
            data.Professional_Specialty = dataModel.Professional_Specialty;
            data.Educational_Qualification = dataModel.Educational_Qualification;
            data.Street_Address = dataModel.Street_Address;
            data.City_Town = dataModel.City_Town;
            data.Country = dataModel.Country;
            data.Institution_Work_Place = dataModel.Institution_Work_Place;
            data.Where_Hear = dataModel.Where_Hear;
            data.Comment = dataModel.Comment;
            data.CreateDate = DateTime.UtcNow;
            data.UpdateDate = DateTime.UtcNow;

            await _contex.SaveChangesAsync();
            return await _contex.Users.FindAsync(dataModel.User_Id);
        }
        
        //public async Task<IEnumerable<ModuleUserListByFacultyModel>> GetAllUsersByFaculty(int facultyId)
        //{
        //    return await Task.Run(() =>
        //    {
        //        var moduleList = _contex.ModuleMasters.Where(f => f.FacultyId == facultyId);

        //        var userList = (from m in moduleList.ToList()
        //                        from u in _contex.UserModuleImages
        //                        where m.Id == u.ModulId
        //                        select new { u, m.FacultyId }).ToList();

        //        var model = new List<ModuleUserListByFacultyModel>();
        //        foreach (var item in userList)
        //        {
        //            var data = new ModuleUserListByFacultyModel();
        //            data.FacultyId = item.FacultyId;
        //            data.ModuleId = item.u.ModulId;
        //            data.ModuleName = item.u.ModuleMaster.Name;
        //            data.UserId = item.u.UserId;

        //            data.First_Name = item.u.User.First_Name;
        //            data.Middle_Name = item.u.User.Middle_Name;
        //            data.Last_Name = item.u.User.Last_Name;
        //            data.Email = item.u.User.Email;

        //            model.Add(data);

        //        }

        //        return model;
        //    });
        //}
    }
}