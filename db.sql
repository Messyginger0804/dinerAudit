-- commands


CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurant(id),
    name VARCHAR(55) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check (rating >=1 and rating <=5)
);

INSERT INTO reviews (name, review, rating) VALUES ('James', 'lorem ipsum dolor sit amet, consectetur adip',)

ALTER TABLE restaurant


INSERT INTO restaurant (id, name, location, price_range) VALUES (123, 'mcdonald', 'new york', 3);

-- ssh -i dinerfinder.pem ubuntu@18.119.134.0
-- /home/ubuntu/apps/dinerFinder/client/dist
-- /home/ubuntu/apps/dinerFinder/client/dist