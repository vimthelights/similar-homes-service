COPY similar_homes(homeid, similarid)
FROM '/Users/zcush/Desktop/SDC/similar-homes-service/database/seed/similar_homes.csv'
DELIMITER ','
CSV HEADER;