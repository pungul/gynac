using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class ReviewCommentModel
    {
        public int UserModuleImageId { get; set; }                
        public int FacultyId { get; set; }
        public int ModuleId { get; set; }
        public int UserId { get; set; }
        public string Comment { get; set; }
        public int IsStatus { get; set; }
    }
}