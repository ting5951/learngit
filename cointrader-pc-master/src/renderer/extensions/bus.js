// 事件总线 (用于业务不复杂的单页面中兄弟组件通信)
const BusPlugin = {}
BusPlugin.install = (Vue) => {
  const bus = new Vue()
  Vue.prototype.bus = bus
  const snackBarInterceptor = msg => msg && +msg.statusCode !== 401
  Vue.prototype.snackBar = {
    open (msg) {
      if (snackBarInterceptor(msg)) bus.$emit('snack-bar-open', msg)
    },
    info (msg) {
      if (snackBarInterceptor(msg)) bus.$emit('snack-bar-info', msg)
    },
    error (msg) {
      if (snackBarInterceptor(msg)) bus.$emit('snack-bar-error', msg)
    },
    warn (msg) {
      if (snackBarInterceptor(msg)) bus.$emit('snack-bar-warn', msg)
    },
    listen (vm) {
      // vm: snackBar实例
      bus.$on('snack-bar-open', (msg) => {
        vm.open(msg)
      })
      bus.$on('snack-bar-info', (msg) => {
        vm.info(msg)
      })
      bus.$on('snack-bar-error', (msg) => {
        vm.error(msg)
      })
      bus.$on('snack-bar-warn', (msg) => {
        vm.warn(msg)
      })
    }
  }
  Vue.prototype.imgFullScreen = {
    open ({ imgs, index }) {
      bus.$emit('img-full-screen-open', { imgs, index })
    },
    close () {
      bus.$emit('img-full-screen-close')
    },
    listen (vm) {
      // vm: imgFullScreen实例
      bus.$on('img-full-screen-open', ({ imgs, index }) => {
        vm.open({ imgs, index })
      })
      bus.$on('img-full-screen-close', () => {
        vm.close()
      })
    }
  }
}

export default BusPlugin
