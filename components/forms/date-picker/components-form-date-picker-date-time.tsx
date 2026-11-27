'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ComponentsFormDatePickerDateTime = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date2, setDate2] = useState<Dayjs | null>(() => dayjs('2022-07-05 12:00'));
    return (
        <PanelCodeHighlight
            title="Date Time"
            codeHighlight={`import { useState } from 'react';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useSelector } from 'react-redux';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
const [date2, setDate2] = useState<Dayjs | null>(() => dayjs('2022-07-05 12:00'));

<DatePicker
    showTime={{ format: 'HH:mm' }}
    format="YYYY-MM-DD HH:mm"
    placement={isRtl ? 'bottomRight' : 'bottomLeft'}
    value={date2}
    className="w-full"
    onChange={(date) => setDate2(date)}
/>`}
        >
            <div className="mb-2.5">
                Use
                <code className="text-danger">{` showTime `}</code>
                prop to enable time support
            </div>
            <div className="mb-5">
                <DatePicker
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    placement={isRtl ? 'bottomRight' : 'bottomLeft'}
                    value={date2}
                    className="w-full"
                    onChange={(date) => setDate2(date)}
                />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormDatePickerDateTime;
