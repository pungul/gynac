using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class UsersForReviewModel
    {
        public int UserModuleImagesId { get; set; }
        public int? UserId { get; set; }
        public string UserName { get; set; }

        public string Email { get; set; }

        public int? ModuleId { get; set; }

        public string ModuleName { get; set; }
    }
}