import API from "./api";

export default class PetsAPI extends API {

  /**
   * returns petId as number
   * 
   * @param {string} status 
   * @returns {number}
   */
  static getPetIdByStatus(status) {
    return this.getPetsByStatus(status).then((pets) => {
      expect(pets.length).to.be.greaterThan(0);
      return pets[0].id || 0;
    });
  }

  /**
   * return list of pets filtered by status 
   *
   * @param {string} status 
   * @returns {object}
   */
  static getPetsByStatus(status) {
    expect(status).to.be.not.eql('');
    cy.log('verify pet status is not empty string or null');
    return cy.request({
      url: `${Cypress.env('pet_store_api')}/findByStatus?status=${status}`,
      method: 'GET',
      headers: this.getHeaders()
    }).its('body').then((body) => body || {});
  }

  /**
   * 
   * @param {number} petId 
   * @returns {object}
   */
  static getPetDetailsByPetId(petId) {
    return cy.request({
      url: `${Cypress.env('pet_store_api')}/${petId}`,
      method: 'GET',
      headers: this.getHeaders(),
      failOnStatusCode: false
    }).its('body').then((body) => body || {});
  }

  static addPetDetailsAndReturnPetId() {
    return cy.request({
      url: `${Cypress.env('pet_store_api')}/`,
      method: 'POST',
      headers: this.getHeaders(),
      failOnStatusCode: true,
      body: {
        id: 0,
        category: {
          id: 0,
          name: "string"
        },
        name: "Lambert",
        photoUrls: [
          "string"
        ],
        tags: [
          {
            id: 0,
            name: "string"
          }
        ],
        status: "available"
      },
    }).its('body').then((body) => body.id || 0);
  }

  /**
   * 
   * @param {number} petId 
   * @param {string} name 
   * @param {} status 
   * @returns 
   */
  static updatePetDetails(petId, name, status) {
    return cy.request({
      url: `${Cypress.env('pet_store_api')}/${petId}`,
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'accept': 'application/json'
      },
      failOnStatusCode: true,
      name,
      status
    });
  }

  /**
   * 
   * @param {number} petId 
   */
  static deletePetByPetId(petId) {
    return cy.request({
      url: `${Cypress.env('pet_store_api')}/${petId}`,
      method: 'DELETE',
      headers: this.getHeaders(),
    }).its('body').then((body) => body || {})
  }
}
