'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Tooltip } from 'antd';
import React from 'react';

const ElementsTooltipsHtml = () => {
    return (
        <PanelCodeHighlight
            title="HTML"
            codeHighlight={`import { Tooltip } from 'antd';

<Tooltip title={<strong>Bolded content</strong>}>
    <button type="button" className="btn btn-dark">
        Tooltip on HTML
    </button>
</Tooltip>`}
        >
            <div className="mb-5">
                <div className="flex w-full justify-center gap-4">
                    <Tooltip title={<strong>Bolded content</strong>}>
                        <button type="button" className="btn btn-dark">
                            Tooltip on HTML
                        </button>
                    </Tooltip>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsTooltipsHtml;
