import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeuix/themes/aura';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes), 
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    cssLayer: false
                }
            }
        })
    ]
};