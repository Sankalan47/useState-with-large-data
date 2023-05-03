import { faker } from "@faker-js/faker";
// import { faker } from '@faker-js/faker/locale/de';

export const USERS = [];
export function createRandomUser() {
  return {
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
    email: faker.internet.email(),
  };
}
export function mockData(rows) {
  for (let i = 0; i < rows; i++) {
    USERS.push(createRandomUser());
  }
  console.table(USERS);
  return USERS;
}

export const MOCKDATA = mockData(100000);
