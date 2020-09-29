
using System;
using ElevaApi.Models.Auth;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ElevaApi.Data
{
public partial class AppIdentityContext: IdentityDbContext<User, Role, Guid>
    {
        
        public AppIdentityContext(DbContextOptions<AppIdentityContext> options)
            : base(options)
        {
        }

          protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Core Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Core Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
         
    }
}