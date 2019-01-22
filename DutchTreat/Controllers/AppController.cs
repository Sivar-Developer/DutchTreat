using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace DutchTreat.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            //throw new InvalidOperationException("Bad things happen");
            return View();
        }

        [HttpGet("contact")]
        public IActionResult contact()
        {
            return View();
        }

        [HttpPost("contact")]
        public IActionResult contact(ContactViewModel model)
        {
            return View();
        }

        public IActionResult about()
        {
            ViewBag.Title = "About Us";

            return View();
        }
    }
}