<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props:['list'],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
  watch:{
    list:{
        //立即监听,无论数据是否发生变化
        //watch直接监听不到的原因,是因为数据是否父组件传递的，根本没有发生变化
        immediate:true,
        handler(){
           //只能监听到数据已经有了,但是v-for动态渲染结构还是没有办法确定,因此还是需要nextTick
           this.$nextTick(()=>{
            var mySwiper = new Swiper(this.$refs.cur, {
            loop: true, // 循环模式选项
            pagination: {
              el: ".swiper-pagination", //换页器与哪个标签关联
              clickable: true, //分页器是否可以点击
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            //autoplay:true  自动播放
          });
           })
        }
    }
   }
};
</script>

<style lang="scss" scoped>
</style>