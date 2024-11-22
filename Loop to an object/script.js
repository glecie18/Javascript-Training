const composer = {
    name: 'Edward Ellington',
    nickname: 'Duke',
    genres: ['jazz', 'swing'],
    instrument: 'piano'
  };
  
  for (let property in composer) {
    console.log(`${property}: ${composer[property]}`);
  }
  