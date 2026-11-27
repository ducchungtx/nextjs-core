'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Tooltip } from 'antd';
import React from 'react';

const ElementsTooltipsDefault = () => {
    return (
        <PanelCodeHighlight
            title="Default"
            codeHighlight={`import { Tooltip } from 'antd';

<Tooltip title="Popover using ANCHOR tag">
    <button type="button" className="btn bg-primary btn-primary">
        Link
    </button>
</Tooltip>

<Tooltip title="Popover using BUTTON tag">
    <button type="button" className="btn btn-success">
        Button
    </button>
</Tooltip>`}
        >
            <div className="mb-5">
                <div className="flex w-full justify-center gap-4">
                    <Tooltip title="Popover using ANCHOR tag">
                        <button type="button" className="btn btn-primary bg-primary">
                            Link
                        </button>
                    </Tooltip>
                    <Tooltip title="Popover using BUTTON tag">
                        <button type="button" className="btn btn-success">
                            Button
                        </button>
                    </Tooltip>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsTooltipsDefault;
