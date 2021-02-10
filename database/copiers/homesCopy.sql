COPY homes(userid, realtor, decreased, price, img, street, city, sta, beds, baths, sqft, score)
FROM '/Users/zcush/Desktop/SDC/similar-homes-service/database/seed/homes.csv'
DELIMITER ','
CSV HEADER;