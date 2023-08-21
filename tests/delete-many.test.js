import {prismaClient} from '../src/prisma-client.js';

describe("Prisma Client", () => {
  it('should be able to delete many', async () => {
    const {count} = await prismaClient.customer.deleteMany({
      where: {
        name: "Jokowi semua dong"
      }
    });
    expect(count).toBe(3);
  });
});