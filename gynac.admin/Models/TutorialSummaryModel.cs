﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sculptor.Gynac.Models
{
    public class TutorialSummaryModel
    {
        public string SessionName { get; set; }
        public int? TotalTalks { get; set; }
        public int? TotalPendingTalks { get; set; }
        public int? TotalCompletedTalks { get; set; }

        public int? TotalPendingModules { get; set; }
        public int? TotalCompletedModules { get; set; }
        public int? TotalModules { get; set; }
    }
}