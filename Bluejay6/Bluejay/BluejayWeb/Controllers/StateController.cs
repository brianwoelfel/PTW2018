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

        /// <summary>
        /// Get a list of all states
        /// </summary>
        /// <returns>JSON array of all states</returns>
        [HttpGet("/api/[controller]")]
        [Produces("application/json")]
        // Note the new C# shortcut syntax for defining simple methods
        public IActionResult List() => Json(_context.State.ToList());

        /// <summary>
        /// Get info about a state by state code
        /// </summary>
        /// <param name="id">State code to look up</param>
        /// <returns>JSON summary of a state</returns>
        [HttpGet("/api/[controller]/{id}")]
        [Produces("application/json")]
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
