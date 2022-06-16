const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { heroes } = require('../data/star-wars');

describe('Star Wars Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/star-wars should return all heroes', async () => {
    const res = await request(app).get('/star-wars');
    expect(res.body).toEqual(heroes);
  });

  it('/star-wars:id should return individual hero', async () => {
    const res = await request(app).get('/star-wars/1');
    const Luke = {
      id: '1',
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
    };
    expect(res.body).toEqual(Luke);
  });

  afterAll(() => {
    pool.end();
  });
});
