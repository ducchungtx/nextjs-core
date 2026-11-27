'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { ConfigProvider, theme as antdTheme } from 'antd';
import Loading from '@/components/layouts/loading';
import { getTranslation } from '@/i18n';

function App({ children }: PropsWithChildren) {
    const theme = useThemeStore((s) => s.theme);
    const menu = useThemeStore((s) => s.menu);
    const layout = useThemeStore((s) => s.layout);
    const rtlClass = useThemeStore((s) => s.rtlClass);
    const animation = useThemeStore((s) => s.animation);
    const navbar = useThemeStore((s) => s.navbar);
    const locale = useThemeStore((s) => s.locale);
    const semidark = useThemeStore((s) => s.semidark);
    const sidebar = useThemeStore((s) => s.sidebar);
    const isDarkMode = useThemeStore((s) => s.isDarkMode);

    const toggleTheme = useThemeStore((s) => s.toggleTheme);
    const toggleMenu = useThemeStore((s) => s.toggleMenu);
    const toggleLayout = useThemeStore((s) => s.toggleLayout);
    const toggleRTL = useThemeStore((s) => s.toggleRTL);
    const toggleAnimation = useThemeStore((s) => s.toggleAnimation);
    const toggleNavbar = useThemeStore((s) => s.toggleNavbar);
    const toggleSemidark = useThemeStore((s) => s.toggleSemidark);

    const { initLocale } = getTranslation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        toggleTheme(localStorage.getItem('theme') || theme);
        toggleMenu(localStorage.getItem('menu') || menu);
        toggleLayout(localStorage.getItem('layout') || layout);
        toggleRTL(localStorage.getItem('rtlClass') || rtlClass);
        toggleAnimation(localStorage.getItem('animation') || animation);
        toggleNavbar(localStorage.getItem('navbar') || navbar);
        toggleSemidark(localStorage.getItem('semidark') || semidark);
        // locale
        initLocale(locale);

        setIsLoading(false);
    }, [toggleTheme, toggleMenu, toggleLayout, toggleRTL, toggleAnimation, toggleNavbar, toggleSemidark, initLocale, theme, menu, layout, rtlClass, animation, navbar, locale, semidark]);

    return (
        <div
            className={`${(sidebar && 'toggle-sidebar') || ''} ${menu} ${layout} ${rtlClass} main-section relative font-nunito text-sm font-normal antialiased`}
        >
            <ConfigProvider
                direction={rtlClass === 'rtl' ? 'rtl' : 'ltr'}
                theme={{
                    algorithm: isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
                    token: {
                        colorPrimary: '#4361ee',
                        fontFamily: 'var(--font-nunito), sans-serif',
                        colorBgContainer: isDarkMode ? '#0e1726' : '#ffffff',
                    },
                }}
            >
                {isLoading ? <Loading /> : children}
            </ConfigProvider>
        </div>
    );
}

export default App;
