/* Your Code Here */

let createEmployeeRecord = function(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = employees => employees.map(createEmployeeRecord)

let createTimeInEvent = function(timeStamp) {
    // this.timeInEvents.push 
    let [date, hour] = timeStamp.split(' ')
    let timeEvent = {
        type: 'TimeIn',
        hour: parseInt(hour),
        date
    }
    this.timeInEvents.push(timeEvent);
    return this
}

let createTimeOutEvent = function(timeStamp) {
    let [date, hour] = timeStamp.split(' ');
    let timeEvent = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date
    }
    this.timeOutEvents.push(timeEvent);
    return this
}

let hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find(e => e.date === date).hour;
    let timeOut = this.timeOutEvents.find(e => e.date === date).hour;
    return (timeOut - timeIn) / 100
}

let wagesEarnedOnDate = function(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}









/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let findEmployeeByFirstName = function(employees, firstName) {
    return employees.find(e => e.firstName === firstName)
}

let calculatePayroll = function(employees) {
    let wages = employees.map(e => allWagesFor.call(e))
    return wages.reduce((a, b) => a + b) 
}