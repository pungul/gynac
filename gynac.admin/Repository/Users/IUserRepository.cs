using Sculptor.Gynac.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Sculptor.Gynac.Repository.Users
{
    public interface IUserRepository
    {
        Task<IQueryable<User>> GetAllUsers();

        Task<User> GetUserById(int userId);

        Task<User> UpdateUser(User dataModel);

        //Task<IEnumerable<ModuleUserListByFacultyModel>> GetAllUsersByFaculty(Int32 facultyId);
    
    }
}