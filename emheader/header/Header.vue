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
        <span class="w-header-info-hello">&nbsp;你好<span v-if="user && user !== 'null'">，</span><span class="w-header-info-text" @click="goAccount" v-if="user && user !== 'null'">{{ user }}</span></span>
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
import vue from 'vue';
import 'em-cookie';
import jsonp from 'em-jsonp';
import emfe from 'em-fe';
import WMask from './component/mask/index';
import WModal from './component/modal/index';
import CONSTANT from './common/constant';
import ajax from '../tools/ajax';

vue.use(emfe);

export default {
  name: 'WHeader',
  data() {
    return {
      isMask: false,
      user: '',
      modalShow: false,
      callbackUrl: [],
    };
  },
  props: {
    logo: {
      type: String,
      default: 'https://static2.evente.cn/static/img/logo2018v1.svg',
    },
    className: String,
    home: Function,
    personalUrl: String,
    lightUrl: String,
    eventUrl: String,
    logoutAction: String,
    headers: {
      type: Object,
      default: () => {},
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
      ajax({
        headers: this.headers,
        type: 'GET',
        action: this.logoutAction,
        onSuccess: (res) => {
          if (res.code === CONSTANT.SUCCESS) {
            this.callbackUrl = res.data.url_list.slice();
            this.afterLogout(this.callbackUrl.length - 1);
          } else {
            this.$EmfeMessage.error({
              content: res.message,
            });
          }
        },
        onError: (err, response) => {
          this.$EmfeMessage.error({
            content: response.message,
          });
        },
      });
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
      if (this.personalUrl) {
        window.open(`${this.personalUrl}`);
      }
    },
    eventeFun() {
      this.$emit('goEvente');
      if (this.eventUrl) {
        window.location.href = `${this.eventUrl}`;
      }
    },
    lightFun() {
      this.$emit('goLight');
      if (this.lightUrl) {
        window.location.href = `${this.lightUrl}`;
      }
    },
    goHome() {
      if (this.home) {
        this.home();
      } else {
        window.open('https://www.evente.cn/');
        this.$emit('goHome');
      }
    },
    afterLogout(inow) {
      let theIndex = inow;
      window.$jsonp({
        url: this.callbackUrl[theIndex],
        success: (res) => {
          if (res.code === CONSTANT.SUCCESS) {
            if (theIndex === 0) {
              this.logoutSuc();
            } else {
              this.afterLogout(--theIndex);
            }
          } else {
            this.$EmfeMessage.error({
              content: '登录失败',
            });
          }
        },
        error: () => {
          this.$EmfeMessage.error({
            content: '登录失败',
          });
        },
      });
    },
    logoutSuc() {
      window.$cookie.remove(CONSTANT.EVENT_TOKE);
      window.$cookie.remove(CONSTANT.EVENT_USER);
      // 不加定时器，登录cookie还在
      setTimeout(() => {
        this.$emit('success');
      }, 0);
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
