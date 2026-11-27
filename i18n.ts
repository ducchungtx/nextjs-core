import Cookies from 'universal-cookie';

import en from './public/locales/en.json';
import vi from './public/locales/vi.json';
const langObj: Record<string, Record<string, string>> = { en, vi };

const getLang = (): string | null => {
    if (typeof window === 'undefined') {
        return null;
    }
    const cookies = new Cookies(null, { path: '/' });
    return cookies.get('i18nextLng') ?? null;
};

export const getTranslation = () => {
    const lang = getLang();
    const data: Record<string, string> = langObj[lang || 'en'] ?? en;

    const t = (key: string) => {
        return data[key] ? data[key] : key;
    };

    const initLocale = (themeLocale: string) => {
        const currentLang = getLang();
        i18n.changeLanguage(currentLang || themeLocale);
    };

    const i18n = {
        language: lang,
        changeLanguage: (nextLang: string) => {
            if (typeof window === 'undefined') {
                return;
            }
            const cookies = new Cookies(null, { path: '/' });
            cookies.set('i18nextLng', nextLang);
        },
    };

    return { t, i18n, initLocale };
};
