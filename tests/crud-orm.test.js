import {prismaClient} from '../src/prisma-client.js';

describe('CRUD ORM Prisma', () => {
  it('should be to able create data customer', async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: '3',
        name: 'Khalid Shalahuddin Akbar',
        email: 'khalid@gmail.com',
        phone: '089936474'
      }
    });
    expect(customer.name).toBe('Khalid Shalahuddin Akbar');
  });

  // it('should be to able update data customer', async () => {
  //   const customer = await prismaClient.customer.update({
  //     data: {
  //       name: 'Khalid Shalahuddin Akbar',
  //       email: 'khalid@gmail.com',
  //     },
  //     where: {
  //       id: '1'
  //     }
  //   });
  //   expect(customer.name).toBe('Khalid Shalahuddin Akbar');
  //   expect(customer.email).toBe('khalid@gmail.com');
  // });

  // it('should be to able read data customer', async () => {
  //   const customer = await prismaClient.customer.findUnique({
  //     where: {
  //       email: 'khalid@gmail.com' // kolom yang bisa dicari menggunakan method findUnique() hanya kolom yang telah dideklarasikan unique
  //     }
  //   });
  //   expect(customer.id).toBe('1');
  //   expect(customer.name).toBe('Khalid Shalahuddin Akbar');
  //   expect(customer.email).toBe('khalid@gmail.com');
  //   expect(customer.phone).toBe('088293378351');
  // });

  // it('should be to able delete data customer', async () => {
  //   const customer = await prismaClient.customer.delete({
  //     where: {
  //       id: '3',
  //     }
  //   });
  //   expect(customer.id).toBe('3');
  //   expect(customer.name).toBe('Khalid Shalahuddin Akbar');
  //   expect(customer.email).toBe('khalid@gmail.com');
  //   expect(customer.phone).toBe('089936474');
  // });
});

