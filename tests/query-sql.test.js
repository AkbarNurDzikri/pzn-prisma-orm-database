import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should be able to query sql', async () => {
    const id = 1;

    const results = await prismaClient.$queryRaw `SELECT * FROM sample WHERE id = ${id}`;
    for(const result of results) {
      console.info(`Result sample id: ${result.id} and name: ${result.name}`);
    }
  });
});