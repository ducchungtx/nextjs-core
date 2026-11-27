'use client';

import React from 'react';
import { Button, type ButtonProps } from 'antd';
import type { ButtonColorType } from 'antd/es/button/buttonHelpers';

export type AppButtonTone = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

export type AppButtonAlign = 'center' | 'start' | 'between';

export interface AppButtonProps extends ButtonProps {
    /** Semantic color shortcut mapped to Ant Design v6 `color` */
    tone?: AppButtonTone;
    /** Horizontal alignment of button content (useful for menu/sidebar items) */
    align?: AppButtonAlign;
}

const TONE_COLOR_MAP: Record<AppButtonTone, ButtonColorType> = {
    default: 'default',
    primary: 'primary',
    secondary: 'purple',
    success: 'green',
    warning: 'orange',
    danger: 'danger',
    info: 'cyan',
};

const ALIGN_CLASS_MAP: Record<AppButtonAlign, string> = {
    center: '',
    start: 'justify-start!',
    between: 'justify-between!',
};

/**
 * Shared Ant Design Button wrapper for consistent theming, semantic tones,
 * and easy per-instance customization via Tailwind `className`, `classNames`, or `styles`.
 */
export const AppButton = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, AppButtonProps>(
    ({ tone, align = 'center', color, variant, type, htmlType = 'button', className = '', children, ...rest }, ref) => {
        const resolvedColor = color ?? (tone ? TONE_COLOR_MAP[tone] : undefined);
        const resolvedVariant = variant ?? (tone && tone !== 'default' && !type ? 'solid' : undefined);
        const alignClass = ALIGN_CLASS_MAP[align];
        const mergedClassName = [alignClass, className].filter(Boolean).join(' ');

        return (
            <Button
                ref={ref}
                type={type}
                color={resolvedColor}
                variant={resolvedVariant}
                htmlType={htmlType}
                className={mergedClassName || undefined}
                {...rest}
            >
                {children}
            </Button>
        );
    }
);

AppButton.displayName = 'AppButton';

export default AppButton;
