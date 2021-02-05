describe('blackcat', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));

  it('should render the component', () => {
    cy.get('codingcatdev-root').should('exist');
  });
});
