using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Sculptor.Gynac.Repository.Common;
using Sculptor.Gynac.Repository.Users;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;



namespace Sculptor.Gynac.Controllers
{
    [Authorize]
    public class ReportController : BaseController
    {

        private readonly ICommonRepository _commonRepo;
        private readonly IUserRepository _userRepo;

        public ReportController()
        {
            _commonRepo = new CommonRepository();
            _userRepo = new UserRepository();
        }

        [HttpGet]
        // GET: Report
        public ActionResult Index()
        {
            try
            {
                
                var data = checkBalance();
                var fdate = JObject.Parse(data)["balance"]["sms"];                
                var data1 =  Task.Run(() =>
                {
                    return _userRepo.GetAllUsers();
                });
                @ViewBag.smsBalanceCount = fdate;
                var objBatchList = data1.Result.ToList().Where(x => x.Comment != null).Select(x => new SelectListItem { Text = x.Comment, Value = x.Comment }).Distinct(new SelectListItemComparer());
                ViewBag.loadBatch = objBatchList.ToList();
            }
            catch (Exception)
            {
            }
            return View();
        }

        [HttpGet]
        //GetSampleImages
        public string GetReports(Int32 reportNumber, string bachId)
        {
            DataTable dt = new DataTable();
            if (reportNumber == 1)
            {
                dt = _commonRepo.GetImageReport(bachId);
            }
            else if (reportNumber == 2)
            {
                dt = _commonRepo.GetVideoReport(bachId);
            }
            else if (reportNumber == 3)
            {
                dt = _commonRepo.GetBookMarkReport(bachId);
            }
            else if (reportNumber == 4)
            {
                dt = _commonRepo.GetRatingReport(bachId);
            }

            JavaScriptSerializer jsSerializer = new JavaScriptSerializer();
            List<Dictionary<string, object>> parentRow = new List<Dictionary<string, object>>();
            Dictionary<string, object> childRow;
            foreach (DataRow row in dt.Rows)
            {
                childRow = new Dictionary<string, object>();
                foreach (DataColumn col in dt.Columns)
                {
                    childRow.Add(col.ColumnName, row[col]);
                }
                parentRow.Add(childRow);
            }
            return jsSerializer.Serialize(parentRow);

            //return Json(dt, JsonRequestBehavior.AllowGet);
        }

        public enum ReportType
        {
            VideoReport = 2,
            //TalkRevoked = 2,
            //AcceptImage = 3,
            //RejectImage = 4
        }

        public string checkBalance()
        {
            String result;
            string apiKey = System.Configuration.ConfigurationManager.AppSettings["SmsApiKey"];
            //string apiKey = "your apiKey";

            String url = "https://api.textlocal.in/balance/?apikey=" + apiKey;
            //refer to parameters to complete correct url string

            StreamWriter myWriter = null;
            HttpWebRequest objRequest = (HttpWebRequest)WebRequest.Create(url);

            objRequest.Method = "POST";
            objRequest.ContentLength = Encoding.UTF8.GetByteCount(url);
            objRequest.ContentType = "application/x-www-form-urlencoded";
            try
            {
                myWriter = new StreamWriter(objRequest.GetRequestStream());
                myWriter.Write(url);
            }
            catch (Exception e)
            {
                return e.Message;
            }
            finally
            {
                myWriter.Close();
            }

            HttpWebResponse objResponse = (HttpWebResponse)objRequest.GetResponse();
            using (StreamReader sr = new StreamReader(objResponse.GetResponseStream()))
            {
                result = sr.ReadToEnd();
                // Close and clean up the StreamReader
                sr.Close();
            }
            
            //Console.WriteLine(result);
            //Console.ReadLine();
            return result;
        }

        public class SelectListItemComparer : IEqualityComparer<SelectListItem>
        {
            public bool Equals(SelectListItem x, SelectListItem y)
            {
                return x.Text == y.Text && x.Value == y.Value;
            }

            public int GetHashCode(SelectListItem item)
            {
                int hashText = item.Text == null ? 0 : item.Text.GetHashCode();
                int hashValue = item.Value == null ? 0 : item.Value.GetHashCode();
                return hashText ^ hashValue;
            }
        }

    }
}