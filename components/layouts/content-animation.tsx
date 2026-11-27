'use client';
import { useThemeStore } from '@/store/useThemeStore';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ContentAnimation = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const themeAnimation = useThemeStore((s) => s.animation);
    const [animation, setAnimation] = useState(themeAnimation);

    useEffect(() => {
        setAnimation(themeAnimation);
    }, [themeAnimation]);

    useEffect(() => {
        setAnimation(themeAnimation);
        setTimeout(() => {
            setAnimation('');
        }, 1100);
    }, [pathname, themeAnimation]);
    return (
        <>
            {/* BEGIN CONTENT AREA */}
            <div className={`${animation} animate__animated p-6`}>{children}</div>
            {/* END CONTENT AREA */}
        </>
    );
};

export default ContentAnimation;
