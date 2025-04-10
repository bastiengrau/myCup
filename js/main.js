async function getData(params) {
  const response = await fetch("xml/teams.xml");
  const data = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(data, "text/xml");

  const teamsArray = toObj(xml);
  totalRoundCalcul(teamsArray);
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
  return teamArray;
}

function round(table) {}

function totalRoundCalcul(table) {
  console.log(table);
  const teamsCount = table.length;
  var roundNumber = 1;
  const finalTable = exemptManager("add", table, teamsCount);
  console.log(finalTable);
  while (teamsCount / 2 != 1) {
    roundNumber = roundNumber + 1;
    teamsCount = teamsCount / 2;
  }
  console.log(roundNumber);
}

function exemptManager(event, table = [], nbTeams = 0) {
  console.dir(event);
  switch (event) {
    case "add":
      return addExempt(table, nbTeams);
      break;
    case "exVsEx":
      break;
    default:
      break;
  }
}

function addExempt(table, nbTeams) {
  console.log(nbTeams);
  var i = 0;
  const exempt = "exempt";

  for (let i = nbTeams; i < 32; i++) {
    console.log(i);
    table.push({
      lib: exempt.concat(i + 1),
      niv: "NAN",
      round: 1,
    });
    console.log(table);
  }
  return table;
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

function randomMinusNoob() {
  // modifier les paramètres d'aléatoire
  return weightedRand({ 0: 0.8, 1: 0.1, 2: 0.1 });
}

function randomHeavy() {
  // modifier les paramètres d'aléatoire
  return weightedRand({ 0: 0.8, 1: 0.1, 2: 0.1 });
}
