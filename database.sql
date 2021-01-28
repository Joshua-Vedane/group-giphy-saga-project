CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('odd'), ('cartoon'), ('spicy'), ('meme');


-- Favorite table
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "image_url" TEXT,
    "category_id" INT REFERENCES "category"
);

-- Sample table entry
INSERT INTO "favorites" ("image_url", "category_id")
VALUES ('https://media.giphy.com/media/HgtCxKvJZ7Wi4/giphy.gif', 2);