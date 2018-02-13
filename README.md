
# Angular (4) - Shopping Basket Example



Based on https://jonsamwell.github.io/angular-simple-shopping-cart/

# Overview

* Cloned and modified to make the application Azure App Service friendly.
* Hackathon attendees will start from the public repository located here: https://jonsamwell.github.io/angular-simple-shopping-cart/
* This codebase is the end result to work with Azure Web App Services for Windows, Linux modifications are coming...

# Architectural Summary

* Angular 4 application (scaffolded with angular-cli)
* Built around RxJS Observables
* One way data flow and events based processing
* Immutable shopping cart to increase performance by enabling the OnPush change detention strategy that drastically reduces the change subtree Angular needs to process.
* Unit tested via Karma and Jasmine.
* SinonJS used for test mocking.
* Minimal styling with Foundation CSS used as the base framework and SCSS used to process custom styles.
* Basic example of async e2e test using new (async/await) Typescript syntax.
* Azure App Services Modifications required to host SPA type Web Apps.
* VSTS Integration using Git

# Setup

Install the npm dependencies

```bash
npm install
```

# Build

```bash
npm run build
```

# Run Tests
```bash
npm run test
```

# Run E2E Tests
```bash
npm run e2e
```

# Serve

HTTP development server
```bash
npm run start
```

Then navigate to http://localhost:4200/



HTTPS development server (note: the development certificate will have to be added as a trusted CA)
```bash
npm run start:https
```

Then navigate to https://localhost:4200/
