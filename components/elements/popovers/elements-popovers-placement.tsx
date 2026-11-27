'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Popover } from 'antd';
import React from 'react';

const ElementsPopoversPlacement = () => {
    return (
        <PanelCodeHighlight
            title="Placement"
            codeHighlight={`import { Popover } from 'antd';

<Popover trigger="click" content="Popover on top" placement="top">
    <button type="button" className="btn btn-info">
        Popover on top
    </button>
</Popover>

<Popover trigger="click" content="Popover on left" placement="left">
    <button type="button" className="btn btn-secondary">
        Popover on left
    </button>
</Popover>

<Popover trigger="click" content="Popover on right" placement="right">
    <button type="button" className="btn btn-danger">
        Popover on right
    </button>
</Popover>

<Popover trigger="click" content="Popover on bottom" placement="bottom">
    <button type="button" className="btn btn-warning">
        Popover on bottom
    </button>
</Popover>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <Popover trigger="click" content="Popover on top" placement="top">
                        <button type="button" className="btn btn-info">
                            Popover on top
                        </button>
                    </Popover>
                    <Popover trigger="click" content="Popover on left" placement="left">
                        <button type="button" className="btn btn-secondary">
                            Popover on left
                        </button>
                    </Popover>
                    <Popover trigger="click" content="Popover on right" placement="right">
                        <button type="button" className="btn btn-danger">
                            Popover on right
                        </button>
                    </Popover>
                    <Popover trigger="click" content="Popover on bottom" placement="bottom">
                        <button type="button" className="btn btn-warning">
                            Popover on bottom
                        </button>
                    </Popover>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsPopoversPlacement;
