COPY users(username, email)
FROM '/Users/zcush/Desktop/SDC/similar-homes-service/database/seed/users.csv'
DELIMITER ','
CSV HEADER;