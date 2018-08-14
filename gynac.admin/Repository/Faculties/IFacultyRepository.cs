using Sculptor.Gynac.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sculptor.Gynac.Repository.Faculties
{
    public interface IFacultyRepository
    {
        Task<IQueryable<Faculty>> GetAllFaculty();

        Task<IEnumerable<UsersForReviewModel>> GetUserImagesForReview(int facultyId);

        Task<UserImageForReviewModel> GetUserModuleImage(int userModuleImageId);


        Task<bool> ReviewImage(ReviewCommentModel model);

        Task<bool> TransferToFaculty(TransferToFacultyModel model);
    }
}
