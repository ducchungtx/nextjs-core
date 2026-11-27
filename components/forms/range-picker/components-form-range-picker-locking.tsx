'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Slider } from 'antd';
import React, { useState } from 'react';

const ComponentsFormRangePickerLocking = () => {
    const [disabled, setDisabled] = useState<boolean>(false);
    const [skippingValue, setSkippingValue] = useState<number>(40);
    const [skippingValue1, setSkippingValue1] = useState<number>(40);
    const changeValue = () => {
        setDisabled(!disabled);
    };

    return (
        <PanelCodeHighlight
            className="lg:col-span-2"
            title="Locking sliders together"
            codeHighlight={`import { useState } from 'react';
import { Slider } from 'antd';

const [disabled, setDisabled] = useState<boolean>(false);
const [skippingValue, setSkippingValue] = useState<number>(40);
const [skippingValue1, setSkippingValue1] = useState<number>(40);
const changeValue = () => {
    setDisabled(!disabled);
};

<div>
    <Slider
        disabled={disabled}
        defaultValue={40}
        min={0}
        max={100}
        onChange={(value) => setSkippingValue(value)}
    />
    <div>Value: {skippingValue}</div>
    <div className="text-primary font-bold mb-10" id="locking_slider1_value"></div>
    <Slider
        disabled={disabled}
        defaultValue={40}
        min={0}
        max={100}
        onChange={(value) => setSkippingValue1(value)}
    />
    <div>Value: {skippingValue1}</div>
    <div className="text-primary font-bold mb-10" id="locking_slider2_value"></div>
    <div className="ltr:text-right rtl:text-left">
        {disabled === false ? (
            <button type="button" className="btn btn-primary" onClick={changeValue} id="lockbutton">
                Lock
            </button>
        ) : (
            <button type="button" className="btn btn-primary" onClick={changeValue} id="unlockbutton">
                Unlock
            </button>
        )}
    </div>
</div>`}
        >
            <div className="mb-5 pt-5">
                <Slider
                    disabled={disabled}
                    defaultValue={40}
                    min={0}
                    max={100}
                    onChange={(value) => setSkippingValue(value)}
                />
                <div>Value: {skippingValue}</div>
                <div className="mb-10 font-bold text-primary" id="locking_slider1_value"></div>
                <Slider
                    disabled={disabled}
                    defaultValue={40}
                    min={0}
                    max={100}
                    onChange={(value) => setSkippingValue1(value)}
                />
                <div>Value: {skippingValue1}</div>
                <div className="mb-10 font-bold text-primary" id="locking_slider2_value"></div>
                <div className="ltr:text-right rtl:text-left">
                    {disabled === false ? (
                        <button type="button" className="btn btn-primary" onClick={changeValue} id="lockbutton">
                            Lock
                        </button>
                    ) : (
                        <button type="button" className="btn btn-primary" onClick={changeValue} id="unlockbutton">
                            Unlock
                        </button>
                    )}
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormRangePickerLocking;
