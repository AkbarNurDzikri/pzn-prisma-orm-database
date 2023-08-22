import {prismaClient} from '../src/prisma-client.js';

describe("Prisma Client", () => {
  // it("should can create and select fields", async ()=> {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "18",
  //       name: "Megawati",
  //       email: "mega@gmail.pdi",
  //       phone: "25345626",
  //     },
  //     select: {
  //       id: true,
  //       name: true,
  //     }
  //   });

  //   console.table(customer);
  // });

  it("should can select fields", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      }
    });

    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined()
      expect(customer.phone).toBeUndefined();
    }
  });
});