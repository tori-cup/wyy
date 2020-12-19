<template>
  <div class="footer">
    <van-tabbar v-model="active" route>
      <!-- <van-tabbar-item badge="3">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item> -->
      <van-tabbar-item class="iconfont icon-yinle" to="/shouye"
        ><span>发现</span>
      </van-tabbar-item>
      <van-tabbar-item class="iconfont icon-A" to="/boke"
        ><span>播客</span>
      </van-tabbar-item>
      <van-tabbar-item class="iconfont icon-wode" to="/wode"
        ><span>我的</span>
      </van-tabbar-item>
      <van-tabbar-item class="iconfont icon-maikefeng-Kge-KTV-huatong" to="/kge"
        ><span>k歌</span>
      </van-tabbar-item>
      <van-tabbar-item class="iconfont icon-yun" to="/yuncun"
        ><span>云村</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: 23px;
  font-weight: 700;
  span {
    font-size: 13px;
  }
}
</style>
