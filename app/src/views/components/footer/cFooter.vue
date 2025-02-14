<template>
  <footer class="footer__wrap">
    <div class="footer__box">
      <!-- 좌측: 회사 정보 -->
      <div class="footer__info">
        <div class="footer__title">{{ companyInfo.name }}</div>
        <div class="footer__text">대표: {{ companyInfo.ceo }}</div>
        <div class="footer__text">TEL: {{ companyInfo.tel }}</div>
        <div class="footer__text">Email: {{ companyInfo.email }}</div>
        <div class="footer__text">서울 주소: {{ companyInfo.address.seoul }} </div>
        <div class="footer__text">대구 주소: {{ companyInfo.address.daegu }} </div>
      </div>

      <!-- 우측: 네비게이션 링크 -->
      <nav class="footer__nav">
        <a href="#" class="footer__link">이용약관</a>
        <a href="#" class="footer__link">개인정보처리방침</a>
        <a href="#" class="footer__link">고객센터</a>
      </nav>
    </div>

    <!-- 저작권 정보 -->
    <div class="footer__copyright">© 2024 YourCompany. All Rights Reserved.</div>
  </footer>
</template>

<script>
export default {
  name: 'cFooter',
  data () {
    return {
      companyInfo: {
        name: '세진 설비',
        ceo: '정한필',
        tel: '053-986-3707',
        cellphone: '010-0000-0000',
        email: 'aaaa@gmail.com',
        address: {
          seoul: '서울시 강남구 역삼동 123-456',
          daegu: '대구시 수성구 수성동 789-123'
        }
      },
      message: ''
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
/* 전체 페이지를 flex 컨테이너로 설정 */
.main__container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 화면 전체 높이 */
}

/* 메인 콘텐츠 영역 */
.main__content {
  flex: 1; /* 남은 공간을 차지하여 footer를 아래로 밀어냄 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Footer 스타일 */
.footer__wrap {
  background-color: #1e1e1e; // 다크 그레이 배경
  padding: 2rem 0;
  color: #f0f0f0; // 기본 텍스트 색상
  font-size: 0.9rem;
  width: 100%;
  position: relative; /* 기본적으로 일반 배치 */

  .footer__box {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }

  /* 회사 정보 (좌측) */
  .footer__info {
    flex: 1; /* 50% 너비 */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .footer__title {
      font-size: 1.1rem;
      font-weight: bold;
      color: #ffc107; /* 강조 색상 */
    }

    .footer__text {
      font-size: 0.85rem;
      color: #b0b0b0; /* 흐린 회색 */
    }
  }

  /* 네비게이션 링크 (우측) */
  .footer__nav {
    flex: 1; /* 50% 너비 */
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 768px) {
      align-items: center;
      margin-top: 1rem;
    }

    .footer__link {
      text-decoration: none;
      color: #f0f0f0;
      font-weight: 500;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #ffc107; /* 호버 시 노란색 강조 */
      }
    }
  }

  /* Footer 하단 카피라이트 */
  .footer__copyright {
    text-align: center;
    font-size: 0.8rem;
    color: #b0b0b0; /* 흐린 회색 */
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1); /* 상단 구분선 */
  }
}

/* 화면 크기가 작을 때 footer가 고정되도록 설정 */
@media (max-height: 500px) {
  .footer__wrap {
    position: fixed;
    bottom: 0;
  }
}
</style>