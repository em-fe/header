<template>
  <header class="w-header" :class="headerName">
    <div class="w-header-eye">
      <img class="w-header-eye-img" :src="logo" height="100%" @click="goHome">
    </div>
    <div class="w-header-controller">
      <span class="w-header-controller-text">专业的活动应用平台</span>
    </div>
    <div class="w-header-info">
      <div class="w-header-index">
        <span class="w-header-info-text1" @click="goIndex">免费发活动</span>
      </div>
      <div class="w-header-account">
        <span class="w-header-info-hello">&nbsp;你好，<span class="w-header-info-text" @click="goAccount">{{ user }}</span></span>
      </div>
      <span class="w-header-info-text w-header-signout" @click="logout">退出</span>
    </div>
    <w-mask :isMask="isMask" @closeMask="closeMask" @goEvente="eventeFun" @goLight="lightFun"></w-mask>
    <w-modal :show="modalShow" :tip="true" title="退出账号" @close="modalClose" @cancel="modalCancel" @ok="modalOk">
      <div slot="modal-main">确定要退出账号？</div>
    </w-modal>
  </header>
</template>
<script>
import Vue from 'vue';
import WMask from './component/mask/index';
import WModal from './component/modal/index';
import CONSTANT from './common/constant';
import VueCookie from 'em-cookie';

Vue.use(VueCookie);

export default {
  name: 'WHeader',
  data() {
    return {
      isMask: false,
      user: '',
      modalShow: false,
    };
  },
  props: {
    logo: {
      type: String,
      default: 'https://static2.evente.cn/static/img/logo2017.svg',
    },
    className: String,
    home: Function,
    personalAccount: {
      type: String,
      default: '',
    },
    personalUrl: {
      type: String,
      required: true,
    },
    lightUrl: {
      type: String,
      required: true,
    },
    eventUrl: {
      type: String,
      required: true,
    },
  },
  created() {
    this.user = decodeURIComponent(window.$cookie.get(CONSTANT.EVENT_USER));
  },
  methods: {
    logout() {
      this.modalShow = true;
    },
    modalClose() {
      this.modalShow = false;
    },
    modalCancel() {
      this.modalShow = false;
    },
    modalOk() {
      this.modalShow = false;
      this.goOut();
    },
    goOut() {
      console.log("goOut");
    },
    goIndex() {
      this.isMask = true;
      this.$emit('goIndex');
    },
    closeMask() {
      this.isMask = false;
    },
    goAccount() {
      this.$emit('goAccount');
      window.open(`${this.personalUrl}`);
    },
    eventeFun() {
      this.$emit('goEvente');
      window.location.href = `${this.eventUrl}`;
    },
    lightFun() {
      this.$emit('goLight');
      window.location.href = `${this.lightUrl}`;
    },
    goHome() {
      if (this.home) {
        this.home();
      } else {
        window.open('https://www.evente.cn/');
        this.$emit('goHome');
      }
    },
  },
  computed: {
    headerName() {
      return [
        {
          [`${this.className}-header`]: !!this.className,
        },
      ];
    },
  },
  components: {
    WMask,
    WModal,
  },
};
</script>
