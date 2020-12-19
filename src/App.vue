<template>
  <div id="app">
    首页
    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from './components/Footer';
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    getMusic() {
      this.$http
        .get('http://localhost:3000/song/url?id=33894312')
        .then((res) => {
          console.log(res);
        });
    },
  },
  created() {
    this.getMusic();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
