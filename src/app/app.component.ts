import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeAppService } from './services/theme-app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
      private statusBar: StatusBar,
    private themeAppService: ThemeAppService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.checkDarkTheme();
    });
  }

  checkDarkTheme() {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    // if ( prefersDark.matches ) {
    //   document.body.classList.toggle( 'dark' );
    //   }
      this.themeAppService.loadThemeService();
  }

}
