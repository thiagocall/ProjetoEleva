using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace ElevaApi.Models

{
    public class Turma
    {
        public int Id { get; set; }
        public string Disciplina { get; set; }
        public string HorarioInicial { get; set; }
        public string HorarioFinal { get; set; }
        public string DiaDaSemana { get; set; }
        public virtual int? EscolaId {get; set; }
        public Escola Escola {get; set;}
        [NotMapped]
        public string codRegistro { get; set; }

    }

}