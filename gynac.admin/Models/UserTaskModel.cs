using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class UserTaskModel
    {
        public UserTaskModel()
        {
            UserSessionMaster = new List<SessionMasterModel>();
            
            
        }
        public List<SessionMasterModel> UserSessionMaster { get; set; }
        
           

    }    
}