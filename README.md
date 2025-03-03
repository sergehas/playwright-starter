# Playwright Starter

This project was generated with [Playwright CLI](https://playwright.dev/docs/intro#installing-playwright) version 1.50.

## build

super basic `node.js` app setup :

```shell
npm i
```

Optionally, you may want to install locally test browser : see [Install browsers](https://playwright.dev/docs/browsers#install-browsers)

> in a nutshell, run `npx playwright install`

## Development server

The sample tests are base on app available in this [GitHub Repo](https://github.com/sergehas/angular-16-material-demos)

## end-to-end tests

### Recording e2e test

#### Local development

If you whish to recode a test against the local development app, you need to start the app. in a dedicated console (as usual)

```shell
npm start
```

by default, the app is accessible at <http://localhost:4200>

#### Recording a test

Adapt the `url` of the following command, according to where the app is accessible.

```shell
npx playwright codegen http://localhost:4200
```

> alternatively, run `npm run record http://localhost:4200`

Of course, adapt the `url` to correspond to where the app you want to test is running.

then, follow [Recording a test](https://playwright.dev/docs/codegen#recording-a-test) official doc.

Once you test is recorded, add teh source code to a new or existing to a TypeScript file in `e2e` folder (or subfolder)

### Running e2e tests

In this context, the app **must** be started. For local startup, see [Local development](#local-development)

To execute the end-to-end tests on all configured browsers, run

```shell
npx playwright test
```

> alternatively, run `npm run e2e`

The tests are run on teh browser(s) defined in `playwright.config.ts` configuration file (`projects` attribute)

then, to display the test report

```shell
npx playwright show-report
```

> alternatively, run `npm run report`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## links

- playwright documentation <https://playwright.dev/docs/intro>
