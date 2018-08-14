using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class UserTalkResult
    {       
        public IEnumerable<Sculptor.Gynac.Repository.UserTalk> UserTalkList { get; set; }

        public IEnumerable<TalkAccessList> addTalkList { get; set; }

        public IEnumerable<TalkAccessList> removeTalkList { get; set; }
    }
}