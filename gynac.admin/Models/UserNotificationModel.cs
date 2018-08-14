using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class UserNotificationModel
    {
        public int? UserId { get; set; }
        public string Name { get; set; }
        public int NotificationId { get; set; }
        public string Comment { get; set; }
        public int? IsRead { get; set; }
        public int? FacultyId { get; set; }
    }

    public class NotificationModel
    {
        public int NotificationId{ get; set; }
        public int[] UserId { get; set; }
        public string Comment { get; set; }
        public int? IsRead { get; set; }
    }

}