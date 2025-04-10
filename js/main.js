async function getData(params) {
  const response = await fetch("xml/teams.xml");
  const data = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(data, "text/xml");

  toObj(xml);
}

getData();
//console.log(random());

function toObj(xml) {
  const teamArray = [];
  const teams = [...xml.querySelectorAll("team")];
  teams.forEach((team) => {
    teamArray.push({
      lib: team.querySelector("lib").textContent,
      niv: team.querySelector("niv").textContent,
      round: "",
    });
  });
  totalRoundCalcul(teamArray);
  console.log(teamArray);
}

function round(table) {}

function totalRoundCalcul(table) {
  const teamsCount = table.length;
  console.log(teamsCount);
  const totalRoundNumber = 0;
  
  console.log(Math.round(teamsCount % 4));
  if (Math.round(teamsCount % 4) != 0) {
    table.push({
      lib: "exempt",
      niv: 0,
      round: 1,
    });
  } else {
    return totalRoundNumber;
  }
}

function weightedRand(spec) {
  var i,
    sum = 0,
    r = Math.random();
  for (i in spec) {
    sum += spec[i];
    if (r <= sum) return i;
  }
}

function randomNoob() {
    return weightedRand({ 0: 0.8, 1: 0.1, 2: 0.1 });
}

function minusNoob() { // modifier les paramètres d'aléatoire
    return weightedRand({ 0: 0.8, 1: 0.1, 2: 0.1 });
}

function randomHeavy() { // modifier les paramètres d'aléatoire
    return weightedRand({ 0: 0.8, 1: 0.1, 2: 0.1 });
}