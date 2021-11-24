import { use } from "i18next"
import { initReactI18next } from "react-i18next"

const initLang = () => {
  use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: {
        tr: {
          translation: {
            SignIn: "Giriş yap",
            Copyright: "Copyright",
            AllRightsReserved: "Her hakkı saklıdır.",
            PoweredBy: "Powered by",
            EmailAddress: "E-posta adresi",
            Password: "Şifre",
            RememberMe: "Beni hatırla",
            Login: "GİRİŞ",
            ForgotPassword: "Şifremi unuttum",
            NoAccountSignUp: "Hesabın yok mu? Kayıt ol!",
            EmailRequired: "E-posta adresi girmek zorunludur.",
            PasswordRequired: "Şifre girmek zorunludur.",
            Dashboard: "Anasayfa",
            About: "Biz kimiz?",
            Vision: "Ne yapıyoruz?",
            Committees: "Komitemiz",
            KocaeliUniversity: "IEEE Kocaeli Üniversitesi",
            Logout: "ÇIKIŞ YAP"
          }
        },
        en: {
          translation: {
            SignIn: "Sign in",
            Copyright: "Copyright",
            AllRightsReserved: "All rights reserved.",
            PoweredBy: "Powered by",
            EmailAddress: "E-mail address",
            Password: "Password",
            RememberMe: "Remember me",
            Login: "LOGIN",
            ForgotPassword: "Forgot password",
            NoAccountSignUp: "Don't have an account? Sign up!",
            EmailRequired: "E-mail required.",
            PasswordRequired: "Password required.",
            Dashboard: "Home",
            About: "Who we are?",
            Vision: "What we do?",
            Committees: "Committees",
            KocaeliUniversity: "IEEE Kocaeli University",
            Logout: "LOG OUT"
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
