using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class TransferToFacultyModel
    {
        public int UserModuleImageId { get; set; }        
        public int? FromFacultyId { get; set; }
        public int? ToFacultyId { get; set; }
    }
}