import PetStoreAPI from '../api-requests/petHandler.js';

context('api tests> petstore', () => {
  const petStatus = 'available';

  // get available pets and fetch details - use existing pet id 
  // need to run only once - before running any tests 
  before(() => {
    PetStoreAPI.getPetIdByStatus(petStatus).then((petId) => {
      cy.wrap(petId).as('petId');
    });
  });

  it('get pet details by pet id - valid petId', function () {
    PetStoreAPI.getPetDetailsByPetId(this.petId).then((petDetails) => {
      // I have tied validating the name as  expect(petDetails.name).to.be.eq('doggie'); 
      // this fails as sometimes it returns pet with different name for same petId, so we chech that it is not empty
      expect((typeof petDetails.name)).to.be.not.eq('undefined');
      expect(petDetails.name).to.be.not.eq('');
      expect(petDetails.status).to.be.eq(petStatus);
      assert.isNotEmpty(petDetails.category);
      assert.isNotEmpty(petDetails.tags);
      assert.isNotEmpty(petDetails.photoUrls);
      cy.log(`petdetails: petId:${petDetails.id}, name:${petDetails.name}, status:${petDetails.status}`);
    })
  });

  it('get pet details by pet id - invalid petId', function () {
    PetStoreAPI.getPetDetailsByPetId(2222).then((response) => {
      expect(response.code).to.be.eq(1);
      expect(response.type).to.be.eq('error');
      expect(response.message).to.be.eq('Pet not found');
      cy.log(`response is code:${response.code}, type: ${response.type}, message: ${response.message}`)
    })
  });

  it('update pet details by pet id > delete pet > verify pet is not found', () => {
    // add a pet so that we can update its details and then delete it later
    PetStoreAPI.addPetDetailsAndReturnPetId().then((petId) => {
      PetStoreAPI.updatePetDetails(petId, 'leo', petStatus);
      PetStoreAPI.getPetDetailsByPetId(petId).then((petDetails) => {
        expect(petDetails.id).to.be.eq(petId);
        expect(petDetails.name).to.be.not.eq('');
        expect(petDetails.status).to.be.eq(petStatus);
        assert.isNotEmpty(petDetails.category);
        assert.isNotEmpty(petDetails.tags);
        assert.isNotEmpty(petDetails.photoUrls);
        PetStoreAPI.deletePetByPetId(petId).then((response) => {
          expect(response.code).to.be.eq(200);
        });
        PetStoreAPI.getPetDetailsByPetId(petId).then((response) => {
          expect(response.code).to.be.eq(404);
        });
      });
    });
  });
});
