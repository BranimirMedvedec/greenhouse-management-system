// mockData.js

function getRandomDateInLast24Hours() {
  const now = new Date();
  const past24Hours = new Date(now.getTime() - (24 * 60 * 60 * 1000));
  return new Date(past24Hours.getTime() + Math.random() * (now.getTime() - past24Hours.getTime())).toISOString();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const mockData = [
  {
    id: 1,
    lastWatered: getRandomDateInLast24Hours(),
    lastHeated: getRandomDateInLast24Hours(),
    currentTemperature: getRandomInt(18, 30),
    currentHumidity: getRandomInt(40, 80),
    averageTemperature24h: getRandomInt(18, 30),
    averageHumidity24h: getRandomInt(40, 80),
  },
  {
    id: 2,
    lastWatered: getRandomDateInLast24Hours(),
    lastHeated: getRandomDateInLast24Hours(),
    currentTemperature: getRandomInt(18, 30),
    currentHumidity: getRandomInt(40, 80),
    averageTemperature24h: getRandomInt(18, 30),
    averageHumidity24h: getRandomInt(40, 80),
  },
  {
    id: 3,
    lastWatered: getRandomDateInLast24Hours(),
    lastHeated: getRandomDateInLast24Hours(),
    currentTemperature: getRandomInt(18, 30),
    currentHumidity: getRandomInt(40, 80),
    averageTemperature24h: getRandomInt(18, 30),
    averageHumidity24h: getRandomInt(40, 80),
  },
  {
    id: 4,
    lastWatered: getRandomDateInLast24Hours(),
    lastHeated: getRandomDateInLast24Hours(),
    currentTemperature: getRandomInt(18, 30),
    currentHumidity: getRandomInt(40, 80),
    averageTemperature24h: getRandomInt(18, 30),
    averageHumidity24h: getRandomInt(40, 80),
  },
  {
    id: 5,
    lastWatered: getRandomDateInLast24Hours(),
    lastHeated: getRandomDateInLast24Hours(),
    currentTemperature: getRandomInt(18, 30),
    currentHumidity: getRandomInt(40, 80),
    averageTemperature24h: getRandomInt(18, 30),
    averageHumidity24h: getRandomInt(40, 80),
  },
  {
    id: 6,
    lastWatered: getRandomDateInLast24Hours(),
    lastHeated: getRandomDateInLast24Hours(),
    currentTemperature: getRandomInt(18, 30),
    currentHumidity: getRandomInt(40, 80),
    averageTemperature24h: getRandomInt(18, 30),
    averageHumidity24h: getRandomInt(40, 80),
  },
];

export default mockData;
