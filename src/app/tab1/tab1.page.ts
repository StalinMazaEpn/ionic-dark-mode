import { Component, OnInit } from '@angular/core';
import { ThemeAppService } from '../services/theme-app.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

    darkMode = false;

    constructor(
        private themeAppService: ThemeAppService
    ) {
    }

    async ngOnInit() {
        this.darkMode = await this.themeAppService.getThemeLS();
        // console.log('theme_is_dark_initial', this.darkMode);
    }

    async changeTheme(event: any) {
        // console.log('event', event.detail.checked);
        // this.darkMode = !this.darkMode;
        // console.log('theme_is_dark', this.darkMode);
        this.themeAppService.switchTheme();
        await this.themeAppService.saveThemeLS(this.darkMode);
    }

}
