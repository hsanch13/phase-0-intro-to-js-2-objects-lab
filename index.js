const employee = {
    name: "Hayley",
    streetAddress: "5762 Heathland Terrace",
  };

function updateEmployeeWithKeyAndValue(employeesObject, key, value) {
    let newEmployees = {...employeesObject}; 
    newEmployees [key] = value;
    return newEmployees
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee [key] = value;
    return employee

}

function deleteFromEmployeeByKey(employeeObject, key) {
    let newestEmployee = {...employeeObject};
    delete newestEmployee[key]
    return newestEmployee
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key]
    return employeeObject
}