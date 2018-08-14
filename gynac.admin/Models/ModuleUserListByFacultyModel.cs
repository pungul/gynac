using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class ModuleUserListByFacultyModel
    {
        public int? ModuleId { get; set; }
        public string ModuleName { get; set; }
        public int? UserId { get; set; }
        public int? FacultyId { get; set; }
        
        public string First_Name { get; set; }
        public string Middle_Name { get; set; }
        public string Last_Name { get; set; }
        public string Email { get; set; }
    }
}