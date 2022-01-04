# My resumé:

This is my personal resumé website built as a Static Site with [Next.js](https://vercel.com/solutions/nextjs), [React](https://reactjs.org) with content from [Contentful](https://www.contentful.com) tested with [Cypress](https://www.cypress.io), measured with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), built with [GitHub actions](https://github.com/features/actions) and deployed on [Netlify](https://www.netlify.com). Available on [www.thecuriousdeveloper.com](https://www.thecuriousdeveloper.com).

## Get started

### Local dev

`$ yarn dev`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production build

`yarn build`

Builds the app for production.

### Workflow

Please note that this is far over-engineered for such as simple site - but there purpose has been to try out different workflows and how things and tasks can be automated to create a safe way of shipping features somewhat continously to production.

- Deployments to production and development environment are automated and performed by GitHub actions
- **main** branch represents what is currently live at https://www.thecuriousdeveloper.com
- Feature branches are created from **develop** branch
- When feature branch is done create a PR to merge it to **develop** branch
  - GitHub actions to run Smoke tests and Google Lighthouse tests
  - TODO: Spin up feature specific environment on Netlify
- When PR is approved merge to **develop** branch
  - GitHub action deploys **develop** to https://perjansson-dev.netlify.app
- When **develop** is ready to go live it can be merged to **main**
  - GitHub action deploys **main** to https://perjansson-staging.netlify.app
- To go live create a new release, and a new tag, at GitHub https://github.com/perjansson/perjansson.github.io-v3/releases/new
- The rollback procedure is to pick and old tag at GitHub releases page and publish that version.

### Task management

GitHub projects is used to track tasks and manage features: https://github.com/perjansson/perjansson.github.io-v3/projects/1
