use ZipDb
go
drop proc if exists sp_LoadZip 
go
create proc sp_LoadZip(@type varchar(10), @FileName varchar(500))
as
begin
	truncate table ZipStaging;
	truncate table Zip;

	BULK INSERT ZipStaging
	FROM 'c:\temp\celery\free-zipcode-database.csv'
	with  ( FORMAT = 'CSV', FIRSTROW = 2);

	if isnull(@type, '') = 'BIG' 
	begin
		insert into Zip (ZipCode, City, State)
		select Zipcode, City, State from ZipStaging with (nolock)
	end
	else
	begin
		insert into Zip (ZipCode, City, State)
		select top 1000 Zipcode, City, State from ZipStaging with (nolock) where State = 'PA' and zipcode like '19%'
			and zipcodetype='STANDARD' and locationtype = 'PRIMARY' 
	end;
end;
go
--exec sp_LoadZip @type='small', 	@FileName = 'c:\temp\celery\free-zipcode-database.csv';
--exec sp_LoadZip @type='big', 	@FileName = 'c:\temp\celery\free-zipcode-database.csv';
