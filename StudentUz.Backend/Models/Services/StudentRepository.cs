using Microsoft.EntityFrameworkCore;
using StudentUz.Models.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentUz.Models.Services
{
    public class StudentRepository : IStudentRepository
    {
        private StudentDbContext _db;

        public StudentRepository(StudentDbContext dbStudent)
        {
            this._db = dbStudent;
        }

        public async Task CreateStudents(Students student)
        {
           await _db.Students.AddAsync(student);
            _db.SaveChanges();
        }

        public async Task DeleteStudents(int ID)
        {
            Students student = await _db.Students.FindAsync(ID);
            _db.Students.Remove(student);
            _db.SaveChanges();
        }

        public async Task<IEnumerable<Students>> GetAllStudents()
            => await _db.Students.ToListAsync();

        public async Task<Students> GetStudent(int ID)
            => await _db.Students.FindAsync(ID);


        public async Task UpdateStudents( Students student)
        {
            _db.Entry(student).State = EntityState.Modified;
            
                await _db.SaveChangesAsync();
            
           
        }

       
    }
}
