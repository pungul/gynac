using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class UserModuleImages
    {
        public int? UserId { get; set; }
        public int? ModuleId { get; set; }
        public string ModuleName { get; set; }
        public string Description { get; set; }
    }
}