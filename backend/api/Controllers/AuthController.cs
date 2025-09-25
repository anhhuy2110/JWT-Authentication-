using api.Entities;
using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public User user = new();

        [HttpPost("register")]
        public ActionResult<User> Register(UserDto request)
        {
            var hasPssword = new PasswordHasher<User>()
                .HashPassword(user, user.Password);
            user.Username = request.Username;
            user.Password = hasPssword;
            return Ok(user);
        }
    }
}
