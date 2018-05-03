use ZipDb
go

drop table if exists ZipStaging
go

create table ZipStaging (
	RecordNumber int not NULL PRIMARY KEY,
	Zipcode varchar(200) NULL,
	ZipCodeType varchar(200) NULL,
	City varchar(200) NULL,
	State varchar(200) NULL,
	LocationType varchar(200) NULL,
	Lat numeric(13, 5) NULL,
	Long numeric(13, 5) NULL,
	Xaxis varchar(200) NULL, --numeric(13, 5) NULL,
	Yaxis varchar(200) NULL, --numeric(13, 5) NULL,
	Zaxis varchar(200) NULL, --numeric(13, 5) NULL,
	WorldRegion varchar(200) NULL,
	Country varchar(200) NULL,
	LocationText varchar(200) NULL,
	Location varchar(200) NULL,
	Decommisioned varchar(200) NULL,
	TaxReturnsFiled bigint NULL,
	EstimatedPopulation bigint NULL,
	TotalWages bigint NULL,
	Notes varchar(200) NULL
);
go

drop table if exists Zip
go
create table Zip (
	Id int not null identity(1, 1) PRIMARY KEY,
	Zipcode varchar(200) NULL,
	City varchar(200) NULL,
	State varchar(200) NULL
);
go

