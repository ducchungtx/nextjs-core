'use client';
import Dropdown from '@/components/dropdown';
import IconCaretDown from '@/components/icon/icon-caret-down';
import { getTranslation } from '@/i18n';
import { useThemeStore } from '@/store/useThemeStore';
import { useRouter } from 'next/navigation';
import React from 'react';

interface LanguageDropdownProps {
    className?: string;
}

const LanguageDropdown = ({ className = '' }: LanguageDropdownProps) => {
    const router = useRouter();
    const { i18n } = getTranslation();

    const isRtl = useThemeStore((s) => s.rtlClass) === 'rtl';
    const languageList = useThemeStore((s) => s.languageList);
    const toggleRTL = useThemeStore((s) => s.toggleRTL);

    const currentFlag = languageList.find((item) => item.code === i18n.language)?.flag ?? 'EN';

    const setLocale = (flag: string) => {
        if (flag.toLowerCase() === 'ae') {
            toggleRTL('rtl');
        } else {
            toggleRTL('ltr');
        }
        router.refresh();
    };

    return (
        <div className={`dropdown ${className}`}>
            {i18n.language && (
                <Dropdown
                    offset={[0, 8]}
                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                    btnClassName="flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black"
                    button={
                        <>
                            <div>
                                <img src={`/assets/images/flags/${currentFlag}.svg`} alt="image" className="h-5 w-5 rounded-full object-cover" />
                            </div>
                            <div className="text-base font-bold uppercase">{i18n.language}</div>
                            <span className="shrink-0">
                                <IconCaretDown />
                            </span>
                        </>
                    }
                >
                    <ul className="w-[180px] px-2! font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                        {languageList.map((item) => {
                            return (
                                <li key={item.code}>
                                    <button
                                        type="button"
                                        className={`flex w-full items-center whitespace-nowrap rounded-lg hover:text-primary ${i18n.language === item.code ? 'bg-primary/10 text-primary' : ''}`}
                                        onClick={() => {
                                            i18n.changeLanguage(item.code);
                                            setLocale(item.code);
                                        }}
                                    >
                                        <img src={`/assets/images/flags/${item.flag}.svg`} alt="flag" className="h-5 w-5 shrink-0 rounded-full object-cover" />
                                        <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </Dropdown>
            )}
        </div>
    );
};

export default LanguageDropdown;
