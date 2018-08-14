using Sculptor.Gynac.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Sculptor.Gynac.Repository.UserTalks
{
    public class UserTalksRepository : BaseRepository, IUserTalksRepository
    {
        public async Task<UserTalkResult> SetUserTalks(Int32 userId, List<int> talksId, string endDate, bool isUnCheckAll)
        { 
            return await Task.Run(() =>
            {
                var userTalksModel= new UserTalkResult();
                var addTalkList = new List<TalkAccessList>();
                var removeTalkList = new List<TalkAccessList>();

                if (talksId == null && isUnCheckAll == true) {

                    var userTalksdata = _contex.UserTalks.Where(t => t.UserId == userId);


                    foreach (var item in userTalksdata)
                    {
                        var removeTalk = new TalkAccessList();
                        removeTalk.TalkId = item.TalkId.Value;
                        removeTalk.TalkName = item.TalkMaster.Name;

                        removeTalkList.Add(removeTalk);

                        _contex.UserTalks.Remove(item);
                       
                    }
                    _contex.SaveChanges();
                }

                if (talksId != null)
                {
                    var userTalksdata = _contex.UserTalks.Where(t => t.UserId == userId);
                    

                    foreach (var item in userTalksdata)
                    {
                        if (!talksId.Contains(item.TalkId.Value))
                        {
                            var removeTalk = new TalkAccessList();
                            removeTalk.TalkId = item.TalkId.Value;
                            removeTalk.TalkName = item.TalkMaster.Name;

                            removeTalkList.Add(removeTalk);

                            _contex.UserTalks.Remove(item);
                        }
                    }

                    foreach (var item in talksId)
                    {
                        if (!userTalksdata.Where(t => t.TalkId.Value == item).Any())
                        {
                            var talk = _contex.TalkMasters.Where(t => t.Id == item).FirstOrDefault();

                            var dataModel = new UserTalk();
                            dataModel.Enddate = DateTime.ParseExact(endDate, "MM-dd-yyyy", System.Globalization.CultureInfo.InvariantCulture);
                            dataModel.TalkId = item;
                            dataModel.UserId = userId;
                            dataModel.IsActive = 0;
                            dataModel.IsVideoStatus = 0;
                            dataModel.IsExamlear = 0;
                            dataModel.IsModuleClear = 0;
                            dataModel.CreateDate = DateTime.UtcNow;
                            dataModel.UpdateDate = DateTime.UtcNow;
                            dataModel.ModuleId = talk.ModulId;

                            //Add new talks name
                            var addTalk = new TalkAccessList();
                            addTalk.TalkId = dataModel.TalkId.Value;
                            addTalk.TalkName = talk.Name;

                            addTalkList.Add(addTalk);

                            _contex.UserTalks.Add(dataModel);
                        }
                    }
                    _contex.SaveChanges();
                }

                userTalksModel.UserTalkList = _contex.UserTalks.Where(t => t.UserId == userId).ToList();
                userTalksModel.addTalkList = addTalkList;
                userTalksModel.removeTalkList = removeTalkList;

                return userTalksModel;
            });

        }


        public async Task<bool> IsUserTalksExits(int userId)
        {
            return await Task.Run(() =>
            {
                var data = _contex.UserTalks.Where(t => t.UserId == userId);
                return (data.ToList().Count > 0 ? true : false);
            });
        }


        public async Task<IQueryable<UserTalk>> GetUserTalks(int userId)
        {
            return await Task.Run(() =>
            {
                var data = _contex.UserTalks.Where(t => t.UserId == userId);
                return data;
            });
        }


        public async Task<bool> DeleteUserTalksExits(int userId)
        {
            return await Task.Run(() =>
            {
                var data = _contex.UserTalks.Where(t => t.UserId == userId);
                _contex.UserTalks.RemoveRange(data);

                return (_contex.SaveChanges() > 0 ? true : false);
            });
        }


        public IEnumerable<TutorialSummaryModel> TutorialSummary(int userId)
        {   
            var model = new List<TutorialSummaryModel>();

            string CONNECTION_STRING = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
            DataSet dsResult = new DataSet();

            using (SqlConnection con = new SqlConnection(CONNECTION_STRING))
            {
                con.Open();
                SqlCommand command = new SqlCommand("Get_Tutorial_Summary", con);
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.AddWithValue("@User_Id", userId);

                SqlDataAdapter da = new SqlDataAdapter();
                da.SelectCommand = command;

                da.Fill(dsResult);

                try
                {
                    DataSet ds = dsResult;
                    if (ds != null)
                    {
                        int moduleCountCompleted = 0;

                        foreach (DataRow row in ds.Tables[0].Rows)
                        {
                            var data = new TutorialSummaryModel();
                            data.SessionName = row["SessionName"].ToString();
                            data.TotalTalks = Convert.ToInt32(row["TotalTalks"].ToString());

                            if (row["TotalCompletedTalks"].ToString() != "")
                            {

                                data.TotalCompletedTalks = (row["TotalCompletedTalks"].ToString() != "") ? Convert.ToInt32(row["TotalCompletedTalks"].ToString()) : 0;
                                data.TotalPendingTalks = (row["TotalCompletedTalks"].ToString() != "") ? data.TotalTalks - data.TotalCompletedTalks : data.TotalTalks;
                                data.TotalCompletedModules = 0;

                            }
                            else
                            {
                                data.TotalCompletedTalks = 0;
                                data.TotalPendingTalks = 0;
                                data.TotalTalks = 0;

                                data.TotalCompletedModules = 0;
                                data.TotalPendingModules = 0;
                                data.TotalModules = 0;
                            }
                            model.Add(data);
                        }

                        foreach (var item in model)
                        {
                            foreach (DataRow row in ds.Tables[1].Rows)
                            {
                                if (item.SessionName == row["SessionName"].ToString())
                                {
                                    item.TotalModules = Convert.ToInt32(row["TotalModules"].ToString());
                                }
                            }
                        }


                        foreach (var item in model)
                        {
                            moduleCountCompleted = 0;
                            foreach (DataRow row in ds.Tables[2].Rows)
                            {
                                if (item.SessionName == row["SessionName"].ToString())
                                {

                                    foreach (DataRow row1 in ds.Tables[3].Rows)
                                    {
                                        if (row["ModuleId"].ToString() == row1["modulid"].ToString())
                                        {
                                            if (row["TotalModuleImage"].ToString() == row1["userAddedImage"].ToString())
                                            {
                                                moduleCountCompleted++;
                                                item.TotalPendingModules = item.TotalModules - moduleCountCompleted;
                                                item.TotalCompletedModules = item.TotalCompletedModules + 1;
                                            }
                                            else
                                            {
                                                item.TotalCompletedModules = 0;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        foreach (var item in model)
                        {
                            if (item.TotalCompletedModules == 0)
                            {
                                item.TotalPendingModules = item.TotalModules;
                            }
                        }
                    }
                }
                catch
                {
                    throw;
                }                
            }            
            
            return model.ToList();                        
            
        }
    }
}