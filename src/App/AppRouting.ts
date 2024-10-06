import { Router } from '@statik-js/Router';

import { App } from './App';

export function AppRouting(): void {
    Router.register([
        { path: '/', component: App }
    ]);
}
