export const ENDPOINT_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getAPI = async () => {
  try {
    const response = await fetch(ENDPOINT_PLANETS);
    const dataAPI = await response.json();
    return dataAPI;
  } catch (e) {
    console.log(e);
  }
};
