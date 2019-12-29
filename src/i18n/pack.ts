import jsCookie from 'js-cookie';

const LANG_ZH_CN = 'zhCN';
const LANG_EN = 'en';

type LANG_TYPE = 'zhCN' | 'en';

// tslint:disable-next-line:no-backbone-get-set-outside-model
const userLang = jsCookie.get('lang') || LANG_ZH_CN;

function pack<T>(zhCN: T, en: T) {
  const i18nMap = {
    [LANG_ZH_CN]: zhCN,
    [LANG_EN]: en,
  };
  return i18nMap[<LANG_TYPE>userLang];
}

export { pack };
