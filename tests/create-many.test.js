import {prismaClient} from '../src/prisma-client.js';

describe("Prisma Client", () => {
  it('should can create many records', async () => {
    const {count} = await prismaClient.customer.createMany({
      data: [
        {
          id: "14",
          name: "Jokowi",
          email: "joko@gmail.com",
          phone: "02453"
        },
        {
          id: "15",
          name: "SBY",
          email: "sby@gmail.com",
          phone: "024325656"
        }
      ],
    });
  });
});