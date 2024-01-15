# Welcome to "Sushi Photos"

"Sushi Photos" is a Single Page Application (SPA) that displays [**user**](https://jsonplaceholder.typicode.com/users/), [**album**](https://jsonplaceholder.typicode.com/albums/) and [**photo**](https://jsonplaceholder.typicode.com/photos/) information obtained from [**JSONPlaceholder**](https://jsonplaceholder.typicode.com/).

To display the information for each section, the "Sushi Photos" application uses three different microfrontends:

- sushi-microfrontend-users. [**(link to repo)**](https://github.com/OscarGimenez/sushi-microfrontend-users/)
  ![Users](http://sushi-microfrontend-app.s3-website.eu-west-3.amazonaws.com/users.png)
- sushi-microfrontend-albums. [**(link to repo)**](https://github.com/OscarGimenez/sushi-microfrontend-albums/):
  ![Albums](http://sushi-microfrontend-app.s3-website.eu-west-3.amazonaws.com/albums.png)
- sushi-microfrontend-photos. [**(link to repo)**](https://github.com/OscarGimenez/sushi-microfrontend-photos/):
  ![Photos](http://sushi-microfrontend-app.s3-website.eu-west-3.amazonaws.com/photos.png)

These microfrontends are displayed within this application, which acts as a container.

## 🎆 Demo

You can view the application deployed in AWS by clicking 👉🏻 [**here**](http://sushi-microfrontend-app.s3-website.eu-west-3.amazonaws.com/).

## 🖥️ Technologies

- [**React**](https://reactjs.org/): JavaScript library for building user interfaces.
- [**TypeScript**](https://www.typescriptlang.org/): Superset of JavaScript that adds static typing.
- [**React Router**](https://reactrouter.com/en/main): Routing for React Applications.
- [**React Window**](https://github.com/bvaughn/react-window): Virtualization for larger data sets.
- [**Webpack**](https://webpack.js.org/): Module bundler for modern JavaScript applications.
- [**Tailwind CSS**](https://tailwindcss.com/): Utility-first CSS framework for quickly building custom designs.
- [**Jest**](https://jestjs.io/) and [**Cypress**](https://www.cypress.io/): Testing tools for unit and end-to-end testing, respectively.
- [**Husky**](https://github.com/typicode/husky/): Tool that allows to run Git Hooks in a more friendly way.
- [**ESLint**](https://eslint.org/) and [**Prettier**](https://prettier.io/): Tools for ensuring code quality and consistency.

## ✨ Features

#### Visualization of data

In each section, you can find a table with information about users, albums, or photos.

#### Downloading information for a specific user, album or photo

In each section, you can download (in .csv or .json) the information of a row.

#### Different datasources

You can choose from this four different datasources:

1. **JSONPlaceholder:** This is the result returned by the JSONPlaceholder API. <b>Bonus!</b> If you are viewing the application from sushi-microfrontend-app (shell application), the global caching system will be used.
2. **Static Values:** They are hardcoded values directly in the application.
3. **Empty Database:** It's a (fake) empty database... You won't find any information here.
4. **Broken Database:** It's a (fake) broken database... so you should expect to encounter an error!

#### Error handling

In addition to the usual error handling (for example, the broken database), there is an ErrorBoundary that captures any unexpected error, maintaining the stability of the application.

#### Cache System

The cache is implemented solely in the shell application. The microfrontends do not have their own caching system. Only calls to JSONPlaceholder are cached.

##### When is the cache loaded?

The first time you request the list (users, albums or photos)

##### How long does the cache last?

It is limited to 10 seconds to quickly evaluate its result and empty it.

##### How can I see if the list is returned from the cache?

To observe how this system works in real-time, you can check your browser's console. There, you will find information indicating whether it has been returned from the original source or from the cache.

#### Virtualized table

The sushi-microfrontend-photos app loads a lot of information from JSONPlaceholder, so this microfrontend includes a virtualized table system with <code>react-window</code> that allows rendering only a small portion of the data, which improves the performance of the application.

## 🎯 Main Objective

The primary objective of this application is to use the Microfrontend Architecture to achieve a modular and technology-agnostic website. Also, it separates the code of the remote applications to achieve greater independence for each developer team.

## 🏛️ Architecture Decisions

### Microfrontend Architecture

#### Monorepo vs Multirepo

To make a decision between a monorepo and a multirepo, you need to have a clear understanding of some considerations, which are summarized well in this text from [Jason Jean](https://blog.nrwl.io/monorepos-and-react-microfrontends-a-perfect-match-d49dca64489a/):

---

Dividing a single complex application into multiple microfrontends comes with many advantages:

- Operating a single simple microfrontend without the overhead of operating a complex application
- Deploying new features at different rates for different parts of the application
- Providing a way for different teams to own different parts of the application
- Providing a way for teams to choose a set of technologies that suit the purpose of a microfrontend and the expertise of the team

Operating a collection of microfrontends has some disadvantages as well.

- Making a change across the entire application involves making changes to many microfrontends done by multiple teams
- Switching between teams and projects is difficult due to inconsistencies in dependencies, tooling, and standards between microfrontends
- Adding new microfrontends requires setting up a build process, testing, and deployment
- Sharing common functionality between different microfrontends requires a non-trivial solution

---

While it's entirely feasible to have a microfrontend-based architecture with a single repository, I've made the decision to have multiple repositories for the purpose of emulating the real-world scenario of having multiple independent teams developing a large-scale application, even though it may have a greater integration workload between all the applications.

In this way, in this project, you can find four indicated repositories (this repository and the three mentioned in the introduction of this text), thus imagining that each team has full control of their repository and operates independently from the integration with the complete application.

#### Build process

After considering different ways to build the microfrontends structure, I discarded [**Lerna**](https://lerna.js.org/) due to it being a Monorepo and opted for [**Webpack Module Federation**](https://webpack.js.org/concepts/module-federation/) instead of [**Single-SPA**](https://single-spa.js.org/) because of its ease of code sharing between modules and the reliability of the Webpack development team.

### Remote applications <sub><sup>(sushi-microfrontend-users, sushi-microfrontend-albums & sushi-microfrontend-photos)</sup></sub>

For simplicity, the three microfrontends follow the same architectural concept.

They are based on [**Clean Architecture**](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) and [**Hexagonal Architecture**](<https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)>) while applying [**SOLID principles**](https://en.wikipedia.org/wiki/SOLID).

The reason for choosing these concepts is that they align very well with the concept of microfrontends architecture, as working in this way reduces the integration effort with external systems, thus facilitating the abstraction of these microfrontends.

The concept of ports and adapters can be visualized in the application when using the functionalities of changing the datasource or the method of downloading table information, as well as the different actors that can interact with the application:
<sub>(In the image: sushi-microfrontend-users)</sub>
![Hexagonal](http://sushi-microfrontend-app.s3-website.eu-west-3.amazonaws.com/hexagonal.png)

If we focus on sushi-microfrontend-users, we can find two use cases: List Users and Download Users, while <code>dataDownload</code> and <code>dataSource</code> are two ports with different implementations: <code>dataDownload</code> implements the solution for CSV and JSON, while <code>dataSource</code> serves different data sources, which are explained in the upper [Features](##Features) section.

### Shell application <sub><sup>(sushi-microfrontend-app)</sup></sub>

This Shell application is a simple app that includes the other microfrontends to achieve the visualization of the final application, and it also includes the global caching system. Otherwise, it follows the same structure as the previous microfrontends.

### Microfrontends Project Folder Structure

In the case of microfrontends, the structure of src/ is established as follows:

1. **Domain:**

- ./src/domain/models: Interfaces for domain models.
- ./src/domain/ports: Driver ports used by the application layer.
- ./src/domain/types: Other Typescript types.

2. **Application:**

- ./src/application/\<use-case>: It contains the use case that impacts a data model and the corresponding unit test.

3. **Infrastructure:**

- ./src/infrastructure/\<driven-port>: It contains specific implementations for each of the external systems (adapters).

4. **UI:**

- ./src/ui: It contains the files for the UI of the React application.

### Shell App Project Folder Structure

In the case of sushi-microfrontend-app, the structure of src/ is established as follows:

1. **Domain:**

- ./src/domain/models: Interfaces for domain models.
- ./src/domain/types: Other Typescript types.

2. **Routes:**

- ./src/routes: It contains the routing of the application.

3. **UI:**

- ./src/ui: It contains the files for the UI of the React application.
- ./src/ui/modules: It contains the files for each page (section) of the app.

## 💡 Run in local environment

To run the application on your local machine, you just need to clone the four repositories and execute the following commands in each of them:
<code>npm i</code> (Install dependencies)
<code>npm run dev</code> (Runs the application in the port indicated in webpack config)

## 🚀 Deploy in production

Para obtener el bundle que puedes usar en producción, puedes ejecutar este comando en cada microfrontend y en la aplicación shell:
<code>npm run build</code>

## 🚦 Tests

Each microfrontend has a series of tests, including a unit test for each functionality and a set of end-to-end tests in Cypress.

To run the tests, you can navigate to the root of each microfrontend and execute:
<code>npm run test-jest</code> (Unit testing with Jest)

<code>npm run test-cypress</code> (E2E Test with Cypress)

<code>npm run test-all</code> (Run all tests)

### 🐶 Husky (git-hooks)

This project uses Husky to get benefit of the following hooks:
<b>commit-msg</b>: for Commitlint
<b>pre-commit</b>: To check linter errors
<b>pre-push</b>: To run Jest Tests
