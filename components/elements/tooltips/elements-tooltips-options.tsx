'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Tooltip } from 'antd';
import React from 'react';

const ElementsTooltipsOptions = () => {
    return (
        <PanelCodeHighlight
            title="Options"
            codeHighlight={`import { Tooltip } from 'antd';

<Tooltip trigger="click" title="On Click">
    <button type="button" className="btn btn-primary">
        On Click
    </button>
</Tooltip>

<Tooltip trigger="focus" title="On Focus">
    <button type="button" className="btn btn-secondary">
        On Focus
    </button>
</Tooltip>

<Tooltip title="Delay 1s" mouseEnterDelay={1}>
    <button type="button" className="btn btn-info">
        Delay
    </button>
</Tooltip>

<Tooltip title="Disabled Animation" motion={{ motionName: '' }}>
    <button type="button" className="btn btn-dark">
        Disabled Animation
    </button>
</Tooltip>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <Tooltip trigger="click" title="On Click">
                        <button type="button" className="btn btn-primary">
                            On Click
                        </button>
                    </Tooltip>
                    <Tooltip trigger="focus" title="On Focus">
                        <button type="button" className="btn btn-secondary">
                            On Focus
                        </button>
                    </Tooltip>
                    <Tooltip title="Delay 1s" mouseEnterDelay={1}>
                        <button type="button" className="btn btn-info">
                            Delay
                        </button>
                    </Tooltip>
                    <Tooltip title="Disabled Animation" motion={{ motionName: '' }}>
                        <button type="button" className="btn btn-dark">
                            Disabled Animation
                        </button>
                    </Tooltip>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsTooltipsOptions;
