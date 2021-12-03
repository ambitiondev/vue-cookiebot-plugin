# Vue Cookiebot Plugin

![version](https://img.shields.io/npm/v/@nafia123/vue-3-cookiebot-plugin/latest.svg) ![version](https://img.shields.io/npm/l/@nafia123/vue-3-cookiebot-plugin)

This vue plugin allows you to (dynamically) set up your Cookiebot implementation and load the consent banner and consent page on demand

## Installation

1. Install module: `npm i @nafia123/vue-3-cookiebot-plugin --save` or `yarn add @nafia123/vue-3-cookiebot-plugin`
2. Go to the main JS-file of your Vue app and add the following:
```
  import Vue from 'vue'
  ...
  import VueCookieBot from '@nafia123/vue-3-cookiebot-plugin'

  Vue.use(VueCookieBot, {
    cookieBotID: 'insert your cookiebot ID here'
  })

  const app = new Vue({
    ...
  })
```

### 3.1 Vue 2  
The variable `$cookiebot` has been added to the Vue instance. You can trigger the consent banner where you'd like by executing:
```
  <script>
    export default {
      name: 'MyVueComponent',
      mounted () {
        this.$cookiebot.consentBanner()
      }
    }
  </script>
```

### 3.2 Vue 3 
The variable `$cookiebot` can now be injected. You can trigger the consent banner where you'd like by executing after defining a `$cookiebot` variable:
See [Provide/ Inject](https://v3.vuejs.org/guide/component-provide-inject.html) for more information about Provide/ Inject API

```
  <script>
    setup() {
      const $cookiebot = inject('$cookiebot');
    }
    export default {
      name: 'MyVueComponent',
      mounted () {
        this.$cookiebot.consentBanner()
      }
    }
  </script>
```
## Documentation / API reference

For the full API reference regarding the Vue Plugin install method, see [the Vue plugin install docs](docs/install.md)

For a list of available methods and properties on the `$cookiebot` instance, see [the Vue plugin methods docs](docs/methods.md)
