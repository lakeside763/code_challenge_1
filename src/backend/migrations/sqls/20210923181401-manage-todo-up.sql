CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE SCHEMA IF NOT EXISTS public;

CREATE SCHEMA IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS "todo" (
  id uuid DEFAULT uuid_generate_v4(),
  title VARCHAR (255) NOT NULL,
  status VARCHAR (10) DEFAULT 'PENDING' NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "subtask"(
  id uuid DEFAULT uuid_generate_v4(),
  todo_id uuid NOT NULL,
  title VARCHAR (255) NOT NULL,
  status VARCHAR (10) DEFAULT 'PENDING' NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (todo_id) REFERENCES "todo"(id) ON DELETE CASCADE
)
