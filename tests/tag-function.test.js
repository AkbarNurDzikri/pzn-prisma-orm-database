function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test('tag function', () => {
  const name = 'Dzikri';

  tagFunction `Hello ${name}, how are you?`;
  tagFunction `Bye ${name}, see you later`;
});

test('menghindari SQL Injection dengan tag function javascript yang digunakan oleh prisma', () => {
  const name = "Dzikri'; DROP TABLE users;";
  const age = 29;

  tagFunction `SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});