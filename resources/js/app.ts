import '../css/app.css';

// 1. Import PrimeVue and the Theme Preset
import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            // 2. Correctly chain PrimeVue BEFORE mounting
            .use(PrimeVue, {
                theme: {
                    preset: Aura,
                },
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
