using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElevaApi.Data;
using ElevaApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ElevaApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EscolaController : ControllerBase
    {
        public readonly EscolaContext _context;

        public EscolaController(EscolaContext context)
        {
            this._context = context;
        }
       
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var Escolas = await this._context.Escolas.ToArrayAsync();
                return Ok(Escolas);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter turmas."); 
            }
        }

        [HttpGet("{codreg}")]
        public async Task<IActionResult> Get(string codreg)
        {
            try
            {
                
                var Escola = await this._context.Escolas.FirstOrDefaultAsync(e => e.CodRegistro == codreg);
                return Ok(Escola);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter Escolas."); 
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Escola escola)
        {
            try 
            {
                this._context.Escolas.Add(escola);
                this._context.SaveChanges();
                return StatusCode(StatusCodes.Status204NoContent);
            }

            catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao incluir o usuário.");
            }

        }

        [HttpDelete("{_id}")]
        public ActionResult Delete(int _id){

            try
            {
                var escola = new Escola{
                    Id = _id
                };
                
                this._context.Escolas.Remove(escola);
                this._context.SaveChanges();
                return  StatusCode(StatusCodes.Status204NoContent);

            }
            catch (System.Exception)
            {
                return  StatusCode(StatusCodes.Status500InternalServerError, "Erro ao remover a turma.");
            }

        }
    }
}
