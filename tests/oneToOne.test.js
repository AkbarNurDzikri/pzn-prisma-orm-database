import {prismaClient} from '../src/prisma-client.js';

describe("Prisma Client", () => {
  // it("should can create one to one relation", async () => {
  //   const wallet = await prismaClient.wallet.create({
  //     data: {
  //       id: "16",
  //       customer_id: "16",
  //       balance: 1000000
  //     },
  //     include: {
  //       customer: true
  //     }
  //   });

  //   console.info(wallet);
  // });

  it("should can create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "212",
        name: "Wiro Sableng",
        email: "wiro@sableng.id",
        phone: "4325435",
        wallet: {
          create: {
            id: "212",
            balance: 500000
          }
        }
      },
      include: {
        wallet: true
      }
    });

    console.info(customer)
  });
});