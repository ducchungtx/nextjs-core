'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Popover } from 'antd';
import React from 'react';

const ElementsPopoversColors = () => {
    return (
        <PanelCodeHighlight
            title="Colors"
            codeHighlight={`import { Popover } from 'antd';

<Popover trigger="click" content="Primary" color="#4361ee">
    <button type="button" className="btn btn-primary">
        Primary
    </button>
</Popover>

<Popover trigger="click" content="Success" color="#00ab55">
    <button type="button" className="btn btn-success">
        Success
    </button>
</Popover>

<Popover trigger="click" content="info" color="#2196f3">
    <button type="button" className="btn btn-info">
        Info
    </button>
</Popover>

<Popover trigger="click" content="danger" color="#e7515a">
    <button type="button" className="btn btn-danger">
        Danger
    </button>
</Popover>

<Popover trigger="click" content="warning" color="#e2a03f">
    <button type="button" className="btn btn-warning">
        Warning
    </button>
</Popover>

<Popover trigger="click" content="secondary" color="#805dca">
    <button type="button" className="btn btn-secondary">
        Secondary
    </button>
</Popover>

<Popover trigger="click" content="dark" color="#3b3f5c">
    <button type="button" className="btn btn-dark">
        Dark
    </button>
</Popover>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <Popover trigger="click" content="Primary" color="#4361ee">
                        <button type="button" className="btn btn-primary">
                            Primary
                        </button>
                    </Popover>
                    <Popover trigger="click" content="Success" color="#00ab55">
                        <button type="button" className="btn btn-success">
                            Success
                        </button>
                    </Popover>
                    <Popover trigger="click" content="info" color="#2196f3">
                        <button type="button" className="btn btn-info">
                            Info
                        </button>
                    </Popover>
                    <Popover trigger="click" content="danger" color="#e7515a">
                        <button type="button" className="btn btn-danger">
                            Danger
                        </button>
                    </Popover>
                    <Popover trigger="click" content="warning" color="#e2a03f">
                        <button type="button" className="btn btn-warning">
                            Warning
                        </button>
                    </Popover>
                    <Popover trigger="click" content="secondary" color="#805dca">
                        <button type="button" className="btn btn-secondary">
                            Secondary
                        </button>
                    </Popover>
                    <Popover trigger="click" content="dark" color="#3b3f5c">
                        <button type="button" className="btn btn-dark">
                            Dark
                        </button>
                    </Popover>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsPopoversColors;
