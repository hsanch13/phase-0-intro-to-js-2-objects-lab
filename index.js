//new code from phase 1:

const employee = {
    name: "Hayley",
    streetAddress: "100 Sundae Lane"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployeeObject = {...employee};
    newEmployeeObject[key] = value;
    return newEmployeeObject
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj
}

function deleteFromEmployeeByKey(obj, key){
    const newestEmployeeObject = {...employee}
    delete newestEmployeeObject.name
    return newestEmployeeObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    return employee
}

// old code from pre-work:

//  const employee = {
//     name: "Hayley",
//     streetAddress: "57 Heathland Terrace",
//   };

// function updateEmployeeWithKeyAndValue(employeesObject, key, value) {
//     let newEmployees = {...employeesObject}; 
//     newEmployees [key] = value;
//     return newEmployees
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee [key] = value;
//     return employee

// }

// function deleteFromEmployeeByKey(employeeObject, key) {
//     let newestEmployee = {...employeeObject};
//     delete newestEmployee[key]
//     return newestEmployee
// }

// function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
//     delete employeeObject[key]
//     return employeeObject
// }