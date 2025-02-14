<template>
  <div class="main">
      <c-header></c-header>
      <router-view></router-view>
      <c-footer></c-footer>
    </div>
</template>

<script>
import cHeader from '@/views/components/header/cHeader.vue'
import cFooter from '@/views/components/footer/cFooter.vue'

export default {  
  name: 'pUserMainView',
  components: { cHeader, cFooter },
  data () {
    return {
      message: 'p User Main View'
    }
  }
}
</script>

<style lang="scss" scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>
