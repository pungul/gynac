using Sculptor.Gynac.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Sculptor.Gynac.Repository.Module
{
    public interface IModuleMasterRepository
    {
        Task<IQueryable<ModuleMaster>> GetModuleMaster();
        Task<IQueryable<ModuleImage>> GetModuleSmapleImages(int moduleId);

        Task<bool> UploadSampleImage(ModuleSampleImageList model);

        Task<bool> DeleteSampleImage(Int32 sampleModuleId);


    }
}