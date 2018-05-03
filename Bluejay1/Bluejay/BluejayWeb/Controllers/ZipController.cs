using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BluejayWeb.Controllers
{
    // REST API for Zip entities
    public class ZipController : Controller
    {
        public ZipController()
        {
        }

        // REST API to serve a list of zip records as JSON
        [HttpGet("/api/[controller]")]
        // Note the new C# shortcut syntax for defining simple methods
        public IActionResult List()
        {
            var zip1 = new { Id = 1, Zipcode = "11111", City = "test1", State = "XX" };
            var zip2 = new { Id = 2, Zipcode = "22222", City = "test2", State = "YY" };
            var zips = new[] { zip1, zip2 };
            return Json(zips);
        }

        // REST API to retrieve one zip record as JSON by Id
        [HttpGet("/api/[controller]/{id}")]
        public IActionResult Get(int id)
        {
            var zip1 = new { Id = 1, Zipcode = "11111", City = "test1", State = "XX" };
            return Json(zip1);
        }

    }
}
