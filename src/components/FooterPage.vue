<template>
  <div class="container mx-auto pt-16 pb-10">
    <div
      class="flex gap-10 flex-col lg:flex-row justify-between px-5 xl:px-10 items-start"
    >
      <div class="lg:w-1/3 lg:-mt-2">
        <img :src="logo" alt="suxz" class="mb-7 xl:scale-110" />
        <p class="text-base font-semibold md:text-lg xl:text-xl text-heroSlate">
          For more information about our online course platform, you will
          discover an engaging and interactive learning experience.
        </p>
      </div>
      <div
        class="flex-col flex lg:w-1/2 justify-center gap-10 lg:gap-28 lg:flex-row"
      >
        <ul class="flex-col flex gap-5 mb-5 md:mb-0">
          <li class="text-xl md:text-2xl text-heroSlate font-bold xl:text-3xl">
            Company
          </li>
          <li>
            <a
              href="#"
              class="text-base text-heroSlate font-semibold md:text-lg xl:text-xl hover:text-secondaryPurple ease-in-out duration-300"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-base text-heroSlate font-semibold md:text-lg xl:text-xl hover:text-secondaryPurple ease-in-out duration-300"
              >Blogs</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-base text-heroSlate font-semibold md:text-lg xl:text-xl hover:text-secondaryPurple ease-in-out duration-300"
              >Carrers</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-base text-heroSlate font-semibold md:text-lg xl:text-xl hover:text-secondaryPurple ease-in-out duration-300"
              >Portfolios</a
            >
          </li>
        </ul>
        <ul class="flex-col flex gap-5 mb-5 md:mb-0">
          <li class="text-xl text-heroSlate font-bold md:text-2xl xl:text-3xl">
            Links
          </li>
          <li>
            <a
              href="#"
              class="text-base text-heroSlate xl:text-xl font-semibold md:text-lg hover:text-secondaryPurple ease-in-out duration-300"
              >Privacy & Policy</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-base text-heroSlate xl:text-xl font-semibold md:text-lg hover:text-secondaryPurple ease-in-out duration-300"
              >Github</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-base text-heroSlate xl:text-xl font-semibold md:text-lg hover:text-secondaryPurple ease-in-out duration-300"
              >Supports</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-base text-heroSlate xl:text-xl font-semibold md:text-lg hover:text-secondaryPurple ease-in-out duration-300"
              >FAQs</a
            >
          </li>
        </ul>
      </div>
      <div class="lg:w-1/3">
        <ul class="flex-col flex gap-5">
          <li class="text-xl md:text-2xl xl:text-3xl text-heroSlate font-bold">
            Contact
          </li>
          <li
            class="text-base xl:text-xl flex gap-3 items-center md:text-lg text-secondaryPurple font-semibold"
          >
            <img :src="phone" alt="phone" />
            <p>(021) 31048184</p>
          </li>
          <li
            class="text-base xl:text-xl flex gap-3 items-center md:text-lg text-secondaryPurple font-semibold"
          >
            <img :src="email" alt="phone" />
            <p>(021) 31048184</p>
          </li>
          <li
            class="text-base xl:text-xl text-heroSlate md:text-lg max-w-sm font-semibold"
          >
            Jl. Narogong. Perum Cileungsi Elok Blok A No.5. Jakarta Selatan.
            12240.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/logo.svg";
import phone from "../assets/telephone.svg";
import email from "../assets/email.svg";
</script>
