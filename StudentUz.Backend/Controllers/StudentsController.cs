using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentUz.Models;
using StudentUz.Models.DbContexts;
using StudentUz.Models.Services;

namespace StudentUz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly StudentDbContext _context;
        private readonly IStudentRepository db;

        public StudentsController(IStudentRepository _db)
        { 
           
            this.db = _db;
        }

        // GET: api/Students
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Students>>> GetStudents()
        {
            IEnumerable<Students> students= await db.GetAllStudents();
            return students.ToList();

        }

        // GET: api/Students/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Students>> GetStudents(int id)
        {
            var student = await db.GetStudent(id);

            if (student == null)
            {
                return NotFound();
            }

            return student;
        }

        // PUT: api/Students/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudents(int id, Students students)
        {
            if (id != students.ID)
            {
                return BadRequest();
            }

            await db.UpdateStudents(students);
            return NoContent();
        }

        // POST: api/Students
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Students>> PostStudents(Students students)
        {
            await db.CreateStudents(students);

            return CreatedAtAction("GetStudents", new { id = students.ID }, students);
        }

        // DELETE: api/Students/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudents(int id)
        {
            var students = await db.GetStudent(id);
            if (students == null)
            {
                return NotFound();
            }
             await db.DeleteStudents(id);

            return NoContent();
        }

      
    }
}
