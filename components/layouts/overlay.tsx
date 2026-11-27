'use client';
import { useThemeStore } from '@/store/useThemeStore';

const Overlay = () => {
    const sidebar = useThemeStore((s) => s.sidebar);
    const toggleSidebar = useThemeStore((s) => s.toggleSidebar);
    return (
        <>
            {/* sidebar menu overlay */}
            <div className={`${(!sidebar && 'hidden') || ''} fixed inset-0 z-50 bg-[black]/60 lg:hidden`} onClick={() => toggleSidebar()}></div>
        </>
    );
};

export default Overlay;
