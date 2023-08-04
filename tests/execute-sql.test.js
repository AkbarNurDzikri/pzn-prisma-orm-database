import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should be able to execute sql', async () => {
    const id = 2;
    const name = 'Khalid Salahuddin Akbar';

    const result = await prismaClient.$executeRaw `INSERT INTO sample(id, name) VALUES(${id}, ${name});`;
    expect(result).toBe(1);
  });
});