function getAllAnimalsByLetter(letter) {
  let allResults = [];

  const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`;
  return fetch(url, {
    headers: { "X-Api-Key": "XECRUG2vs9cNmuDs8moLwULF8bKK2ZSuP1nqmOW4" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        allResults.push(...data);
      }

      console.log(
        `Found ${allResults.length} animals containing the letter ${letter}`,
      );
      // console.log(allResults);
    });
}

getAllAnimalsByLetter("a");
