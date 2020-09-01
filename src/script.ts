import { ScriptOption, ScriptOptions } from '../types/script'

class ScriptHelper {
    private scriptType: string = 'text/javascript'

    createScriptWithOptions (options: ScriptOptions, src: string, async: boolean): HTMLElement {
        const script = document.createElement('script')

        script.src = src
        script.type = this.scriptType
        script.async = async

        options.map((option: ScriptOption) => {
            script[option.name] = option.value
        })

        return script
    }

    removeScript (context: HTMLElement, script: HTMLElement): void {
        if (script !== null) {
            context.removeChild(script)
            context.innerHTML = ''
        }
    }
}

export default ScriptHelper
