'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Popover } from 'antd';
import React from 'react';

const ElementsPopoversDismissible = () => {
    return (
        <PanelCodeHighlight
            title="Dismissible popover"
            codeHighlight={`import { Popover } from 'antd';

<Popover trigger="click" content="Popover on left" placement="left">
    <button type="button" className="btn btn-dark">
        Popover on left
    </button>
</Popover>`}
        >
            <div className="mb-5">
                <div className="flex w-full justify-center gap-4">
                    <Popover trigger="click" content="Popover on left" placement="left">
                        <button type="button" className="btn btn-dark">
                            Popover on left
                        </button>
                    </Popover>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsPopoversDismissible;
