'use client';
import { useThemeStore } from '@/store/useThemeStore';
import React from 'react';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
    const navbar = useThemeStore((s) => s.navbar);
    return <div className={`${navbar} main-container min-h-screen text-black dark:text-white-dark`}> {children}</div>;
};

export default MainContainer;
