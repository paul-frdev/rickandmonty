const getCharacter = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  return response.json();
};

const sleep = (ms: any) => {
  // throw new Error("dem bro");
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const CharacterPage = async () => {
  const charter = await getCharacter();
  await sleep(2000);
  return (
    <div>
      <h1>{charter.name}</h1>
    </div>
  );
};

export default CharacterPage;
