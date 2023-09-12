-- commands


CREATE TABLE restaurant (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price_range INT NOT NULL check (price_range >=1 and price_range <=5)
);

ALTER TABLE restaurant


INSERT INTO restaurant (id, name, location, price_range) VALUES (123, 'mcdonald', 'new york', 3);