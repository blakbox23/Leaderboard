const getFromApi = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QF2juezRIUxvtbobb8bW/scores/')
  .then((response) => response.json())
  .then((data) => data.result);

export default getFromApi;