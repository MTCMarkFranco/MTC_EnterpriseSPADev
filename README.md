
# Angular (6) - Shopping Basket Example



Based on https://github.com/jonsamwell/angular-simple-shopping-cart

# Overview

* Cloned and modified to make the application Azure App Service friendly.
* Hackathon attendees will start from the public repository located here:          
* https://github.com/jonsamwell/angular-simple-shopping-cart
* This codebase is the end result to work with Azure Web App Services for Windows, Linux via Docker Containers

# Architectural Summary

* Angular 6 application (scaffolded with angular-cli)
* Built around RxJS Observables
* One way data flow and events based processing
* Immutable shopping cart to increase performance by enabling the OnPush change detention strategy that drastically reduces the change subtree Angular needs to process.
* Unit tested via Karma and Jasmine.
* SinonJS used for test mocking.
* Minimal styling with Foundation CSS used as the base framework and SCSS used to process custom styles.
* Basic example of async e2e test using new (async/await) Typescript syntax.
* Azure App Services Modifications required to host SPA type Web Apps.
* VSTS Integration using Git
* COSMOS DB-->Document DB integration with Azure Functions

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

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
