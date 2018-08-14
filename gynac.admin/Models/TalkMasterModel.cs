using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class TalkMasterModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string VideoLink { get; set; }
        public int? FacultyId { get; set; }
        public int? ModulId { get; set; }
        public int? SessionId { get; set; }
        public DateTime EndDate { get; set; }  
        public bool IsTalksChecked { get; set; }              
    }
}