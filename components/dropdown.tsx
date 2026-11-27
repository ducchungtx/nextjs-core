'use client';
import { createPopper, Instance, Placement } from '@popperjs/core';
import { forwardRef, ReactNode, Ref, useEffect, useImperativeHandle, useRef, useState } from 'react';

interface DropdownProps {
    placement?: Placement | string;
    offset?: number[];
    btnClassName?: string;
    button?: ReactNode;
    children?: ReactNode;
}

export interface DropdownHandle {
    close: () => void;
}

const Dropdown = (props: DropdownProps, forwardedRef: Ref<DropdownHandle>) => {
    const [visibility, setVisibility] = useState(false);

    const referenceRef = useRef<HTMLButtonElement | null>(null);
    const popperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!visibility || !referenceRef.current || !popperRef.current) {
            return;
        }

        const instance: Instance = createPopper(referenceRef.current, popperRef.current, {
            placement: (props.placement as Placement) || 'bottom-end',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: props.offset || [0],
                    },
                },
            ],
        });

        return () => {
            instance.destroy();
        };
    }, [visibility, props.placement, props.offset]);

    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            const target = event.target as Node | null;
            if (referenceRef.current?.contains(target) || popperRef.current?.contains(target)) {
                return;
            }

            setVisibility(false);
        };

        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);

    useImperativeHandle(forwardedRef, () => ({
        close() {
            setVisibility(false);
        },
    }));

    return (
        <>
            <button ref={referenceRef} type="button" className={props.btnClassName} onClick={() => setVisibility(!visibility)}>
                {props.button}
            </button>

            <div ref={popperRef} className="z-50" onClick={() => setVisibility(!visibility)}>
                {visibility && props.children}
            </div>
        </>
    );
};

export default forwardRef(Dropdown);
