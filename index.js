let drivers = ["Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
  return function fareMultiplier() {
    return number * number;
  };
}

function fareDoubler(fare) {
  return fare * 2;
}
function fareTripler(fare) {
  return fare * 3;
}

function selectDifferentDrivers(drivers, functions) {
  if ((functions = returnFirstTwoDrivers())) {
    return drivers.slice(0, 2);
  } else if ((functions = returnLastTwoDrivers())) {
    return "hello ";
  }
}
