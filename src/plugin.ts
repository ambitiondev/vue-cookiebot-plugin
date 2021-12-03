import { PluginFunction, default as VueImport } from 'vue';
import { CookieBotConfig } from '../types/cookiebot'
import { CookieBot } from './cookiebot'

export const install: PluginFunction<CookieBotConfig> = (Vue: typeof VueImport, config?: CookieBotConfig): void => {
    if (config) {
        if (Vue.version >= 3.0) {
            Vue.provide('$cookiebot', new CookieBot(config)
        } else {
            Vue.prototype.$cookiebot = new CookieBot(config)
        }                        
    }
}
