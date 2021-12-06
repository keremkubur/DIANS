drop table if exists busstation;
create table busstation
(
    id        integer primary key,
    longitude float4 not null,
    latitude  float4 not null,
    name      varchar(50)
);
drop table if exists carrental;
create table carrental
(
    id        integer primary key,
    longitude float4 not null,
    latitude  float4 not null,
    name      varchar(50)
);
drop table if exists fuel_station;
create table fuel_station
(
    id        integer primary key,
    longitude float4 not null,
    latitude  float4 not null,
    name      varchar(50)
);
drop table if exists parkingspace;
create table parkingspace
(
    id        integer primary key,
    longitude float4 not null,
    latitude  float4 not null,
    name      varchar(50)
);
drop table if exists publictransport;
create table publictransport
(
    id        integer primary key,
    longitude float4 not null,
    latitude  float4 not null,
    name      varchar(50)
);
