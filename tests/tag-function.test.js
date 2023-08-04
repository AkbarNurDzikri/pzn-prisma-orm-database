function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test('tag function', () => {
  const name = 'Dzikri';

  tagFunction `Hello ${name}, how are you?`;
  tagFunction `Bye ${name}, see you later`;
});