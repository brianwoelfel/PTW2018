using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BluejayModel.Model;

namespace BluejayWeb.Controllers
{
    // REST API for Zip entities
    public class ZipController : Controller
    {
        private readonly BluejayContext _context;

        // Use Dependency Injection to supply database context that already has a connection string
        // from appSettings
        public ZipController(BluejayContext context)
        {
            this._context = context;
        }

        // REST API to serve a list of zip records as JSON
        [HttpGet("/api/[controller]")]
        // Note the new C# shortcut syntax for defining simple methods
        public IActionResult List() => Json(_context.Zip.ToList());

        // REST API to retrieve one zip record as JSON by Id
        [HttpGet("/api/[controller]/{id}")]
        public IActionResult Get(int id)
        {
            Zip zip = _context.Zip.Find(id);
            if (zip != null)
            {
                // AspDotNetCore lets us wrap POCOs in "Json()" 
                // and Angular can convert it to matching POTOs
                return Json(zip);
            }
            else
            {
                return NotFound(id);
            }
        }

    }
}
