import { BlockingModeOptions, CookieBotConfig } from '../types/cookiebot'
import ScriptHelper from './script'

export class CookieBot {
    config: CookieBotConfig

    private declarationId: string = 'CookieDeclaration'

    private defaultLocale: string = 'en'

    private dialogId: string = 'CybotCookiebotDialog'

    private scriptHelper = new ScriptHelper()

    constructor (config: CookieBotConfig) {
        this.config = config
    }

    get blockingMode (): BlockingModeOptions {
        return this.config.blockingMode ? this.config.blockingMode : 'auto'
    }

    get cookieBotID (): string {
        return this.config.cookieBotID
    }

    get isAsync (): boolean {
        return this.config.async ? this.config.async : false
    }

    get locale (): string {
        return this.config.defaultLocale ? this.config.defaultLocale : this.defaultLocale
    }

    async consentDialog (language: string = this.locale, async: boolean = this.isAsync): Promise<void> {
        const script = await this.scriptHelper.createScriptWithOptions([
            {
                name: 'data-blockingmode',
                value: this.blockingMode
            },
            {
                name: 'data-cbid',
                value: this.cookieBotID
            },
            {
                name: 'data-culture',
                value: language
            },
            {
                name: 'data-dialog-id',
                value: this.dialogId
            }
        ], 'https://consent.cookiebot.com/uc.js', async)

        document.body.appendChild(script)
    }

    async consentPage (context: HTMLElement, language: string = this.locale, async: boolean = this.isAsync): Promise<void> {
        if (!context) {
            throw new Error('Context not defined. Aborting...')
        }

        const oldScript = document.getElementById(this.declarationId)

        /**
         * To prevent double execution of script tag, first remove script
         * if exists
         */
        if (oldScript !== null) {
            this.scriptHelper.removeScript(context, oldScript)
        }

        const script = await this.scriptHelper.createScriptWithOptions([
            {
                name: 'data-culture',
                value: language
            }
        ], `https://consent.cookiebot.com/${this.cookieBotID}/cd.js`, async)

        context.appendChild(script)
    }
}
