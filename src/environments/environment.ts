// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDG7NGDg9vtp65HnjjuCyfYJJYuN_Z_AFQ',
    authDomain: 'listings-8a52d.firebaseapp.com',
    databaseURL: 'https://listings-8a52d.firebaseio.com',
    projectId: 'listings-8a52d',
    storageBucket: 'listings-8a52d.appspot.com',
    messagingSenderId: '29741293164'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
