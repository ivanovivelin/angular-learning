// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA5_j1wX-uyz1MJCa5MnAOO08F1EVrca3A',
    authDomain: 'dorex-prod.firebaseapp.com',
    databaseURL: 'https://dorex-prod.firebaseio.com',
    projectId: 'dorex-prod',
    storageBucket: 'dorex-prod.appspot.com',
    messagingSenderId: '342130392500'
  }
};
