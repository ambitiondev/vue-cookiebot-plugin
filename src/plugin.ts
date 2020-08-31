import { PluginFunction, default as VueImport } from 'vue';
import { CookieBotConfig } from '../types/cookiebot'
import { CookieBot } from './cookiebot'

export const install: PluginFunction<CookieBotConfig> = (Vue: typeof VueImport, config?: CookieBotConfig): void => {
    Vue.prototype.$cookiebot = new CookieBot(config)

    return console.log('installed cookiebot')
}
