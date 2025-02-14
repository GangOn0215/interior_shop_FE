

<template>
  <div class="main__container">
    <div class="main__content">
      <div class="main__left">
        <swiper class="main__swiper" 
          :modules="modules" 
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }" 
          :navigation="true"
          :pagination="{ clickable: true, dynamicBullets: true }" 
          :slides-per-view="1"
          :space-between="0"
          :simulateTouch="true"
          :touchEventsTarget="'container'"
          @swiper="onSwiper" 
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(image, index) in images" :key="index">
            <img :src="image" class="main__image" />
          </swiper-slide>
        </swiper>
      </div>

      <div class="main__right">
        <h2>Project by</h2>
        <h1 class="title">apply the design group</h1>
        <p class="desc">"디자인의 가치" 어플라이 더 디자인 그룹이 추구하는 방향입니다.</p>
        <button class="main__button">프로젝트 바로가기</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/scss/main.scss';

import img1_1 from '@/assets/images/main_bg_1_1.png';
import img1_2 from '@/assets/images/main_bg_1_2.png';
import img2_1 from '@/assets/images/main_bg_2_1.png';
import img2_2 from '@/assets/images/main_bg_2_2.png';
import img3_1 from '@/assets/images/main_bg_3_1.png';
import img3_2 from '@/assets/images/main_bg_3_2.png';

const modules = ref([Navigation, Pagination, Autoplay, Scrollbar]);

const images = ref([
  img1_1,
  img1_2,
  img2_1,
  img2_2,
  img3_1,
  img3_2
]);

const onSwiper = (swiper) => {
  console.log('Swiper instance:', swiper);
  nextTick(() => {
    swiper.update();
  });
};

const onSlideChange = (swiper) => {
  console.log('Slide changed to:', swiper.activeIndex);
};

onMounted(() => {
  console.log('MainContainer mounted');
});


</script>


<style scoped>
</style>
