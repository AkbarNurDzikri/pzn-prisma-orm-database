import {prismaClient} from '../src/prisma-client.js';

describe("Prisma Client", () => {
  it("should can create and select fields", async ()=> {
    const customer = await prismaClient.customer.create({
      data: {
        id: "18",
        name: "Megawati",
        email: "mega@gmail.pdi",
        phone: "25345626",
      },
      select: {
        id: true,
        name: true,
      }
    });

    console.table(customer);
  });
});