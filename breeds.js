const fetch = require("node-fetch");

const breeds = () =>
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(({ message }) =>
      Object.entries(message).reduce((acc, [breed, subbreeds]) => {
        if (subbreeds.length) {
          for (const subbreed of subbreeds) {
            acc.push(`${breed} ${subbreed}`);
          }
        } else {
          acc.push(breed);
        }
        return acc;
      }, [])
    );

module.exports = breeds;
