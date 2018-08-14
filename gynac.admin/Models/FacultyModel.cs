using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class FacultyModel
    {
        public int Faculty_Id { get; set; }
        public string Title { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Profile_Summary { get; set; }
        public DateTime Insert_Date { get; set; }
        public DateTime Update_Date { get; set; }
    }
}