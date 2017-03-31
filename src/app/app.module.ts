import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Conexión a Firebase
import { AngularFireModule } from 'angularfire2';

export const CONFIG = {
  apiKey: "AIzaSyAEIdoxvZ8l7UHEPw4vF73YrBbxwzU-VIs",
  authDomain: "prueba-2a1b3.firebaseapp.com",
  databaseURL: "https://prueba-2a1b3.firebaseio.com",
  projectId: "prueba-2a1b3",
  storageBucket: "prueba-2a1b3.appspot.com",
  messagingSenderId: "57634609830"
}

//Cloud Notification

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const CLOUDSETTINGS: CloudSettings = {
  'core':{
    'app_id': '757d7d97'
  },
  'push': {
    'sender_id': '57634609830',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CONFIG),
    CloudModule.forRoot(CLOUDSETTINGS)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
