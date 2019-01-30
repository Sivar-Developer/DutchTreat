using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DutchTreat.Data;
using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace DutchTreat.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailService;
        private readonly DutchContext _context;

        public AppController(IMailService mailService, DutchContext context)
        {
            _mailService = mailService;
            _context = context;
        }

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
            if (ModelState.IsValid)
            {
                // Send the email
                _mailService.SendMessage("shawn@wildermuth.com", model.Subject, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
            }
            else
            {
                // Show the errors
            }

            return View();
        }

        public IActionResult about()
        {
            ViewBag.Title = "About Us";

            return View();
        }

        public IActionResult Shop()
        {
            //var results = _context.Products
            //    .OrderBy(p => p.Category)
            //    .ToList();

            var results = from p in _context.Products
                          orderby p.Category
                          select p;

            return View(results.ToList());
        }
    }
}