
<template>
  <div class="main__container">
    <div class="main__content">
      <!-- 
      <div class="main__left">
      </div>
      <div class="main__right">
      </div> 
      -->
      <div class="main__center">
        <h1>{{ message }}</h1>
      </div>
    </div>
  </div>
</template>


<script>
import '@/scss/main.scss';

export default {
  name: 'MainContainer',
  data () {
    return { 
      message: 'containers / Main Container'
    } 
  }
}
</script>

<style scoped>
</style>
