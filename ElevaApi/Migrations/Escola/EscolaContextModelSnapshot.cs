﻿// <auto-generated />
using System;
using ElevaApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace ElevaApi.Migrations.Escola
{
    [DbContext(typeof(EscolaContext))]
    partial class EscolaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("ElevaApi.Models.Escola", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Bairro")
                        .HasColumnType("text");

                    b.Property<string>("Cep")
                        .HasColumnType("text");

                    b.Property<string>("Cidade")
                        .HasColumnType("text");

                    b.Property<string>("CodRegistro")
                        .HasColumnType("text");

                    b.Property<string>("CodUf")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("Endereco")
                        .HasColumnType("text");

                    b.Property<string>("Nome")
                        .HasColumnType("text");

                    b.Property<string>("Numero")
                        .HasColumnType("text");

                    b.Property<string>("Responsavel")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Escolas");
                });

            modelBuilder.Entity("ElevaApi.Models.Turma", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("DiaDaSemana")
                        .HasColumnType("text");

                    b.Property<string>("Disciplina")
                        .HasColumnType("text");

                    b.Property<int?>("EscolaId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("HorarioFinal")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime>("HorarioInicial")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id");

                    b.HasIndex("EscolaId");

                    b.ToTable("Turmas");
                });

            modelBuilder.Entity("ElevaApi.Models.Turma", b =>
                {
                    b.HasOne("ElevaApi.Models.Escola", "Escola")
                        .WithMany()
                        .HasForeignKey("EscolaId");
                });
#pragma warning restore 612, 618
        }
    }
}
