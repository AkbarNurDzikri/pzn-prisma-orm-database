import {prismaClient} from '../src/prisma-client.js';

describe("Prisma Client", () => {
  it('should can read many records', async () => {
    const customers = await prismaClient.customer.findMany({});
    console.table(customers);
    expect(customers.length).toBe(3);
  });
});