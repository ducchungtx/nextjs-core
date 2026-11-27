'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Popover } from 'antd';
import React from 'react';

const ElementsPopoversOptions = () => {
    return (
        <PanelCodeHighlight
            title="Options"
            codeHighlight={`import { Popover } from 'antd';

<Popover trigger={['hover', 'focus']} content="On Hover">
    <button type="button" className="btn btn-primary">
        On Hover
    </button>
</Popover>

<Popover trigger="focus" content="On Focus">
    <button type="button" className="btn btn-secondary">
        On Focus
    </button>
</Popover>

<Popover trigger="click" content="Delay 1s" mouseEnterDelay={1}>
    <button type="button" className="btn btn-info">
        Delay
    </button>
</Popover>

<Popover trigger="click" content="Disabled Animation" motion={{ motionName: '' }}>
    <button type="button" className="btn btn-dark">
        Disabled Animation
    </button>
</Popover>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <Popover trigger={['hover', 'focus']} content="On Hover">
                        <button type="button" className="btn btn-primary">
                            On Hover
                        </button>
                    </Popover>
                    <Popover trigger="focus" content="On Focus">
                        <button type="button" className="btn btn-secondary">
                            On Focus
                        </button>
                    </Popover>
                    <Popover trigger="click" content="Delay 1s" mouseEnterDelay={1}>
                        <button type="button" className="btn btn-info">
                            Delay
                        </button>
                    </Popover>
                    <Popover trigger="click" content="Disabled Animation" motion={{ motionName: '' }}>
                        <button type="button" className="btn btn-dark">
                            Disabled Animation
                        </button>
                    </Popover>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsPopoversOptions;
