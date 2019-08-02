// sometimes it's impossible to use html tags to style coin name, hence usage of _UPPERCASE modifier
export const APP_NAME = 'Smoke';
// sometimes APP_NAME is written in non-latin characters, but they are needed for technical purposes
export const APP_NAME_LATIN = 'Smoke';
export const APP_NAME_UPPERCASE = 'SMOKE';
export const APP_ICON = 'smoke';
// FIXME figure out best way to do this on both client and server from env
// vars. client should read $STM_Config, server should read config package.
export const APP_DOMAIN = 'smoke.io';
export const LIQUID_TOKEN = 'SMOKE';
// sometimes it's impossible to use html tags to style coin name, hence usage of _UPPERCASE modifier
export const LIQUID_TOKEN_UPPERCASE = 'SMOKE';
export const VESTING_TOKEN = 'SMOKE POWER';
export const INVEST_TOKEN_UPPERCASE = 'SMOKE POWER';
export const CURRENCY_SIGN = '$';
export const LANDING_PAGE_URL = 'https://smoke.io/';
export const TERMS_OF_SERVICE_URL = 'https://' + APP_DOMAIN + '/tos.html';
export const PRIVACY_POLICY_URL = 'https://' + APP_DOMAIN + '/privacy.html';

// these are dealing with asset types, not displaying to client, rather sending data over websocket
export const LIQUID_TICKER = 'SMOKE';
export const VEST_TICKER = 'VESTS';

// application settings
export const DEFAULT_LANGUAGE = 'en'; // used on application internationalization bootstrap
export const DEFAULT_CURRENCY = 'USD';
export const ALLOWED_CURRENCIES = ['USD'];
export const FRACTION_DIGITS = 2; // default amount of decimal digits
export const FRACTION_DIGITS_MARKET = 3; // accurate amount of deciaml digits (example: used in market)

// meta info
export const TWITTER_HANDLE = '@smoke_io';
export const SHARE_IMAGE = 'https://' + APP_DOMAIN + '/images/smoke-share.png';
export const TWITTER_SHARE_IMAGE = 'https://' + APP_DOMAIN + '/images/smoke-twshare.png';
export const SITE_DESCRIPTION = 'Smoke is a social media platform where everyone gets paid';

// various
export const SUPPORT_EMAIL = 'support@' + APP_DOMAIN;
