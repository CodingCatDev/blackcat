describe('kitten', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary'));

  it('should render the component', () => {
    cy.get('codingcatdev-button').should('exist');
  });
});
