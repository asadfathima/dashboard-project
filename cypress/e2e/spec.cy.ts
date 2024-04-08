describe('Dashboard Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:4200/') // Change to match the URL of your app
  })

  it('displays some dashboard data', () => {
    cy.visit('http://localhost:4200/') // Adjust if your dashboard is not the home page
    cy.contains('running') // Adjust based on actual content
  })
})
