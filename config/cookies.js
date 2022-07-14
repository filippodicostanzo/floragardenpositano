export default {
  cookies: {
    necessary: [
      {
        //if multilanguage
        name: {
          en: 'Default Cookies'
        },
        //else

        //if multilanguage
        description: {
          en: 'Used for cookie control.'
        },
        //else

        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name: 'Google Analitycs',
        //if you don't set identifier, slugified name will be used
        identifier: 'ga',
        //if multilanguage
        description: {
          en: 'Google GTM is ...'
        },
        //else

        initialState: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
        async: true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
        },
        declined: () => {
        }
      }
    ]
  }
}
