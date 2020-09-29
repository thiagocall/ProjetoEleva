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
    public class TurmaController:ControllerBase
    {
        public readonly EscolaContext _context;

        public TurmaController(EscolaContext context)
        {
            this._context = context;
        }

        [HttpGet("item/{_id}")]
        public async Task<IActionResult> GetItem(string _id){

            try
            {
                var id = Convert.ToInt32(_id);
                var Turmas = await this._context.Turmas
                                       .FindAsync(id);
                return Ok(Turmas);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter turma."); 
            }

        }

        [HttpGet("{_id}")]
        public async Task<IActionResult> Get(string _id){

            try
            {
                var Turmas = await this._context.Turmas
                                 .Where(x => x.Escola.CodRegistro == _id)
                                 .Include(tu => tu.Escola).ToArrayAsync();
                return Ok(Turmas);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter turmas da escola."); 
            }

        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Turma Turma) {

            try
            {
                Turma.EscolaId  = this._context.Escolas
                                      .FirstOrDefault(e => e.CodRegistro == Turma.codRegistro)
                                      .Id;
                await this._context.Turmas.AddAsync(Turma);
                this._context.SaveChanges();
                return StatusCode(StatusCodes.Status204NoContent);
            }
            catch (System.Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao inserir."); 
            }
        }

        [HttpDelete("{_id}")]
        public async Task<IActionResult> Delete(string _id){

            try
            {
                var Turma = new Turma(){
                    Id = Convert.ToInt32(_id)
                };

                this._context.Turmas.Remove(Turma);
                await this._context.SaveChangesAsync();
                return StatusCode(StatusCodes.Status204NoContent);

            }
            catch (System.Exception)
            {
                
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao excluir turma."); 
            }

        }
        
    }
}