import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import Swiper from "swiper/bundle";

const recommendDta = ["酒精路跑地圖","台北拉麵圖鑑","海島自由行","短天數出國推薦","週末露營趣 "]

const articlesSswiper = new Swiper(".articles-swiper", {
  slidesPerView: 1.2,
  spaceBetween:24,
  pagination: {
    el: ".articles-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".articles-btn-next",
    prevEl: ".articles-btn-prev",
  },
  scrollbar: {
    el: ".articles-scrollbar",
    hide: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween:48,
    },
  },
});

const recommendSwiper = new Swiper(".recommend-swiper",{
  pagination: {
    el: ".recommend-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + recommendDta[index] + "</li>";
    },
  },
})

const themeSwiper = new Swiper(".theme-swiper",{
  navigation: {
    nextEl: '.theme-btn-next',
    prevEl: '.theme-btn-prev',
  },
  scrollbar: {
    el: '.theme-scrollbar',
    hide:false,
    lockClass:"d-block"
  },
  breakpoints: {
    slidesPerView: 1,
    992:{
      slidesPerView: 3,
      spaceBetween:24,
    }
  }
  
})

const subscribeSwiper = new Swiper(".subscribe-swiper",{
  navigation: {
    nextEl: '.subscribe-btn-next',
    prevEl: '.subscribe-btn-prev',
  },
  breakpoints: {
    slidesPerView: 1.2,
    spaceBetween:24,
    992:{
      slidesPerView: 2,
      spaceBetween:0,
      
    }
  }
})