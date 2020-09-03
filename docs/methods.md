# Vue Plugin Cookiebot: available methods

## blockingMode

Returns blockingMode

### usage:

```
  this.$cookiebot.blockingMode
```

## cookieBotID

Returns cookieBotID

### usage:

```
  this.$cookiebot.cookieBotID
```

## isAsync

Returns wether or not the scripts are going to be loaded asynchronously

### usage:

```
  this.$cookiebot.isAsync
```

## locale

Returns the default locale or 'en' if not set

### usage:

```
  this.$cookiebot.locale
```

### consentBanner

Appends the needed scripts for displaying the consent banner. Tip: use with [vue-i18n](https://github.com/kazupon/vue-i18n)

### params

| Param  | Type | Default | Required |
| ------ | ---- | ------- | -------- |
| async | boolean | this.$cookiebot.isAsync | no |
| language | string | this.$cookiebot.locale | no |

### usage:

```
  <script>
    export default {
      name: 'MyVueComponent',
      mounted () {
        this.$cookiebot.consentBanner({
          async: true,
          language: 'en' // tip: replace 'en' with this.$i18n.locale when using vue-i18n
        })
      }
    }
  </script>
```

### consentPage

Appends the needed scripts for displaying the consent page content. Tip: use with [vue-i18n](https://github.com/kazupon/vue-i18n)

### params

| Param  | Type | Default | Required |
| ------ | ---- | ------- | -------- |
| async | boolean | this.$cookiebot.isAsync | no |
| language | string | this.$cookiebot.locale | no |
| ref | HTMLVueElement | none | yes |

### usage:

```
  <template>
    <div ref="consent"></div>
  </template>

  <script>
    export default {
      name: 'MyVueComponent',
      mounted () {
        this.$cookiebot.consentPage({
          async: true,
          language: 'en', // tip: replace 'en' with this.$i18n.locale when using vue-i18n
          ref: this.$refs.consent // Must be a Vue ref
        })
      }
    }
  </script>
```
