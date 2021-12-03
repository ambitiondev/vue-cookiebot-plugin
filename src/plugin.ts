import { PluginFunction, default as VueImport } from 'vue';
import { CookieBotConfig } from '../types/cookiebot'
import { CookieBot } from './cookiebot'

export const install: PluginFunction<CookieBotConfig> = (Vue: typeof VueImport, config?: CookieBotConfig): void => {
    if (!config) return
    if (Vue.version >= "3.0") {
        // @ts-ignore
        Vue.provide('$cookiebot', new CookieBot(config))
      } else {
         Vue.prototype.$cookiebot = new CookieBot(config)
      }
};
