-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

Drop table if exists star_wars;

CREATE TABLE star_wars 
(
    id BIGINT GENERATED ALWAYS AS Identity,
    name	VARCHAR NOT NULL,
    height	INT NOT NULL,
    mass	INT NOT NULL,
    hair_color	VARCHAR NOT NULL,
    skin_color	VARCHAR NOT NULL,
    eye_color	VARCHAR NOT NULL,
    birth_year	VARCHAR NOT NULL,
    gender	VARCHAR NOT NULL,
    homeworld	VARCHAR NOT NULL
);

INSERT INTO star_wars (name,height,mass,hair_color,skin_color,eye_color,birth_year,gender,homeworld) VALUES 
('Luke Skywalker', '172', '77', 'blond', 'fair', 'blue', '19BBY', 'male', 'https://swapi.dev/api/planets/1/'),
('C-3PO', '167', '75', 'n/a', 'gold', 'yellow', '112BBY', 'n/a', 'https://swapi.dev/api/planets/1/'),
('R2-D2', '96', '32', 'n/a', 'white, blue', 'red', '33BBY', 'n/a', 'https://swapi.dev/api/planets/8/'),
('Darth Vader', '202', '136', 'none', 'white', 'yellow', '41.9BBY', 'male', 'https://swapi.dev/api/planets/1/'),
('Leia Organa', '150', '49', 'brown', 'light', 'brown', '19BBY', 'female', 'https://swapi.dev/api/planets/2/'),
('Owen Lars', '178', '120', 'brown, grey', 'light', 'blue', '52BBY', 'male', 'https://swapi.dev/api/planets/1/');