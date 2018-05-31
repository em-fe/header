# b端头部
> 基于Vue.js 的 前端业务组件。

## 代码演示

### 基本使用

<br>
<div class="header-box">
  <w-header personalUrl="https://www.baidu.com" eventUrl="http://www.qq.com/" lightUrl="http://news.qq.com/"></w-header>
</div>

## 如何使用

使用 `<w-header />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

```` html
<w-header logo="logo.png"/>
````

## API

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|logo|主办logo|String|否|-|
|showMask|展示弹窗还是 emit出方法|Boolean|否|default true|

## 方法

```` html
<w-header @goIndex="goIndex"/>
````

|事件名|说明|返回值|
|---|------|-----|
|click|点击触发,阻止冒泡|-|
|goIndex|点击控制台首页,阻止冒泡, 跳转到控制台首页|-|
|goAccount|点击用户名,阻止冒泡, 跳转到账户管理页面|-|
|goEvente|点击弹窗的演唱赛事触发,阻止冒泡|-|
|goLight|点击弹窗的演唱轻活动,,阻止冒泡|-|

<script>
import WHeader from './index';

export default {
  created() {
    console.log(0);
  },
  components: {
    WHeader,
  },
}
</script>
<style lang="scss">
@import './style/header.scss';

.header-box {
  height: 100px;
}

.header-box .w-header{
  position: static;
}
</style>
