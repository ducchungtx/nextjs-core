'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Tooltip } from 'antd';
import React from 'react';

const ElementsTooltipsPlacement = () => {
    return (
        <PanelCodeHighlight
            title="Placement"
            codeHighlight={`import { Tooltip } from 'antd';

<Tooltip title="Popover on top" placement="top">
    <button type="button" className="btn btn-info">
        Tooltip on top
    </button>
</Tooltip>

<Tooltip title="Popover on left" placement="left">
    <button type="button" className="btn btn-secondary">
        Tooltip on left
    </button>
</Tooltip>

<Tooltip title="Popover on right" placement="right">
    <button type="button" className="btn btn-danger">
        Tooltip on right
    </button>
</Tooltip>

<Tooltip title="Popover on bottom" placement="bottom">
    <button type="button" className="btn btn-warning">
        Tooltip on bottom
    </button>
</Tooltip>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <Tooltip title="Popover on top" placement="top">
                        <button type="button" className="btn btn-info">
                            Tooltip on top
                        </button>
                    </Tooltip>
                    <Tooltip title="Popover on left" placement="left">
                        <button type="button" className="btn btn-secondary">
                            Tooltip on left
                        </button>
                    </Tooltip>
                    <Tooltip title="Popover on bottom" placement="bottom">
                        <button type="button" className="btn btn-warning">
                            Tooltip on bottom
                        </button>
                    </Tooltip>
                    <Tooltip title="Popover on right" placement="right">
                        <button type="button" className="btn btn-danger">
                            Tooltip on right
                        </button>
                    </Tooltip>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsTooltipsPlacement;
