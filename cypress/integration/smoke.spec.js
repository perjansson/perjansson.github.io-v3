const contacts = [
  'Medium',
  'GitHub',
  'LinkedIn',
  'Stack Overflow',
  'Twitter',
  'Instagram',
  'Facebook',
  'Email',
]

const projects = [
  'Panasonic Avionics Corporation',
  'HBO GO - Smart TV app',
  'Unibet Web for Kindred Group',
  'Mindmend prototype',
  'Insourcing Matchmaking Tool for EY',
  'Digitalization and Advisory Cockpit Tool for Nordea Bank',
  'New Admin web for Leadenhancer',
]

describe('Smoke test', () => {
  it('works', () => {
    cy.visit('http://localhost:5000')

    cy.get('body').contains('Per Jansson')
    cy.get('body').contains('Fullstack Web Developer')

    // cy.get('[data-cy=me').scrollIntoView()
    // cy.get('[data-cy=me]').contains('curious software developer')

    contacts.forEach((contact) => {
      cy.get('[data-cy=social-media]').contains(contact)
    })

    cy.get('[data-cy=projects]').scrollIntoView()
    cy.get('[data-cy=projects]').contains(projects[0])
    cy.scrollTo('bottom', { duration: 500 })
    cy.get('[data-cy=projects]').contains(projects[projects.length - 1])
  })
})
