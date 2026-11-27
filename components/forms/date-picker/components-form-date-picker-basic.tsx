'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ComponentsFormDatePickerBasic = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date1, setDate1] = useState<Dayjs | null>(() => dayjs('2022-07-05'));

    return (
        <PanelCodeHighlight
            title="Basic"
            codeHighlight={`import { useState } from 'react';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useSelector } from 'react-redux';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
const [date1, setDate1] = useState<Dayjs | null>(() => dayjs('2022-07-05'));

<DatePicker
    value={date1}
    format="YYYY-MM-DD"
    placement={isRtl ? 'bottomRight' : 'bottomLeft'}
    className="w-full"
    onChange={(date) => setDate1(date)}
/>`}
        >
            <div className="mb-5">
                <DatePicker
                    value={date1}
                    format="YYYY-MM-DD"
                    placement={isRtl ? 'bottomRight' : 'bottomLeft'}
                    className="w-full"
                    onChange={(date) => setDate1(date)}
                />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormDatePickerBasic;
