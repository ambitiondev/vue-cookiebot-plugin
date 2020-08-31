export type BlockingModeOptions = 'auto' | 'none'

export interface CookieBotConfig {
    async?: boolean;
    blockingMode?: BlockingModeOptions;
    cookieBotID: string;
    defaultLocale?: string;
    targetRef: string;
}
