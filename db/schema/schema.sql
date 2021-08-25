DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS movies CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS restaurants CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) DEFAULT 'https://toppng.com/uploads/preview/egg-png-11553982261qbkbn5fjgy.png'
);
CREATE TABLE books (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255),
  publisher VARCHAR(255),
  image_thumbnail VARCHAR(255) DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Draw_book.png/1110px-Draw_book.png',
  created_at TIMESTAMP DEFAULT NOW(),
  is_completed BOOLEAN DEFAULT FALSE
);
CREATE TABLE movies (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  release_date  VARCHAR(255),
  image_thumbnail VARCHAR(255) DEFAULT 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Video-x-generic.svg/1024px-Video-x-generic.svg.png',
  rating NUMERIC,
  media_type VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  is_completed BOOLEAN DEFAULT FALSE
);
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  item TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  is_completed BOOLEAN DEFAULT TRUE
);
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  item TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  is_completed BOOLEAN DEFAULT TRUE
);
