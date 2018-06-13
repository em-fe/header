# em 头部业务组件
> 基于Vue.js 的 前端业务组件。

## 代码演示

<br>
<div class="header-box">
  <w-header personalUrl="https://www.baidu.com" eventUrl="http://www.qq.com/" lightUrl="http://news.qq.com/" logoutAction="https://www.easy-mock.com/mock/5ab386ecca15e11ded65b593/chinese/getLoginOutCallBackUrl" @success="logoutSuccess"></w-header>
</div>

``` vue
<w-header personalUrl="https://www.baidu.com" eventUrl="http://www.qq.com/" lightUrl="http://news.qq.com/" logoutAction="https://www.easy-mock.com/mock/5ab386ecca15e11ded65b593/chinese/getLoginOutCallBackUrl" @success="logoutSuccess"></w-header>
```

## API

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|logo|主办logo|String|否|https://static2.evente.cn/static/img/logo2018v1.svg|
|showMask|展示弹窗还是 emit出方法|Boolean|否|true|
|logoutAction|退出登录接口地址|String|是|-|
|personalUrl|点击人名跳转地址|String|否|-|
|lightUrl|点击轻活动跳转地址|String|否|-|
|eventUrl|点击演出赛事跳转地址|String|否|-|
|home|logo的事件|Function|否|-|
|headers|登出ajax的头部|Object|否|{}|

## 方法

|事件名|说明|返回值|
|---|------|-----|
|click|点击触发,阻止冒泡|-|
|goIndex|点击控制台首页,阻止冒泡, 跳转到控制台首页|-|
|goAccount|点击用户名,阻止冒泡, 跳转到账户管理页面|-|
|goEvente|点击弹窗的演唱赛事触发,阻止冒泡|-|
|goLight|点击弹窗的演唱轻活动,,阻止冒泡|-|
|success|退出登录成功|-|

<script>
import WHeader from './index';

export default {
  components: {
    WHeader,
  },
  methods: {
    logoutSuccess() {
      console.log('退出成功');
    },
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
