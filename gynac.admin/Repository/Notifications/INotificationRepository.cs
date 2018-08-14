using Sculptor.Gynac.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sculptor.Gynac.Repository.Notifications
{
    public interface INotificationRepository
    {
        Task<IEnumerable<UserNotificationModel>> GetAllNotification();

        Task<bool> AddNotification(NotificationModel model);
       // Task<bool> UpdateNotification(NotificationModel model);
        Task<bool> DeleteNotification(int notificationId);

       // Task<NotificationModel> GetNotification(int notificationId);
    }
}
