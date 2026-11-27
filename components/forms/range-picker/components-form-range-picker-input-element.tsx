'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Slider } from 'antd';
import React, { useState } from 'react';

const ComponentsFormRangePickerInputElement = () => {
    const [inputStart, setInputStart] = useState<number>(20);
    const [inputEnd, setInputEnd] = useState<number>(40);
    const slider1Update = (range: number[]) => {
        setInputStart(range[0]);
        setInputEnd(range[1]);
    };

    return (
        <PanelCodeHighlight
            title="Using HTML5 input elements"
            codeHighlight={`import { useState } from 'react';
import { Slider } from 'antd';

const [inputStart, setInputStart] = useState<number>(20);
const [inputEnd, setInputEnd] = useState<number>(40);
const slider1Update = (range: number[]) => {
    setInputStart(range[0]);
    setInputEnd(range[1]);
};

<div>
    <Slider range min={0} max={100} step={1} value={[inputStart, inputEnd]} onChange={slider1Update} />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4 mt-9">
        <div className="mb-3">
            <select id="select" className="form-select w-full" value={inputStart} onChange={(e) => setInputStart(Number(e.target.value))}>
                {Array.from(Array(101).keys()).map((i) => (
                    <option value={i} key={i}>
                        {i}
                    </option>
                ))}
            </select>
        </div>
        <div>
            <input type="number" className="form-input" min="0" max="100" value={inputEnd} onChange={(e) => setInputEnd(Number(e.target.value))} />
        </div>
    </div>
</div>`}
        >
            <div className="mb-5 pt-10">
                <Slider range min={0} max={100} step={1} value={[inputStart, inputEnd]} onChange={slider1Update} />
                <div className="mb-4 mt-9 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="mb-3">
                        <select id="select" className="form-select w-full" value={inputStart} onChange={(e) => setInputStart(Number(e.target.value))}>
                            {Array.from(Array(101).keys()).map((i) => (
                                <option value={i} key={i}>
                                    {i}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input type="number" className="form-input" min="0" max="100" value={inputEnd} onChange={(e) => setInputEnd(Number(e.target.value))} />
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormRangePickerInputElement;
