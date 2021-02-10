CREATE DATABASE similarlistings;
\connect similarlistings

CREATE TABLE IF NOT EXISTS users (
  id serial primary key,
  username varchar(150),
  email varchar(150)
);

CREATE TABLE IF NOT EXISTS homes (
  id serial primary key,
  userid int not null references users (id),
  realtor varchar(150) not null,
  decreased boolean,
  price int not null,
  img varchar(150) not null,
  street varchar(150) not null,
  city varchar(150) not null,
  sta varchar(150) not null,
  beds int,
  baths int,
  sqft int not null,
  score int not null
);

CREATE TABLE IF NOT EXISTS liked_homes (
  id serial primary key,
  userid int,
  homeid int,
  foreign key (userid) references users (id),
  foreign key (homeid) references homes(id)
);

CREATE TABLE IF NOT EXISTS similar_homes (
  homeid int references homes (id),
  similarid int references homes (id)
);

CREATE INDEX homeidIndex ON similar_homes (homeid);
CREATE INDEX similarIndex ON similar_homes (similarid);

CREATE INDEX useridIndex ON liked_homes (userid);


