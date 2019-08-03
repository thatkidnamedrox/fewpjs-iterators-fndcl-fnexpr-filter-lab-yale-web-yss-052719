// Code your solution here
function findMatching(drivers, name) {

  return drivers.filter(d => {
    console.log(d, name);
    let dName = d[0].toUpperCase() + d.slice(1);
    return dName === name
  })
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(d => {
    return d.startsWith(str)
  })
}

function matchName(drivers, str) {
  return drivers.filter((d) => {
    return d.name === str
  })
}
