import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 라우터 설정 파일의 경로 확인

createApp(App)
  .use(router)  // Vue Router 플러그인 등록
  .mount('#app')