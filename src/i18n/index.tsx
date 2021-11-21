import React from "react"
import ReactDOM from "react-dom"
import i18n from "i18next"
import { useTranslation, initReactI18next } from "react-i18next"

const initLang = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: {
        tr: {
          translation: {
            SignIn: "Giriş yap",
            Copyright: "Copyright",
            AllRightsReserved: "Her haklı saklıdır",
            PoweredBy: "Powered by"
          }
        },
        en: {
          translation: {
            SignIn: "Sign in",
            Copyright: "Copyright",
            AllRightsReserved: "All Rights Reserved",
            PoweredBy: "Powered by"
          }
        }
      },
      lng: "tr", // if you're using a language detector, do not define the lng option
      fallbackLng: "tr",
      interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      }
    })
}

export default initLang
