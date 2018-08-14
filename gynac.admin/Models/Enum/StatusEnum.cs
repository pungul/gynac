using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models.Enum
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum StatusEnum
    {
        Pending =0,
        Accept =1,
        Rejected =2
    }
}