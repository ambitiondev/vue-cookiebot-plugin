import { BlockingModeOptions, CookieBotConfig } from '../types/cookiebot'

export class CookieBot {
    config: CookieBotConfig

    private declarationId: string = 'CookieDeclaration'

    private defaultLocale: string = 'en'

    private dialogId: string = 'CybotCookiebotDialog'

    private scriptType: string = 'text/javascript'

    constructor (config: CookieBotConfig) {
        this.config = config
    }

    get blockingMode (): BlockingModeOptions {
        return this.config.blockingMode ? this.config.blockingMode : 'auto'
    }

    get cookieBotId (): string {
        return this.config.cookieBotID
    }

    get isAsync (): boolean {
        return this.config.async ? this.config.async : false
    }

    get locale (): string {
        return this.config.defaultLocale ? this.config.defaultLocale : this.defaultLocale
    }
}
