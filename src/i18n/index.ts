import { use } from "i18next";
import { initReactI18next } from "react-i18next";

const initLang = () => {
  use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: {
        en: {
          translation: {
            SignIn: "Sign in",
            EmailAddress: "E-mail address",
            Password: "Password",
            RememberMe: "Remember me",
            ForgotPass: "Forgot password",
            SignUp: "Don't have an account? Sign up!",
            AllRightsReserved: "All Rights Reserved",
            PoweredBy: "Powered by",
            KocaeliUniversity: "Kocaeli University",
          },
        },
        tr: {
          translation: {
            SignIn: "Giriş yap",
            EmailAddress: "E-posta adresi",
            Password: "Şifre",
            RememberMe: "Beni hatırla",
            ForgotPass: "Şifremi unuttum",
            SignUp: "Hesabın yok mu? Kayıt ol!",
            AllRightsReserved: "Tüm hakları saklıdır",
            PoweredBy: "Powered by",
            KocaeliUniversity: "Kocaeli Üniversitesi",
          },
        },
      },
      lng: "tr", // if you're using a language detector, do not define the lng option
      fallbackLng: "tr",
      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
};

export default initLang;
