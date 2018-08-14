using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class SessionMasterModel
    {
        public SessionMasterModel()
        {
            UserModuleMaster = new List<ModuleMasterModel>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsSessionChecked { get; set; }

        public List<ModuleMasterModel> UserModuleMaster { get; set; }
    }
}