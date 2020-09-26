using System;

namespace ElevaApi.Models

{
    public class Escola
    {
        public int Id { get; set; }
        public string CodRegistro { get; set; }
        public string Nome { get; set; }
        public string Endereco { get; set; }
        public int Numero { get; set; }
        public int Bairro { get; set; }
        public int Cep { get; set;}
        public int Cidade { get; set; }
        public int CodUf { get; set; }
        public string Responsavel { get; set; }
        public string Email { get; set; }

    }

}