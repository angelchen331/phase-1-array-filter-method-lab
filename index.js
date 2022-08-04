// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    const result = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase())
    return result;
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(driversName => driversName.startsWith(string))
    return result;
}

function matchName(drivers, string) {
    const result = drivers.filter(driversName => driversName.match)
    // const result = drivers.filter(driversName => driversName.match() === string.match)
    // const result = drivers.filter(driversName => driversName === string)
    return result;
}

