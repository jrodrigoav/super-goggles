using Microsoft.AspNetCore.Mvc;
using System;

namespace SuperGooglesAPI.Controllers
{
    [Route("api/time"),ApiController]
    public class TimeController : ControllerBase
    {
        [HttpGet]
        public string Get() => DateTime.Now.ToString("s");
    }
}
