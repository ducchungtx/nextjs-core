'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import { TimePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ComponentsFormDatePickerTime = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date4, setDate4] = useState<Dayjs | null>(() => dayjs('13:45', 'HH:mm'));
    return (
        <PanelCodeHighlight
            title="Preloading Time"
            codeHighlight={`import { useState } from 'react';
import { TimePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useSelector } from 'react-redux';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
const [date4, setDate4] = useState<Dayjs | null>(() => dayjs('13:45', 'HH:mm'));

<TimePicker
    value={date4}
    format="HH:mm"
    placement={isRtl ? 'bottomRight' : 'bottomLeft'}
    className="w-full"
    onChange={(time) => setDate4(time)}
/>`}
        >
            <div className="mb-2.5">
                Use
                <code className="text-danger">{` TimePicker `}</code>
                to show time picker only.
            </div>
            <div className="mb-5">
                <TimePicker
                    value={date4}
                    format="HH:mm"
                    placement={isRtl ? 'bottomRight' : 'bottomLeft'}
                    className="w-full"
                    onChange={(time) => setDate4(time)}
                />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormDatePickerTime;
