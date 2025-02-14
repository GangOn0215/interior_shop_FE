<template>
  <div class="member__container">
    <div class="member__box">
      {{ message }}
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberContainer',
  data () {
    return {
      message: 'containers / Member Container'
    }
  },
  created () {

  },
  methods: {

  }

}
</script>

<style scoped>
</style>
