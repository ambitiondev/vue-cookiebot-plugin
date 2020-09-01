import { BlockingModeOptions, CookieBotConfig } from '../types/cookiebot'
import ScriptHelper from './script'

export class CookieBot extends ScriptHelper {
    config: CookieBotConfig

    private declarationId: string = 'CookieDeclaration'

    private defaultLocale: string = 'en'

    private dialogId: string = 'CybotCookiebotDialog'

    constructor (config: CookieBotConfig) {
        super()

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

    consentDialog (language: string = this.locale, async: boolean = this.isAsync): void {
        const script = this.createScriptWithOptions([
            {
                name: 'blockingmode',
                value: this.blockingMode
            },
            {
                name: 'cbid',
                value: this.cookieBotID
            },
            {
                name: 'culture',
                value: language
            },
            {
                name: 'data-dialog-id',
                value: this.dialogId
            }
        ], 'https://consent.cookiebot.com/uc.js', async)

        document.body.appendChild(script)
    }

    consentPage (context: HTMLElement, language: string = this.locale, async: boolean = this.isAsync): void {
        if (!context) {
            throw new Error('Context not defined. Aborting...')
        }

        const oldScript = document.getElementById(this.declarationId)

        /**
         * To prevent double execution of script tag, first remove script
         * if exists
         */
        if (oldScript !== null) {
            this.removeScript(context, oldScript)
        }

        const script = this.createScriptWithOptions([
            {
                name: 'culture',
                value: language
            }
        ], `https://consent.cookiebot.com/${this.cookieBotID}/cd.js`, async)

        context.appendChild(script)
    }
}
