using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BluejayModel.Model;

namespace BluejayWeb.Controllers
{
    // REST API for State entities
    public class StateController : Controller
    {
        private readonly BluejayContext _context;

        // Use Dependency Injection to supply database context that already has a connection string
        // from appSettings
        public StateController(BluejayContext context)
        {
            this._context = context;
        }

        // REST API to serve a list of state records as JSON
        [HttpGet("/api/[controller]")]
        // Note the new C# shortcut syntax for defining simple methods
        public IActionResult List() => Json(_context.State.ToList());

        // REST API to retrieve one state record as JSON by Id
        [HttpGet("/api/[controller]/{id}")]
        public IActionResult Get(string id)
        {
            State state = _context.State.Find(id);
            if (state != null)
            {
                // AspDotNetCore lets us wrap POCOs in "Json()" 
                // and Angular can convert it to matching POTOs
                return Json(state);
            }
            else
            {
                return NotFound(id);
            }
        }

    }
}
