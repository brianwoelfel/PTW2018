Use ZipDb;
go

drop table if exists State;
go

CREATE TABLE State 
(
	Name varchar(255), 
	Code varchar(2) PRIMARY KEY
);

insert into State (Name, Code) values ('Alabama', 'AL');
insert into State (Name, Code) values ('Alaska', 'AK');
insert into State (Name, Code) values ('Arizona', 'AZ');
insert into State (Name, Code) values ('Arkansas', 'AR');
insert into State (Name, Code) values ('California', 'CA');
insert into State (Name, Code) values ('Colorado', 'CO');
insert into State (Name, Code) values ('Connecticut', 'CT');
insert into State (Name, Code) values ('Delaware', 'DE');
insert into State (Name, Code) values ('Florida', 'FL');
insert into State (Name, Code) values ('Georgia', 'GA');
insert into State (Name, Code) values ('Hawaii', 'HI');
insert into State (Name, Code) values ('Idaho', 'ID');
insert into State (Name, Code) values ('Illinois', 'IL');
insert into State (Name, Code) values ('Indiana', 'IN');
insert into State (Name, Code) values ('Iowa', 'IA');
insert into State (Name, Code) values ('Kansas', 'KS');
insert into State (Name, Code) values ('Kentucky', 'KY');
insert into State (Name, Code) values ('Louisiana', 'LA');
insert into State (Name, Code) values ('Maine', 'ME');
insert into State (Name, Code) values ('Maryland', 'MD');
insert into State (Name, Code) values ('Massachusetts', 'MA');
insert into State (Name, Code) values ('Michigan', 'MI');
insert into State (Name, Code) values ('Minnesota', 'MN');
insert into State (Name, Code) values ('Mississippi', 'MS');
insert into State (Name, Code) values ('Missouri', 'MO');
insert into State (Name, Code) values ('Montana', 'MT');
insert into State (Name, Code) values ('Nebraska', 'NE');
insert into State (Name, Code) values ('Nevada', 'NV');
insert into State (Name, Code) values ('New Hampshire', 'NH');
insert into State (Name, Code) values ('New Jersey', 'NJ');
insert into State (Name, Code) values ('New Mexico', 'NM');
insert into State (Name, Code) values ('New York', 'NY');
insert into State (Name, Code) values ('North Carolina', 'NC');
insert into State (Name, Code) values ('North Dakota', 'ND');
insert into State (Name, Code) values ('Ohio', 'OH');
insert into State (Name, Code) values ('Oklahoma', 'OK');
insert into State (Name, Code) values ('Oregon', 'OR');
insert into State (Name, Code) values ('Pennsylvania', 'PA');
insert into State (Name, Code) values ('Rhode Island', 'RI');
insert into State (Name, Code) values ('South Carolina', 'SC');
insert into State (Name, Code) values ('South Dakota', 'SD');
insert into State (Name, Code) values ('Tennessee', 'TN');
insert into State (Name, Code) values ('Texas', 'TX');
insert into State (Name, Code) values ('Utah', 'UT');
insert into State (Name, Code) values ('Vermont', 'VT');
insert into State (Name, Code) values ('Virginia', 'VA');
insert into State (Name, Code) values ('Washington', 'WA');
insert into State (Name, Code) values ('West Virginia', 'WV');
insert into State (Name, Code) values ('Wisconsin', 'WI');
insert into State (Name, Code) values ('Wyoming', 'WY');