async function getData(params) {
  const response = await fetch("xml/teams.xml");
  const data = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(data, "text/xml");

  toObj(xml);
}

getData();

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
  console.log(totalRoundCalcul(teamArray));
}

function round(table) {}

function totalRoundCalcul(table) {
  const teamsCount = table.length;
  console.log(teamsCount);
  const totalRoundNumber = 0;
  for (let i = 2; i < teamsCount; i + i) {
    totalRoundNumber + 1;
  }
  console.log(totalRoundNumber);
  return totalRoundNumber;
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

function random() {
  for (let i = 0; i < 9; i++) {
    weightedRand({ 0: 0.8, 1: 0.1, 2: 0.1 });
  }
}
