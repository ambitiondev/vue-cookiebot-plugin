export type BlockingModeOptions = 'auto' | 'none'

export interface CookieBotConfig {
    async?: boolean;
    blockingMode?: BlockingModeOptions;
    cookieBotID: string;
    defaultLocale?: string;
}

export interface ConsentBaseSettings {
    async?: boolean;
    locale?: string;
}

export interface ConsentPageSettings extends ConsentBaseSettings {
    ref: HTMLElement;
}
