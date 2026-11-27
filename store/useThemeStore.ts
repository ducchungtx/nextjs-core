import { create } from 'zustand';
import themeConfig from '@/theme.config';

export interface LanguageItem {
    code: string;
    name: string;
    flag: string;
}

export interface ThemeConfigState {
    isDarkMode: boolean;
    sidebar: boolean;
    theme: string;
    menu: string;
    layout: string;
    rtlClass: string;
    animation: string;
    navbar: string;
    locale: string;
    semidark: boolean;
    languageList: LanguageItem[];
    toggleTheme: (payload?: string) => void;
    toggleMenu: (payload?: string) => void;
    toggleLayout: (payload?: string) => void;
    toggleRTL: (payload?: string) => void;
    toggleAnimation: (payload?: string) => void;
    toggleNavbar: (payload?: string) => void;
    toggleSemidark: (payload?: boolean | string) => void;
    toggleSidebar: () => void;
    resetToggleSidebar: () => void;
}

export const useThemeStore = create<ThemeConfigState>((set, get) => ({
    isDarkMode: false,
    sidebar: false,
    theme: themeConfig.theme,
    menu: themeConfig.menu,
    layout: themeConfig.layout,
    rtlClass: themeConfig.rtlClass,
    animation: themeConfig.animation,
    navbar: themeConfig.navbar,
    locale: themeConfig.locale,
    semidark: themeConfig.semidark,
    languageList: [
        { code: 'en', name: 'English', flag: 'EN' },
        { code: 'vi', name: 'Tiếng Việt', flag: 'VN' },
    ],
    toggleTheme: (payload) => {
        const theme = payload || get().theme; // light | dark | system
        localStorage.setItem('theme', theme);
        let isDarkMode = get().isDarkMode;

        if (theme === 'light') {
            isDarkMode = false;
        } else if (theme === 'dark') {
            isDarkMode = true;
        } else if (theme === 'system') {
            isDarkMode = Boolean(window.matchMedia?.('(prefers-color-scheme: dark)').matches);
        }

        if (isDarkMode) {
            document.querySelector('body')?.classList.add('dark');
        } else {
            document.querySelector('body')?.classList.remove('dark');
        }

        set({ theme, isDarkMode });
    },
    toggleMenu: (payload) => {
        const menu = payload || get().menu; // vertical, collapsible-vertical, horizontal
        localStorage.setItem('menu', menu);
        set({ menu });
    },
    toggleLayout: (payload) => {
        const layout = payload || get().layout; // full, boxed-layout
        localStorage.setItem('layout', layout);
        set({ layout });
    },
    toggleRTL: (payload) => {
        const rtlClass = payload || get().rtlClass; // rtl, ltr
        localStorage.setItem('rtlClass', rtlClass);
        document.querySelector('html')?.setAttribute('dir', rtlClass || 'ltr');
        set({ rtlClass });
    },
    toggleAnimation: (payload) => {
        const animation = (payload || get().animation)?.trim();
        localStorage.setItem('animation', animation);
        set({ animation });
    },
    toggleNavbar: (payload) => {
        const navbar = payload || get().navbar; // navbar-sticky, navbar-floating, navbar-static
        localStorage.setItem('navbar', navbar);
        set({ navbar });
    },
    toggleSemidark: (payload) => {
        const semidark = payload === true || payload === 'true';
        localStorage.setItem('semidark', String(semidark));
        set({ semidark });
    },
    toggleSidebar: () => {
        set((state) => ({ sidebar: !state.sidebar }));
    },
    resetToggleSidebar: () => {
        set({ sidebar: false });
    },
}));
