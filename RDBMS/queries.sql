
/*
 Run these queries after running the ones in table
*/

-- Sum the number of payments for each user

SELECT customer_name, count(*) as count
FROM payments
GROUP BY customer_name
ORDER BY count DESC;

-- Sum the payment amounts for each month

SELECT sum(amount) as sum, extract(year from processed_at) as year, extract(month from processed_at) as month
FROM payments
GROUP BY month, year
ORDER BY sum DESC;

-- Sum the payment amount for each month for each user

SELECT customer_name, sum(amount) as sum, extract(year from processed_at) as year, extract(month from processed_at) as month
FROM payments
GROUP BY customer_name, month, year
ORDER BY customer_name DESC;

-- Find the largest single-user payment for each month

SELECT max(sum) as max, year, month
FROM (
  SELECT customer_name, sum(amount) as sum, extract(year from processed_at) as year, extract(month from processed_at) as month
  FROM payments
  GROUP BY customer_name, month, year
) AS monthly_sums
GROUP BY year, month
ORDER BY max DESC;

/*
  TRANSACTIONS: Transfer 100 from Clement to Antoine, one can use this to see the ACID properties
*/

BEGIN;
UPDATE balances set balance = balance - 100 WHERE username = 'clement';
UPDATE balances set balance = balance + 100 WHERE username = 'antoine';
COMMIT;


/*
  Indexes
*/

-- Find the 10 largest Indexes
SELECT * FROM large_table ORDER BY random_int DESC LIMIT 10;

-- Create an index on the ints in the table large_table
CREATE INDEX large_table_random_int_idx ON large_table(random_int);

DROP INDEX large_table_random_int_idx ON large_table;
