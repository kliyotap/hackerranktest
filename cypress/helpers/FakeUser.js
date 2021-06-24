export default class FakeUser {

  constructor() {
    this.faker = require('faker');
    this.faker.locale = 'en_AU';
    this.firstName = this.faker.name.firstName();
    this.username = (this.faker.name.firstName() + Date.now()).replace(/\W/g, '')
    this.phoneNumber = this.faker.phone.phoneNumber().replace('+61', '0').replace(' ', '').replace(' ', '');
    this.password = 'testpassword';
    this.email = `${this.username}@testhackerrank.com.au`;
  }
}
