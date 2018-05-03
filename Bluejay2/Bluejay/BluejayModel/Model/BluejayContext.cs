using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BluejayModel.Model
{
    public partial class BluejayContext : DbContext
    {
        public virtual DbSet<State> State { get; set; }
        public virtual DbSet<Zip> Zip { get; set; }
        public virtual DbSet<ZipStaging> ZipStaging { get; set; }

        public BluejayContext(DbContextOptions options) : base(options)
        {
            
            {

                
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<State>(entity =>
            {
                entity.HasKey(e => e.Code);

                entity.Property(e => e.Code)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Zip>(entity =>
            {
                entity.Property(e => e.City)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Zipcode)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ZipStaging>(entity =>
            {
                entity.HasKey(e => e.RecordNumber);

                entity.Property(e => e.RecordNumber).ValueGeneratedNever();

                entity.Property(e => e.City)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Country)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Decommisioned)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Lat).HasColumnType("numeric(13, 5)");

                entity.Property(e => e.Location)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.LocationText)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.LocationType)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Long).HasColumnType("numeric(13, 5)");

                entity.Property(e => e.Notes)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.WorldRegion)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Xaxis)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Yaxis)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Zaxis)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.ZipCodeType)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Zipcode)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });
        }
    }
}
