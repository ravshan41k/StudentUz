using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StudentUz.Models
{
    public class Students
    {
        [Key]
        public int ID { get; set; }
        [Column(TypeName ="nvarchar(50)")]
        public string FullName { get; set; }
        [Column(TypeName = "nvarchar(25)")]
        public string Country { get; set; }
        [Column(TypeName = "nvarchar(25)")]
        public string Teacher { get; set; }
        public string Date { get; set; }
        public int Contract { get; set; }

        [Column(TypeName = "nvarchar(15)")]
        public string Status { get; set; }
    }
}
