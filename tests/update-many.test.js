import {prismaClient} from '../src/prisma-client.js';

describe("Prisma Client", () => {
  it('should can update many records', async () => {
    const {count} = await prismaClient.customer.updateMany({
      data: {
        name: "Jokowi semua dong"
      },
      where: {
        name: "Jokowi"
      }
    });
  });
});