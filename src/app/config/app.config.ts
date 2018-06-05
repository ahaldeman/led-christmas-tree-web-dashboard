import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
    routes: {
        modes: 'modes',
        error404: '404'
    },
    endpoints: {
        modes: 'http://192.168.4.1/mode'
    }
};