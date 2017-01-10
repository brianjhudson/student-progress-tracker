create table if not exists students(
    id serial primary key not null,
    dev_id int not null,
    first_name varchar(20) not null,
    last_name varchar(20) not null
);