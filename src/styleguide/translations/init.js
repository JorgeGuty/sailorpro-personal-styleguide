import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import es from "./es.json"
import en from "./en.json"

const resources = {
	en: { translation: en },
	es: { translation: es }
}

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "es",
		resources,
		keySeparator: false,
		interpolation: {
			escapeValue: false
		}
	})

export default i18n
