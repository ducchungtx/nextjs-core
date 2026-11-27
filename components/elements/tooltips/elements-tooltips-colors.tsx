'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Tooltip } from 'antd';
import React from 'react';

const ElementsTooltipsColors = () => {
    return (
        <PanelCodeHighlight
            title="Colors"
            codeHighlight={`import { Tooltip } from 'antd';

<Tooltip title="Primary" color="#4361ee">
    <button type="button" className="btn btn-primary">
        Primary
    </button>
</Tooltip>

<Tooltip title="Success" color="#00ab55">
    <button type="button" className="btn btn-success">
        Success
    </button>
</Tooltip>

<Tooltip title="info" color="#2196f3">
    <button type="button" className="btn btn-info">
        Info
    </button>
</Tooltip>

<Tooltip title="danger" color="#e7515a">
    <button type="button" className="btn btn-danger">
        Danger
    </button>
</Tooltip>

<Tooltip title="warning" color="#e2a03f">
    <button type="button" className="btn btn-warning">
        Warning
    </button>
</Tooltip>

<Tooltip title="secondary" color="#805dca">
    <button type="button" className="btn btn-secondary">
        Secondary
    </button>
</Tooltip>

<Tooltip title="dark" color="#3b3f5c">
    <button type="button" className="btn btn-dark">
        Dark
    </button>
</Tooltip>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <Tooltip title="Primary" color="#4361ee">
                        <button type="button" className="btn btn-primary">
                            Primary
                        </button>
                    </Tooltip>
                    <Tooltip title="Success" color="#00ab55">
                        <button type="button" className="btn btn-success">
                            Success
                        </button>
                    </Tooltip>
                    <Tooltip title="info" color="#2196f3">
                        <button type="button" className="btn btn-info">
                            Info
                        </button>
                    </Tooltip>
                    <Tooltip title="danger" color="#e7515a">
                        <button type="button" className="btn btn-danger">
                            Danger
                        </button>
                    </Tooltip>
                    <Tooltip title="warning" color="#e2a03f">
                        <button type="button" className="btn btn-warning">
                            Warning
                        </button>
                    </Tooltip>
                    <Tooltip title="secondary" color="#805dca">
                        <button type="button" className="btn btn-secondary">
                            Secondary
                        </button>
                    </Tooltip>
                    <Tooltip title="dark" color="#3b3f5c">
                        <button type="button" className="btn btn-dark">
                            Dark
                        </button>
                    </Tooltip>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsTooltipsColors;
