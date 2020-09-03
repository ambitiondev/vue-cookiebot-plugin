# Vue Plugin Cookiebot: installation reference

## Basic install

```
  import Vue from 'vue'
  ...
  import VueCookieBot from '@ambitiondev/vue-cookiebot-plugin'

  Vue.use(VueCookieBot, {
    cookieBotID: 'insert your cookiebot ID here'
  })

  const app = new Vue({
    ...
  })
```

## Install options

| Option | Mandatory | Type | Description | Default |
| ------ | --------- | ---- | ----------- | ------- |
| async | no | boolean | Defines wether or not the script is going to be loaded asynchronously (can be overridden in later functions) | false |
| blockingMode | no | 'auto' \| 'none' | Defines if Cookiebot should automatically block all cookies until a user has consented. [See official Cookiebot docs](https://www.cookiebot.com/en/developer/) | 'auto' |
| cookieBotID | yes | string | Set your Cookiebot ID, so it loads your Cookiebot account | '' |
| defaultLocale | no | string | Set default language for Cookiebot banners / consent pages | 'en' |
