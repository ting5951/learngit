<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
        <system-information></system-information>
      </div>

      <div class="right-side">
        <div class="doc">
        </div>
        <div class="doc">
          <button class="alt" @click="open('https://electron.atom.io/docs/')">{{loginFlig}}</button>
          <button class="alt" @click="open('https://vuejs.org/v2/guide/')">debug</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'landing-page',
    components: {SystemInformation},
    data () {
      return {
        loginFlig: true
      }
    },
    computed: {
      ...mapState(['count']),
      tips () {
        console.info(this.count)
        return 1
      }
    },
    methods: {
      ...mapActions('user', ['getAssets', 'changeNameA']),
      ...mapActions(['decrement']),
      open (link) {
        var param = {
          name: 'dd',
          password: '4545',
          phone: 'd',
          url: 'http://47.74.247.189:8080/register'
        }
        this.getAssets(param)
        console.info(this.$store.state.user)
        this.decrement()
        console.info(this.$store.getters.count)
        this.changeNameA('我通过小二')
        console.info(this.$store.state.user)
        console.info(this.$store.getters['user/someGetter'])
      },
      prosd (params) {
        var that = this
        return new Promise(function (resolve, reject) {
          that.$axios.post(params.url, that.qs.stringify(params)).then(res => {
            resolve(res)
          }).catch(err => {
            console.log(err)
            reject(err)
          })
        })
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
