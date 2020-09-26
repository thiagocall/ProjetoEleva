using ElevaApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ElevaApi.Data
{
         public partial class EscolaContext : DbContext
    {
      
        public EscolaContext(DbContextOptions<EscolaContext> options)
            : base(options)
        {
        }

        public DbSet<Escola> Escolas { get; set; }
        public DbSet<Turma> Turmas { get; set; }
        
    }
    
}