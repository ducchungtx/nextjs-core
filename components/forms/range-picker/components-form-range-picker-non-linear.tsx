'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Slider } from 'antd';
import React, { useState } from 'react';

const ComponentsFormRangePickerNonLinear = () => {
    const [slider2, setSlider2] = useState<[number, number]>([500, 4000]);
    const [percent2, setPercent2] = useState<[number, number]>([5, 40]);
    const onSlide = (value: number[]) => {
        setSlider2([value[0], value[1]]);
        setPercent2([Math.round((value[0] / 10000) * 100), Math.round((value[1] / 10000) * 100)]);
    };

    return (
        <PanelCodeHighlight
            title="Non linear slider"
            codeHighlight={`import { useState } from 'react';
import { Slider } from 'antd';

const [slider2, setSlider2] = useState<[number, number]>([500, 4000]);
const [percent2, setPercent2] = useState<[number, number]>([5, 40]);
const onSlide = (value: number[]) => {
    setSlider2([value[0], value[1]]);
    setPercent2([Math.round((value[0] / 10000) * 100), Math.round((value[1] / 10000) * 100)]);
};

<div>
    <Slider
        range
        min={0}
        max={10000}
        step={100}
        value={slider2}
        onChange={onSlide}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-5 font-bold">
        <div>
            <span className="text-primary mr-2" id="nouiMin2">
                {slider2[0].toFixed(2)}
            </span>
            <span className="border border-white-light dark:border-dark py-1 px-2 text-dark dark:text-white-dark rounded" id="nouiMin2Perc">
                {\`\${percent2[0]}%\`}
            </span>
        </div>
        <div className="ltr:text-right rtl:text-left">
            <span className="text-primary mr-2" id="nouiMax2">
                {slider2[1].toFixed(2)}
            </span>
            <span className="border border-white-light dark:border-dark py-1 px-2 text-dark dark:text-white-dark rounded" id="nouiMax2Perc">
                {\`\${percent2[1]}%\`}
            </span>
        </div>
    </div>
</div>`}
        >
            <div className="mb-5 pt-5">
                <Slider range min={0} max={10000} step={100} value={slider2} onChange={onSlide} />

                <div className="my-5 grid grid-cols-1 gap-8 font-bold lg:grid-cols-2">
                    <div>
                        <span className="mr-2 text-primary" id="nouiMin2">
                            {slider2[0].toFixed(2)}
                        </span>
                        <span className="rounded border border-white-light px-2 py-1 text-dark dark:border-dark dark:text-white-dark" id="nouiMin2Perc">
                            {`${percent2[0]}%`}
                        </span>
                    </div>
                    <div className="ltr:text-right rtl:text-left">
                        <span className="mr-2 text-primary" id="nouiMax2">
                            {slider2[1].toFixed(2)}
                        </span>
                        <span className="rounded border border-white-light px-2 py-1 text-dark dark:border-dark dark:text-white-dark" id="nouiMax2Perc">
                            {`${percent2[1]}%`}
                        </span>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormRangePickerNonLinear;
