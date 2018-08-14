using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class UserImageForReviewModel
    {
        public int UserModuleImageId { get; set; }
        public int? FacultyId { get; set; }
        public int? ModuleId { get; set; }
        public int? UserId { get; set; }
        public string ModuleName { get; set; }
        public string Description { get; set; }
        public string SampleImagePath { get; set; }
        public string UserImagePath { get; set; }        
    }
}