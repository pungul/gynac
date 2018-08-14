using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using Sculptor.Gynac.Models.Enum;
using Sculptor.Gynac.Models;
using System.Net.Mail;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Sculptor.Gynac.Repository.Common
{
    public class CommonRepository : BaseRepository, ICommonRepository
    {
        public async Task<IQueryable<SessionMaster>> GetAllSession()
        {
            return await Task.Run(() =>
            {
                return _contex.SessionMasters;
            });
        }

        public async Task<IQueryable<ModuleMaster>> GetAllModule(int sessionId)
        {
            return await Task.Run(() =>
            {
                return _contex.ModuleMasters.Where(m => m.SessionId == sessionId);
            });
        }


        public async Task<IQueryable<TalkMaster>> GetAllTalks(int sessionId, int moduleId)
        {
            return await Task.Run(() =>
            {
                return _contex.TalkMasters.Where(m => m.SessionId == sessionId && m.ModulId == moduleId);
            });
        }


        public async Task<ModuleMaster> GetModuleById(int moduleId)
        {
            return await _contex.ModuleMasters.FindAsync(moduleId);
        }

        public async Task<IQueryable<ModuleImage>> GetModuleImageByModuleId(int moduleId)
        {
            return await Task.Run(() =>
            {
                return _contex.ModuleImages.Where(m => m.ModulId == moduleId);
            });
        }

        //public async Task<IQueryable<UserModuleImage>> GetUserModuleImageByModuleId(int moduleId, int userId, int facultyId)
        //{
        //    return await Task.Run(() =>
        //    {
        //        return _contex.UserModuleImages.Where(m => m.UserId == userId && m.ModulId == moduleId && m.Faculty_Id == facultyId);
        //    });
        //}



        public void SendMail(string toAddress, EmailType emailType, string guid, string bodyData = "", string subjectData = "")
        {

            MailMessage message = new MailMessage();
            SmtpClient smtpClient = new SmtpClient();

            string smtpHost = ConfigurationManager.AppSettings["SmtpHost"].ToString();
            string smtpUser = ConfigurationManager.AppSettings["SmtpUser"].ToString();
            string smtpPassword = ConfigurationManager.AppSettings["SmtpPassword"].ToString();

            string subject = string.Empty;
            string body = string.Empty;
            string mailUrl = string.Empty;

            try
            {
                if (emailType.Equals(EmailType.TalkAccess) | emailType.Equals(EmailType.TalkRevoked))
                {
                    message.From = new MailAddress(ConfigurationManager.AppSettings["SmtpUser"].ToString());
                    message.To.Add(toAddress);
                    string copy = ConfigurationManager.AppSettings["supportEmail"].ToString();
                    message.CC.Add(copy);
                }
                if (emailType.Equals(EmailType.AcceptImage) | emailType.Equals(EmailType.RejectImage))
                {
                    message.From = new MailAddress(ConfigurationManager.AppSettings["SmtpUser"].ToString());
                    message.To.Add(toAddress);
                    string copy = ConfigurationManager.AppSettings["supportEmail"].ToString();
                    message.CC.Add(copy);
                }                                

                message.IsBodyHtml = true;
                message.Headers.Add("Content-Type", "content=text/html; charset=\"UTF-8\"");
                switch (emailType)
                {

                    case EmailType.TalkAccess:
                        subject = "Talk Access - Grant";
                        mailUrl = "Talk Access";
                        body = bodyData;
                        break;
                    case EmailType.TalkRevoked:
                        subject = "Talk Access - Revoke";
                        mailUrl = "Talk Access";
                        body = bodyData;
                        break;
                    case EmailType.AcceptImage:
                        subject = "Image submission - accepted";
                        mailUrl = "image accepted";
                        body = bodyData;
                        break;
                    case EmailType.RejectImage:
                        subject = "Image submission - rejected";
                        mailUrl = "image rejected";
                        body = bodyData;
                        break;
                    default:
                        break;
                }

                message.Subject = subject;
                message.Body = body;

                smtpClient.Host = smtpHost;   // We use gmail as our smtp client
                smtpClient.Port = 2525;
                smtpClient.Credentials = new System.Net.NetworkCredential(smtpUser, smtpPassword);

                if (!string.IsNullOrWhiteSpace(subject) && !string.IsNullOrWhiteSpace(body) && !string.IsNullOrWhiteSpace(mailUrl))
                {
                    smtpClient.Send(message);
                }
            }
            catch
            {
                throw;
            }

        }

        public enum EmailType
        {
            TalkAccess = 0,
            TalkRevoked = 1,
            AcceptImage = 2,
            RejectImage = 3
        }


        public async Task<UserModuleImage> GetUserModuelImageById(int userModuelImageId)
        {
            return await _contex.UserModuleImages.FindAsync(userModuelImageId);
        }

       

        //Reports
        public DataTable GetVideoReport(string bachId)
        {
            DataTable dt = new DataTable();
            try
            {
                string CONNECTION_STRING = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
                using (SqlConnection con = new SqlConnection(CONNECTION_STRING))
                {
                    dt = new DataTable();
                    con.Open();
                    SqlCommand command = new SqlCommand("Get_VideoReport", con);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@bachId", bachId);

                    SqlDataAdapter da = new SqlDataAdapter();
                    da.SelectCommand = command;
                    //SqlDataAdapter dataAdapter = new SqlDataAdapter(command);
                    da.Fill(dt);
                }                
            }
            catch
            {
                throw;
            }

            return dt;
        }
        //Bookmark Report
        public DataTable GetBookMarkReport(string bachId)
        {
            DataTable dt = new DataTable();
            try
            {
                string CONNECTION_STRING = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
                using (SqlConnection con = new SqlConnection(CONNECTION_STRING))
                {
                    dt = new DataTable();
                    con.Open();
                    SqlCommand command = new SqlCommand("Get_BookmarkReport", con);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@bachId", bachId);

                    SqlDataAdapter da = new SqlDataAdapter();
                    da.SelectCommand = command;
                    //SqlDataAdapter dataAdapter = new SqlDataAdapter(command);
                    da.Fill(dt);
                    //SqlDataAdapter dataAdapter = new SqlDataAdapter(command);
                    //dataAdapter.Fill(dt);
                }
            }
            catch
            {
                throw;
            }

            return dt;
        }

        //Rating Report
        public DataTable GetRatingReport(string bachId)
        {
            DataTable dt = new DataTable();
            try
            {
                string CONNECTION_STRING = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
                using (SqlConnection con = new SqlConnection(CONNECTION_STRING))
                {
                    dt = new DataTable();
                    con.Open();
                    SqlCommand command = new SqlCommand("Get_RatingReport", con);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@bachId", bachId);

                    SqlDataAdapter da = new SqlDataAdapter();
                    da.SelectCommand = command;
                    //SqlDataAdapter dataAdapter = new SqlDataAdapter(command);
                    da.Fill(dt);
                    //SqlDataAdapter dataAdapter = new SqlDataAdapter(command);
                    //dataAdapter.Fill(dt);
                }
            }
            catch
            {
                throw;
            }

            return dt;
        }

        //Image Submission Report
        public DataTable GetImageReport(string bachId)
        {
            DataTable dt = new DataTable();
            try
            {
                string CONNECTION_STRING = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
                using (SqlConnection con = new SqlConnection(CONNECTION_STRING))
                {
                    dt = new DataTable();
                    con.Open();
                    SqlCommand command = new SqlCommand("Get_ImageSubmissionReport", con);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@bachId", bachId);

                    SqlDataAdapter da = new SqlDataAdapter();
                    da.SelectCommand = command;
                    //SqlDataAdapter dataAdapter = new SqlDataAdapter(command);
                    da.Fill(dt);
                    //SqlDataAdapter dataAdapter = new SqlDataAdapter(command);
                    //dataAdapter.Fill(dt);
                }
            }
            catch
            {
                throw;
            }

            return dt;
        }
    }
}