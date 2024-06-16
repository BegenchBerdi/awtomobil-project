Create database awtomobil;

\c awtomobil;


Create table  company (
    "id" serial PRIMARY KEY,
    "name" CHARACTER VARYING(50) not null
);
---------company------------
INSERT INTO company (name) values ('Toyota');
INSERT INTO company (name) values ('Hyundai');
INSERT INTO company (name) values ('BMW');
INSERT INTO company (name) values ('Mercedes');
INSERT INTO company (name) values ('Jeep');

Create table firstdate (
    "id" serial PRIMARY KEY,
    "name" CHARACTER VARYING(30) not null,
    "company_id" integer
);
--------------firstdate-----------
INSERT INTO firstdate ( name , company_id) values ('1935 Toyota ModelG1',1);
INSERT INTO firstdate ( name , company_id) values ('1968 Cortina',2);
INSERT INTO firstdate ( name , company_id) values ('1917 BMW IIIa',3);
INSERT INTO firstdate ( name , company_id) values ('1926 Mercedes-Benz',4);
INSERT INTO firstdate ( name , company_id) values ('1941 GP',5);

Create table model (
    "id" serial PRIMARY KEY,
    "name" CHARACTER VARYING(30) not null,
    "color" CHARACTER VARYING(15) not null,
    "company_id" integer,
    "firstdate_id" integer
);



---------Toyota----------
INSERT INTO model (name,color,company_id,firstdate_id) values ('Lysicka','snezka',1,1);
INSERT INTO model (name,color,company_id,firstdate_id) values ('Babocka','mokryaswalt',1,1);
INSERT INTO model (name,color,company_id,firstdate_id) values ('Duty-CAmry','ak',1,1);
INSERT INTO model (name,color,company_id,firstdate_id) values ('Okuz kelle','gara',1,1);

-------Hyundai-----------------
INSERT INTO model (name,color,company_id,firstdate_id) values ('Hyundai Sonata','ak',2,2);
INSERT INTO model (name,color,company_id,firstdate_id) values ('Hyundai Elantra','mokryaswalt',2,2);
INSERT INTO model (name,color,company_id,firstdate_id) values ('Hyundai Genesis','snezka',2,2);
INSERT INTO model (name,color,company_id,firstdate_id) values ('Genesis G90','gara',2,2);

---------------BMW-------------------
INSERT INTO model (name,color,company_id,firstdate_id) values ('BMW i8','snezka',3,3);
INSERT INTO model (name,color,company_id,firstdate_id) values ('BMW i7','mokryaswalt',3,3);
INSERT INTO model (name,color,company_id,firstdate_id) values ('BMW i3','ak',3,3);
INSERT INTO model (name,color,company_id,firstdate_id) values ('BMW x6','gara',3,3);

-----------Mercedes------------------
INSERT INTO model (name,color,company_id,firstdate_id) values ('Mercedes AMG','snezka',4,4);
INSERT INTO model (name,color,company_id,firstdate_id) values ('Mercedes amg gt','mokryaswalt',4,4);
INSERT INTO model (name,color,company_id,firstdate_id) values ('Mercedes amg g63','ak',4,4);
INSERT INTO model (name,color,company_id,firstdate_id) values ('Mercedes-Benz','gara',4,4);

-----------Jeep-----------------------
INSERT INTO model (name,color,company_id,firstdate_id) values ('Jeep Wrangler','snezka',5,5);
INSERT INTO model (name,color,company_id,firstdate_id) values ('Jeep Mercedes','mokryaswalt',5,5);
INSERT INTO model (name,color,company_id,firstdate_id) values ('Jeep gladiator','ak',5,5);
INSERT INTO model (name,color,company_id,firstdate_id) values ('Jeep grand cherokee','gara',5,5);



