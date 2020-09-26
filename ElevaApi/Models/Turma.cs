using System;

namespace ElevaApi.Models

{
    public class Turma
    {
        public int Id { get; set; }
        public string EscolaId { get; set; }
        public string Disciplina { get; set; }
        public DateTime HorarioInicial { get; set; }
        public DateTime HorarioFinal { get; set; }
        public string DiaDaSemana { get; set; }
        public Escola Escola {get; set;}

    }

}