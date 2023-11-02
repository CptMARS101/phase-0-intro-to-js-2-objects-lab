let employee = {name: "Sam", streetAddress: "11 Broadway"};
function updateEmployeeWithKeyAndValue(employee, name, value) {let newEmployee = {...employee};
newEmployee[name] = value;
return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {employee.streetAddress = "12 Broadway";
return employee}
function deleteFromEmployeeByKey(employee, key) {let modEmployee = {...employee};
delete modEmployee.name;
return modEmployee};
function destructivelyDeleteFromEmployeeByKey(employee, key) {delete employee.name;
return employee}