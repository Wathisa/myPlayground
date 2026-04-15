function getAllAnimalsByLetter(letter) {
  let allResults = [];

  function fetchNextPage() {
    const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`;

    return fetch(url, {
      headers: { "X-Api-Key": "XECRUG2vs9cNmuDs8moLwULF8bKK2ZSuP1nqmOW4" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          console.log(
            `Found ${allResults.length} animals containing the letter ${letter}`,
          );
          console.log(allResults);
          return allResults;
        }

        allResults.push(...data);
        offset += 20; // Move to the next page before fetching again
        return fetchNextPage();
      });
  }

  return fetchNextPage();
}

getAllAnimalsByLetter("a")
  .then((animals) => {
    console.log("Finished fetching all pages.");
    console.log(animals.map((animal) => animal.name));
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });
