'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

const ComponentsFormDatePickerRange = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date3, setDate3] = useState<[Dayjs | null, Dayjs | null] | null>(() => [dayjs('2022-07-05'), dayjs('2022-07-10')]);

    return (
        <PanelCodeHighlight
            title="Range Calendar"
            codeHighlight={`import { useState } from 'react';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useSelector } from 'react-redux';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
const [date3, setDate3] = useState<[Dayjs | null, Dayjs | null] | null>(() => [dayjs('2022-07-05'), dayjs('2022-07-10')]);

<DatePicker.RangePicker
    value={date3}
    format="YYYY-MM-DD"
    placement={isRtl ? 'bottomRight' : 'bottomLeft'}
    className="w-full"
    onChange={(dates) => setDate3(dates)}
/>`}
        >
            <div className="mb-2.5">
                Use <code className="text-danger">{`DatePicker.RangePicker`}</code> to select a date range.
            </div>
            <div className="mb-5">
                <DatePicker.RangePicker
                    value={date3}
                    format="YYYY-MM-DD"
                    placement={isRtl ? 'bottomRight' : 'bottomLeft'}
                    className="w-full"
                    onChange={(dates) => setDate3(dates)}
                />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormDatePickerRange;
