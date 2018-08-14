using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Repository
{
    public class BaseRepository
    {
        public GynacEntities _contex;
        public BaseRepository()
        {
            _contex = new GynacEntities();
        }
    }
}