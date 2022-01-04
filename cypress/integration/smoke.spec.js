const contacts = [
  'Medium',
  'GitHub',
  'LinkedIn',
  'Stack Overflow',
  'Twitter',
  'Instagram',
  'Facebook',
]

const projects = [
  'ID solution & marketing website',
  'Wi-Fi Connectivity Platform',
  'New Internet Bank',
]

describe('Smoke test', () => {
  it('works', () => {
    cy.visit('http://localhost:5000')

    cy.get('body').contains('Per')
    cy.get('body').contains('Fullstack Web Developer')

    contacts.forEach((contact) => {
      cy.get('[data-cy=social-media]').contains(contact)
    })

    cy.get('[data-cy=projects]').scrollIntoView()
    cy.get('[data-cy=projects]').contains(projects[0])
    cy.scrollTo((0, 500), { duration: 500 })
    cy.get('[data-cy=projects]').contains(projects[1])
    cy.scrollTo('bottom', { duration: 500 })
    cy.get('[data-cy=projects]').contains(projects[projects.length - 1])
  })
})
