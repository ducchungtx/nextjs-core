'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Popover } from 'antd';
import React from 'react';

const ElementsPopoversDefault = () => {
    return (
        <PanelCodeHighlight
            title="Default"
            codeHighlight={`import { Popover } from 'antd';

<Popover trigger="click" content="Popover using ANCHOR tag">
    <button type="button" className="btn bg-primary btn-primary">
        Link
    </button>
</Popover>

<Popover trigger="click" content="Popover using BUTTON tag">
    <button type="button" className="btn btn-success">
        Button
    </button>
</Popover>`}
        >
            <div className="mb-5">
                <div className="flex w-full justify-center gap-4">
                    <Popover trigger="click" content="Popover using ANCHOR tag">
                        <button type="button" className="btn btn-primary bg-primary">
                            Link
                        </button>
                    </Popover>
                    <Popover trigger="click" content="Popover using BUTTON tag">
                        <button type="button" className="btn btn-success">
                            Button
                        </button>
                    </Popover>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsPopoversDefault;
