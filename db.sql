-- commands


CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurant(id),
    name VARCHAR(55) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check (rating >=1 and rating <=5)
);

ALTER TABLE restaurant


INSERT INTO restaurant (id, name, location, price_range) VALUES (123, 'mcdonald', 'new york', 3);