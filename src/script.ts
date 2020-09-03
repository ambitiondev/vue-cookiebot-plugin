import { ScriptOption, ScriptOptions } from '../types/script'

class ScriptHelper {
    private scriptType: string = 'text/javascript'

    async createScriptWithOptions (options: ScriptOptions, src: string, async: boolean): Promise<HTMLElement> {
        const script: HTMLScriptElement | any = document.createElement('script')

        script.src = src
        script.type = this.scriptType
        script.async = async

        await Promise.all(options.map((option: ScriptOption) => {
            return script.setAttribute(option.name, option.value)
        }))

        return script
    }

    removeScript (context: HTMLElement, script: HTMLElement, resetHTML: boolean = false): void {
        if (script !== null) {
            context.removeChild(script)
        }

        if (resetHTML === true) {
            context.innerHTML = ''
        }
    }
}

export default ScriptHelper
