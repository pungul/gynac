using Sculptor.Gynac.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Sculptor.Gynac.Repository.UserTalks
{
    public interface IUserTalksRepository
    {
        Task<UserTalkResult> SetUserTalks(Int32 userId, List<int> talksId, string endDate, bool isUnCheckAll);
        Task<bool> IsUserTalksExits(int userId);
        Task<IQueryable<UserTalk>> GetUserTalks(int userId);
        Task<bool> DeleteUserTalksExits(int userId);
        IEnumerable<TutorialSummaryModel> TutorialSummary(int userId);        
    }
}