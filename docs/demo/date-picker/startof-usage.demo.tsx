/**
 * title: 返回时间起始点
 * desc: 返回`ms`级指定时间起始点
 */
import React from 'react';
import { Space, message, DatePicker } from '@mlz/admin';

const { RangePicker } = DatePicker;
const commonStyle = { width: 168, marginBottom: 10 };

const changeHandler = (timestamp: string) => {
  message.success(`选择结果是一个${typeof timestamp}：${timestamp.toString()}`);
};

export default () => {
  return (
    <Space direction="vertical">
      {(['time', '', 'date', 'week', 'month', 'quarter', 'year'] as const).map((item) => {
        return <DatePicker picker={item} startOf={item[0] || 'd'} showTime={!item} key={item} style={commonStyle} onChange={changeHandler} />;
      })}
      <RangePicker returnUnixValue startOf="d" onChange={changeHandler} />
    </Space>
  );
};
