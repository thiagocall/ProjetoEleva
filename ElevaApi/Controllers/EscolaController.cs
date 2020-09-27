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

        public EscolaContext _context { get; }

        public EscolaController(EscolaContext context)
        {
            this._context = context;
            
        }
       
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Escola> Escolas = await this._context.Escolas.ToListAsync();
                return Ok(Escolas);
            }
            catch (System.Exception)
            {
                
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter turmas."); 
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Escola escola)
        {
            try 
            {
                await this._context.Escolas.AddAsync(escola);
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
                return  StatusCode(StatusCodes.Status204NoContent);

            }
            catch (System.Exception)
            {
                return  StatusCode(StatusCodes.Status500InternalServerError, "Erro ao remover a turma.");
            }

        }
    }
}
