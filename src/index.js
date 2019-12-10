class SwapiService {

  _apiBase = 'https://swapi.co/api/';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url},
                     received ${res.status} `);
    }
    return await res.json();
  }

  // People
  async getAllPeople() {
    const res = await this.getResource('people/');
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`people/${id}`);
  }

  //Planets
  async getAllPlanets() {
    const res = await this.getResource('planets/');
    return res;
  }

  getPlanet(id) {
    return this.getResource(`planets/${id}`);
  }

  //Starships
  async getAllStarships() {
    const res = await this.getResource('starships/');
    return res;
  }

  getStarship(id) {
    return this.getResource(`starships/${id}`);
  }
}