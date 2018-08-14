using Sculptor.Gynac.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Sculptor.Gynac.Repository.Module
{
    public class ModuleMasterRepository : BaseRepository, IModuleMasterRepository
    {
        public async Task<IQueryable<ModuleMaster>> GetModuleMaster()
        {
            return await Task.Run(() =>
            {
                return _contex.ModuleMasters;
            });
        }


        public async Task<IQueryable<ModuleImage>> GetModuleSmapleImages(int moduleId)
        {
            return await Task.Run(() =>
            {
                return _contex.ModuleImages.Where(m => m.ModulId == moduleId);
            });
        }


        public async Task<bool> UploadSampleImage(ModuleSampleImageList model)
        {

            //_contex.ModuleImages
            var dataModel = new ModuleImage();
            dataModel.ModulId = model.ModuleId;
            dataModel.SampleImage = model.SampleImage;
            dataModel.Description = model.ImageDesc;
            dataModel.CreateDate = DateTime.UtcNow;
            dataModel.UpdateDate = DateTime.UtcNow;

            _contex.ModuleImages.Add(dataModel);

            return await _contex.SaveChangesAsync() > 0 ? true : false;
            //return await Task.Run(() =>
            //{

            //});
        }


        public async Task<bool> DeleteSampleImage(int sampleModuleId)
        {
            var data = await _contex.ModuleImages.FindAsync(sampleModuleId);
            var data1 = _contex.UserModuleImages.Where(u=> u.ModuleImageId == sampleModuleId).ToList();
            //foreach (var item in data1)
            //{
                _contex.UserModuleImages.RemoveRange(data1);    
            //}
            _contex.ModuleImages.Remove(data);
            return await _contex.SaveChangesAsync() > 0 ? true : false;
        }
    }
}