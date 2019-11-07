import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

const THEME_KEY = 'THEME_USER';

@Injectable({
    providedIn: 'root'
})
export class ThemeAppService {

    constructor(
        private storage: Storage
    ) {
    }
    
    loadThemeService() {
        this.storage.ready().then(async () => {
            const theme_is_dark = await this.getThemeLS();
            this.setInitialTheme(theme_is_dark);
        });
    }

    async getThemeLS(): Promise<boolean> {
        const theme = await this.storage.get(THEME_KEY);
        return !!theme;
    }

    switchTheme() {
        document.body.classList.toggle( 'dark' );
    }

    setInitialTheme(theme_dark: boolean) {
        if (theme_dark) {
            // console.error('añadir clase dark');
            document.body.classList.add('dark');
        } else {
            // console.error('añadir remove dark');
            document.body.classList.remove('dark');
        }
    }

    async saveThemeLS(theme_is_dark: boolean) {
        await this.storage.set(THEME_KEY, theme_is_dark);
    }
}
