export default class API {
  static getHeaders() {
    return {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
    };
  }
}
