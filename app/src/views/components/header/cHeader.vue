<template>
  <div class="header__wrap">
      <div class="header__box">
          <nav class="header__nav">
            <router-link v-for="(item, index) in mainMenu" :key="index" :to="{path: item.path}" class="item header__link-item" active-class="router-link-active">
              <b>{{ item.title }}</b>
            </router-link>
          </nav>
      </div>
  </div>
</template>

<script>
export default {
name: 'cHeader',
data () {
  return {
    mainMenu: [
      // {
      //   title: 'HOME',
      //   path: '/index'
      // },
      {
        title: '회사 소개 🏠',
        path: '/about'
      },
      {
        title: '시공 사례 🛠️',
        path: '/board'
      },
      {
        title: 'Q&A 🔎',
        path: '/qna'
      },
      {
        title: '문의하기 📞',
        path: '/contact'
      },
      {
        title: '고객 후기 📝',
        path: '/comunity'
      }
    ]
  }
},
created () {},
watch: {},
methods: {}
}
</script>

<style lang="scss" scoped>
.header__wrap {
  background-color: #1e1e1e; // 다크 그레이 배경 (너무 어둡지 않음)
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); // 살짝 그림자 효과
  padding: 1rem 0; // 상하 패딩

  .header__box {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .header__nav {
      display: flex;
      gap: 1.8rem; // 메뉴 간격

      .header__link-item {
        text-decoration: none;
        font-size: 1.1rem;
        color: #f0f0f0; // 기본 텍스트 색상 (연한 그레이)
        font-weight: 500;
        padding: 0.6rem 1.2rem;
        border-radius: 6px; // 둥근 모서리
        transition: all 0.3s ease-in-out;
        position: relative;

        // 기본 상태에서 밑줄 효과 추가
        &:after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: #ffc107; // 따뜻한 노란색 포인트
          transition: width 0.3s ease-in-out;
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
        }

        &:hover {
          color: #ffffff; // 호버 시 텍스트 색상 (순백색)
        }

        &:hover::after {
          width: 100%; // 밑줄 확장
        }

        &.router-link-active {
          background-color: #ffc107; // 활성 상태 배경 (노란색)
          color: #1e1e1e; // 활성 상태 텍스트 (다크 그레이)
          font-weight: 600;
          box-shadow: 0 0 10px rgba(255, 193, 7, 0.5); // 부드러운 빛 효과
        }
      }
    }
  }
}
</style>
