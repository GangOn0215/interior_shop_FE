<template>
  <div class="header__wrap">
    <div class="header__box">
      <!-- 햄버거 메뉴 버튼 -->
      <button class="header__toggle" @click="toggleMenu">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </button>

      <!-- 로고 -->
      <a v-show="!isMenuOpen" href="/index" class="header__logo">
        <img src="@/assets/logo.png" alt="Logo">
      </a>

      <!-- 네비게이션 메뉴 -->
      <nav :class="['header__nav', { open: isMenuOpen }]">
        <router-link v-for="(item, index) in mainMenu" :key="index" :to="{ path: item.path }"
          class="item header__link-item" active-class="router-link-active">
          <b>{{ item.title }}</b>
        </router-link>
      </nav>

      <!-- 로그인 버튼 -->
      <button v-if="header__login" class="header__login" @click="toggleLoginPopup">
        <i class="fas fa-user"></i>
      </button>
    </div>

    <!-- 로그인 팝업 (모달) -->
    <transition name="fade">
      <div v-show="isLoginPopupOpen" class="login-popup " @click.self="toggleLoginPopup">
        <div class="login-popup__content">
          <button class="login-popup__close" @click="toggleLoginPopup">&times;</button>
          <h2>로그인</h2>
          <form @submit.prevent="login">
            <div>
              <label for="username">아이디</label>
              <input type="text" id="username" v-model="username" required>
            </div>
            <div>
              <label for="password">비밀번호</label>
              <input type="password" id="password" v-model="password" required>
            </div>
            <!-- 로그인 버튼 -->
            <button type="submit">로그인</button>
            <a href="/register">회원가입</a>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { login } from '@/services/authService';

export default {
  name: 'cHeader',
  data() {
    return {
      mainMenu: [
        { title: '회사 소개 🏠', path: '/about' },
        { title: '시공 사례 🛠️', path: '/board' },
        { title: 'Q&A 🔎', path: '/qna' },
        { title: '문의하기 📞', path: '/contact' },
        { title: '고객 후기 📝', path: '/comunity' },
      ],
      isMenuOpen: false,
      isLoginPopupOpen: false,
      username: '',
      password: '',
      header__login: window.innerWidth > 762,
    };
  },
  methods: {
    updateWindowSize: function () {
      this.header__login = window.innerWidth > 762;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleLoginPopup() {
      this.isLoginPopupOpen = !this.isLoginPopupOpen;
    },
    async login() {
      try {
        const result = await login(this.username, this.password);
        alert(`로그인 성공: ${result}`);
        this.toggleLoginPopup();
      } catch (error) {
        alert('로그인 실패');
      }
    },
    closeOnEscape(event) {
      if (event.key === "Escape" && this.isLoginPopupOpen) {
        this.toggleLoginPopup();
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowSize);
    document.addEventListener("keydown", this.closeOnEscape);
  },
  beforeUnmount() {
    window.addEventListener("resize", this.updateWindowSize);
    document.removeEventListener("keydown", this.closeOnEscape);
  }
};
</script>


<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.header__wrap {
  background-color: #1e1e1e;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem 0;

  .header__box {
    min-height: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .header__logo {
      display: flex;
      align-items: center;

      img {
        height: 40px;
      }
    }

    .header__nav {
      display: flex;
      gap: 1.5rem;

      .header__link-item {
        text-decoration: none;
        font-size: 1.1rem;
        color: #f0f0f0;
        font-weight: 500;
        padding: 0.6rem 1.2rem;
        border-radius: 6px;
        transition: all 0.3s ease-in-out;
        position: relative;

        &:hover {
          color: #ffffff;
        }

        &.router-link-active {
          background-color: #ffc107;
          color: #1e1e1e;
          font-weight: 600;
          box-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
        }
      }

      @media (max-width: 768px) {
        display: none;
        flex-direction: column;
        gap: 1rem;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(30, 30, 30, 0.95); // 반투명 배경
        justify-content: center;
        align-items: center;
        z-index: 99;
        transition: all 0.3s ease-in-out;

        &.open {
          display: flex;
        }
      }
    }

    .header__toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      flex-direction: column;
      justify-content: space-around;
      width: 30px;
      height: 24px;
      padding: 0;
      z-index: 11;

      span {
        display: block;
        width: 100%;
        height: 3px;
        background: #f0f0f0;
        transition: all 0.3s ease-in-out;
      }

      span.open:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
        background: #ffffff;
      }

      span.open:nth-child(2) {
        opacity: 0;
      }

      span.open:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
        background: #ffffff;
      }

      @media (max-width: 768px) {
        display: flex;
        position: absolute;
        top: 5px;
        right: 1rem;
        z-index: 1000;
      }
    }

    .header__login {
      background: none;
      border: none;
      color: #f0f0f0;
      font-size: 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #ffc107;
      }

      i {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
      }
    }

  }

  .login-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    &__content {
      background: #fff;
      padding: 2rem;
      border-radius: 8px;
      position: relative;
      width: 90%;
      max-width: 400px;
    }

    &__close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      color: #333;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      div {
        display: flex;
        flex-direction: column;
      }

      label {
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      button {
        padding: 0.75rem;
        border: none;
        border-radius: 4px;
        background-color: #ffc107;

        color: #1e1e1e;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;

        &:hover {
          background-color: #ffce3a;
        }
      }

      a {
        text-align: center;
        color: #333;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: #666;
        }

      }
    }
  }
}
</style>
