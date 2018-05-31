import { mount } from 'vue-test-utils';
import Header from './Header';

describe('Header.vue', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(Header);
  });

  it("updates the .textContent to '这是一个图标组件。'", (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        expect(wrapper.text()).toBe('这是一个图标组件。');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('检测快照是否一样。', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        expect(wrapper.text()).toMatchSnapshot();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
