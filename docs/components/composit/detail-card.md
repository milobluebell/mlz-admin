# DetailCard 详情描述

**`📦 详情描述`通常经拼装后用于分块展示，经列表或表格映射到的某些数据详情页。**

## 基本使用

<code src="./../../demo/detail-card/normal-usage.demo.tsx"/>

## 展示 Table 表格数据

<code src="./../../demo/detail-card/as-table.demo.tsx"/>

## 带快速访问的锚点

<code src="./../../demo/detail-card/with-anchor.demo.tsx"/>

```tsx
/**
 * inline: true
 */
import React from 'react';
import Commiters from '../_site/committers';

export default () => <Commiters refered={false} />;
```
