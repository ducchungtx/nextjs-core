'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Tooltip } from 'antd';
import React from 'react';

const ElementsAvatarTooltip = () => {
    return (
        <PanelCodeHighlight
            title="Tooltip"
            codeHighlight={`import { Tooltip } from 'antd';

<div className="flex items-center justify-center -space-x-4 rtl:space-x-reverse text-white">
    <Tooltip title="Judy Holmes">
        <img className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
    </Tooltip>
    <Tooltip title="Judy Holmes">
        <img className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
    </Tooltip>
    <Tooltip title="Judy Holmes">
        <img className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
    </Tooltip>
    <Tooltip title="Alan Green">
        <span className="flex justify-center items-center w-12 h-12 text-center rounded-full object-cover bg-info text-base ring-2 ring-white dark:ring-white-dark">AG</span>
    </Tooltip>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center -space-x-4 text-white rtl:space-x-reverse">
                    <Tooltip title="Judy Holmes">
                        <img className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
                    </Tooltip>
                    <Tooltip title="Judy Holmes">
                        <img className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
                    </Tooltip>
                    <Tooltip title="Judy Holmes">
                        <img className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
                    </Tooltip>
                    <Tooltip title="Alan Green">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-info object-cover text-center text-base ring-2 ring-white dark:ring-white-dark">AG</span>
                    </Tooltip>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsAvatarTooltip;
