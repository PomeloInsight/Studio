import difference from 'lodash/difference';

export class i18n {
  static ZH_CN = 'zh-CN';
  static EN = 'en';
  static ZH_TW = 'zh-TW';

  static PACK<T>(languages: { [index: string]: T }, lang = navigator.language) {
    // 检查要打包的语言是否在支持列表中
    if (difference(Object.keys(languages), [i18n.ZH_CN, i18n.ZH_TW, i18n.EN]).length !== 0) {
      throw new Error('Exception language');
    }

    // 检查zh-CN是否存在，zh-CN作为fallback语言
    if (!languages[i18n.ZH_CN]) {
      throw new Error('Missing zh-CN');
    }

    if (languages[lang]) {
      return languages[lang];
    }

    return languages[i18n.ZH_CN];
  }
}
