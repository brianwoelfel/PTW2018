using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BluejayWeb.Controllers
{
    // REST API for State entities
    public class StateController : Controller
    {
        public StateController()
        {
        }

        // REST API to serve a list of state records as JSON
        [HttpGet("/api/[controller]")]
        // Note the new C# shortcut syntax for defining simple methods
        public IActionResult List()
        {
            var state1 = new { Code = "XX", Name = "XXXXX" };
            var state2 = new { Code = "YY", Name = "YYYYY" };
            var states = new[] { state1, state2 };
            return Json(states);
        }

        // REST API to retrieve one state record as JSON by Id
        [HttpGet("/api/[controller]/{id}")]
        public IActionResult Get(int id)
        {
            var state1 = new { Code = "XX", Name = "XXXXX" };
            return Json(state1);
        }

    }
}
