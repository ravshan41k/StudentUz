using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentUz.Models.Services
{
   public interface IStudentRepository
    {
         Task<Students> GetStudent(int ID);
         Task<IEnumerable<Students>> GetAllStudents();
         Task  DeleteStudents(int ID);
         Task UpdateStudents(Students student);
         Task CreateStudents(Students student);
        
    }
}
