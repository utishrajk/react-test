const PractitionersApiService = {};

PractitionersApiService.getPractitioners = function () {
  const url = 'http://localhost:8444/practitioners/';
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => { throw error; });
};

export { PractitionersApiService };
