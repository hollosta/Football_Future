
const players = ['Kylian Mbappé', 'Christiano Ronaldo', 'Dominik Hollos', 'Luis Suarez', 'Peter Gulacsi', 'Dominik Szoboszlai', 'Willie Orban', 'Robert Lewandowsky', 'Zlatan Ibrahimovic', 'Eden Hazard', 'Mohamed Salah', 'Romelo Lukaku'];
const teams = ['PSG', 'RB Leipzig', 'Liverpool', 'Ferencvaros', 'Manchester United', 'Bayern Munchen', 'Barcelona', 'Juventus', 'Inter Milan', 'Dortmund', 'Real Madrid', 'Ajax'];
const year = [2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039];

const randomPlayer = players[Math.floor(Math.random() * 12)];

const randomTeam = teams[Math.floor(Math.random() * 12)];

const randomYear = year[Math.floor(Math.random() * 12)];

const getString = `Unbelievable news today! ${randomPlayer} won the Champions League final with ${randomTeam} in ${randomYear}!`;

console.log(getString);