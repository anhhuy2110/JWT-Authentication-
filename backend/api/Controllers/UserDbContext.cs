using api.Entities;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    public class UserDbContext(DbContextOptions<UserDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }      
    }
}
