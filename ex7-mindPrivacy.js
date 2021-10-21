const employeeRecords = [{
        name: 'John',
        occupation: 'developer',
        gender: 'M',
        email: 'john.doe@somewhere.net',
        salary: 50000,
    },
    {
        name: 'Jane',
        occupation: 'manager',
        gender: 'F',
        email: 'jane.eyre@somewhere.net',
        salary: 60000,
    },
];

function filterPrivateData(employLest) {
    let copyArray = [{
        name: employeeRecords[0].name,
        occupation: employeeRecords[0].occupation,
        email: employeeRecords[0].email,
    }, {
        name: employeeRecords[1].name,
        occupation: employeeRecords[1].occupation,
        email: employeeRecords[1].email,

    }];
    console.log(copyArray[0]);
    console.log(copyArray[1]);


}

filterPrivateData(employeeRecords);