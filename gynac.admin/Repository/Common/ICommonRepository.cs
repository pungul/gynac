using Sculptor.Gynac.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sculptor.Gynac.Repository.Common
{
    public interface ICommonRepository
    {
        Task<IQueryable<SessionMaster>> GetAllSession();
        Task<IQueryable<ModuleMaster>> GetAllModule(int sessionId);

        Task<IQueryable<TalkMaster>> GetAllTalks(int sessionId, int moduleId);
        //Task<IQueryable<SessionMaster>> GetAllSession();

        Task<ModuleMaster> GetModuleById(int moduleId);
        Task<IQueryable<ModuleImage>>  GetModuleImageByModuleId(int moduleId);
        //Task<IQueryable<UserModuleImage>> GetUserModuleImageByModuleId(int moduleId, int userId, int facultyId);

        Task<UserModuleImage> GetUserModuelImageById(int userModuelImageId);
        void SendMail(string toAddress, Sculptor.Gynac.Repository.Common.CommonRepository.EmailType emailType, string guid, string bodyData = "", string subjectData = "");

        DataTable GetVideoReport(string bachId);
        DataTable GetBookMarkReport(string bachId);
        DataTable GetRatingReport(string bachId);
        DataTable GetImageReport(string bachId);
    }
}
