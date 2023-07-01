# Write your MySQL query statement below

select Product.product_name, Sales.year, Sales.price
from Sales left join Product on Sales.product_id = Product.product_id
# select EmployeeUNI.unique_id, Employees.name
# from Employees left join EmployeeUNI on Employees.id = EmployeeUNI.id