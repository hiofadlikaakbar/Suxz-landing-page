<template>
  <header class="pb-32">
    <nav
      :class="{
        'bg-[#f7f7ff]/50 backdrop-blur-md': isScrolled,
        'bg-transparent': !isScrolled,
      }"
      class="p-5 xl:px-7 w-full fixed z-50"
      style="transition: background-color 0.3s ease-in-out"
    >
      <div class="flex container justify-between mx-auto items-center">
        <div class="flex items-center gap-14">
          <img :src="logo" alt="suxz" class="lg:scale-110" />
          <ul class="hidden lg:flex gap-12 lg:mt-[2px]">
            <li v-for="(link, index) in links" :key="index">
              <a
                :href="link.href"
                class="text-colorNav font-bold hover:text-secondaryPurple duration-300 ease-in-out"
                >{{ link.label }}</a
              >
            </li>
          </ul>
        </div>
        <div class="relative z-50">
          <ul class="lg:flex hidden mt-[2px] items-center gap-9">
            <li>
              <a href="#" class="font-semibold text-secondaryPurple">Log in</a>
            </li>
            <button
              type="button"
              class="px-7 py-[0.63rem] rounded-lg font-semibold text-white bg-secondaryPurple duration-200 ease-in-out hover:bg-[#F7F7FD] hover:text-slate-400"
            >
              Sign up
            </button>
          </ul>
          <button @click="toggleNav" class="block lg:hidden focus:outline-none">
            <img :src="burgerMenu" alt="burger" ref="burger" />
          </button>
        </div>

        <!-- mobile nav -->
        <ul
          :class="showMenu ? 'right-0 grid' : 'right-[-100%] grid opacity-0'"
          class="h-screen w-[60%] md:w-1/2 fixed duration-500 lg:hidden ease-in-out content-center space-y-8 md:space-y-12 top-0 right-0 pl-[1.19rem] xs:pl-6 bg-white md:pl-12 shadow-xl"
        >
          <li v-for="(link, index) in links" :key="index">
            <a
              :href="link.href"
              class="text-colorNav font-semibold md:text-lg"
              >{{ link.label }}</a
            >
          </li>
          <li>
            <a
              href="#"
              class="font-semibold block text-center text-secondaryPurple"
              >Log in</a
            >
          </li>
          <li class="text-center">
            <a
              href="#"
              class="text-white bg-secondaryPurple rounded-lg md:py-3 px-7 md:px-20 xs:px-12 py-2 font-semibold"
              >Sign up</a
            >
          </li>
        </ul>
        <div
          :class="showMenu ? 'left-0 opacity-100' : 'left-[-100%] opacity-0'"
          class="bg-black/60 lg:hidden md:w-1/2 left-0 z-50 duration-500 ease-in-out fixed top-0 w-[40%] h-screen"
        ></div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import burgerMenu from "../assets/navbar.svg";
import closeMenu from "../assets/close.svg";
import logo from "../assets/logo.svg";
import { ref, onMounted, onUnmounted } from "vue";

const burger = ref(null);
const showMenu = ref(false);
const toggleNav = () => {
  showMenu.value = !showMenu.value;
  burger.value.src = showMenu.value ? closeMenu : burgerMenu;
};

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const links = [
  { label: "Home", href: "#" },
  { label: "Learnings", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Testimonial", href: "#" },
];
</script>
