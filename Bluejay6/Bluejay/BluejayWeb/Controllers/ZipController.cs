using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BluejayWeb.AgGridFilterSort;
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

        /// <summary>
        /// Get a list of zip code records
        /// </summary>
        /// <returns>JSON list of zip code objects</returns>
        [HttpGet("/api/[controller]")]
        [Produces("application/json")]
        // Note the new C# shortcut syntax for defining simple methods
        public IActionResult List() => Json(_context.Zip.ToList());

        /// <summary>
        /// Get a zipcode record by database table 
        /// </summary>
        /// <param name="id">Primary key of zip code record (not actually the zipcode)</param>
        /// <returns>JSON list of zip code objects</returns>
        [HttpGet("/api/[controller]/{id}")]
        [Produces("application/json")]
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

        /// <summary>
        /// Pass in filter/sort data from ag-grid to get a filtered, sorted, paginated
        /// list of zipcode objects.  For example, you can pass in this javasscript JSON:
        /// 
        /// {
        ///    "filterModel":{
        /// 		"state":{
        /// 			"type":"contains",
        /// 			"filter":"pa",
        /// 			"filterType":"text"
        ///          },
        /// 		"zipcode":{
        /// 			"type":"startsWith",
        /// 			"filter":"19",
        /// 			"filterType":"text"
        ///         },
        /// 		"city":{
        /// 			"type":"contains",
        /// 			"filter":"w",
        /// 			"filterType":"text"
        ///         }
        ///     },
        /// 	"sortModel":[
        /// 		{
        /// 			"colId":"city",
        /// 			"sort":"desc"
        ///         }
        /// 	],
        /// 	"startRow":10,
        /// 	"endRow":20
        /// }
        /// </summary>
        /// <param name="filterSortModel"></param>
        /// <returns></returns>

        [HttpPost("/api/[controller]/filterSort")]
        public IActionResult FilterSort([FromBody] FilterSortModel filterSortModel)
            => Json(AgFilterUtil.ApplyFilterSort<Zip>(_context.Zip, filterSortModel, "Zipcode", "ASC"));
    }
}
