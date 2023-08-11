import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should can execute sequential transaction', async () => {
    const array = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "12",
          email: "sisfkaea@gmail.com",
          name: "Siska fSaria",
          phone: "0896121431403113"
        }
      }),
      prismaClient.customer.create({
        data: {
          id: "13",
          email: "rudidaa@gmail.com",
          name: "Juwitfaa Novita RUdia",
          phone: "02345728724611"
        }
      })
    ])

    console.info(array[0].name);
    console.info(array[1].name);
  });

  // it('should can execute interactive transaction', async () => {
  //   const [x, y] = await prismaClient.$transaction(async (prisma) => {
  //     const x = await prisma.customer.create({
  //       data: {
  //         id: "14",
  //         email: "sisfkaeas@gmail.com",
  //         name: "Xyz",
  //         phone: "0896121432140311"
  //       }
  //     });

  //     const y = await prisma.customer.create({
  //       data: {
  //         id: "15",
  //         email: "rudiddfaa@gmail.com",
  //         name: "abc",
  //         phone: "02345728724611"
  //       }
  //     });

  //     return [x, y];
  //   });
  //   expect(x.name).toBe('Xyz')
  //   expect(y.name).toBe('abc')
  // });
});