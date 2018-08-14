using Sculptor.Gynac.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Sculptor.Gynac.Repository.Notifications
{
    public class NotificationRepository : BaseRepository, INotificationRepository
    {
        public async Task<IEnumerable<UserNotificationModel>> GetAllNotification()
        {
            return await Task.Run(() =>
            {
                var notificationList = new List<UserNotificationModel>();
                var data = _contex.Notifications;
                if (data != null)
                {
                    foreach (var item in data)
                    {
                        var model = new UserNotificationModel();
                        model.NotificationId = item.Id;
                        model.UserId = item.UserId;
                        model.Name = item.User.First_Name;
                        model.Comment = item.Comment;
                        model.IsRead = item.IsRead;
                        notificationList.Add(model);
                    }
                }

                return notificationList;

            });
        }

        public async Task<bool> AddNotification(NotificationModel model)
        {
            for (int i = 0; i < model.UserId.Count(); i++)
            {
                var dataModel = new Notification();
                dataModel.UserId = model.UserId[i];
                dataModel.Comment = model.Comment;
                dataModel.IsRead = 0;
                _contex.Notifications.Add(dataModel);    
            }
            return (await _contex.SaveChangesAsync() > 0) ? true : false;
        }

        //public async Task<bool> UpdateNotification(NotificationModel model)
        //{
        //    var dataModel = await _contex.Notifications.FindAsync(model.NotificationId);
        //    dataModel.UserId = model.UserId[0];
        //    dataModel.Comment = model.Comment;
        //    dataModel.IsRead = 0;
        //    return (await _contex.SaveChangesAsync() > 0) ? true : false;
        //}

        public async Task<bool> DeleteNotification(int notificationId)
        {
            var dataModel = await _contex.Notifications.FindAsync(notificationId);
            _contex.Notifications.Remove(dataModel);
            return (await _contex.SaveChangesAsync() > 0) ? true : false;
        }


        //public async Task<NotificationModel> GetNotification(int notificationId)
        //{
        //    var dataModel = await _contex.Notifications.FindAsync(notificationId);
        //    var model = new NotificationModel();
        //    model.NotificationId = dataModel.Id;
        //    model.UserId[0] = dataModel.UserId.Value;
        //    model.Comment = dataModel.Comment;
        //    model.IsRead = dataModel.IsRead;
        //    return model;
        //}
    }
}