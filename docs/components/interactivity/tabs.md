# Tabs 标签页

> `📦 标签页`用于选项卡切换组件

## 基本使用

```tsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Tabs } from '@mlz/admin';

const { TabPane } = Tabs;
export default () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);
```

## 卡片式标签

```tsx
/**
 * title: 卡片式标签
 * desc: 通过`type`属性设置为`editable-card`，来开带新增和关闭按钮的卡片式标签
 */
import React from 'react';
import { Tabs } from '@mlz/admin';

const { TabPane } = Tabs;
export default () => (
  <Tabs defaultActiveKey="1" type="editable-card">
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);
```

## 优化内容

- 优化了`卡片式标签`的标签样式，以前反馈感非常差。关闭按钮的热区远离 pane 文字。

---

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters />;
```
