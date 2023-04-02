import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { messages } from './langagues'

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    debug: false,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    },
    ns: ['translation'],
    resources: messages
  });

export default i18n;