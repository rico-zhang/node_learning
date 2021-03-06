SELECT CONCAT_WS('@', `name`,salary)
FROM employee;

SELECT CURDATE();

SELECT CURTIME();

SELECT TIMESTAMPDIFF(DAY,'2010-1-1 11:11:11','2010-1-2 11:11:12');

SELECT *, 
TIMESTAMPDIFF(YEAR, birthday, CURDATE()) as age
from employee
ORDER BY age;