<template>
  <div class="bg-secondaryBg">
    <div class="container mx-auto px-5 lg:px-0 py-16">
      <h1
        class="text-2xl md:text-3xl text-heroSlate mb-7 text-center font-extrabold lg:text-4xl 2xl:text-5xl"
      >
        Companies That Recruit Our Graduates
      </h1>
      <p
        class="text-base md:text-lg 2xl:text-2xl font-semibold text-center mb-14 lg:text-xl"
      >
        Our graduates have worked in more than 400 companies around the World
      </p>
      <div class="grid items-center grid-cols-2 md:grid-cols-4 gap-14">
        <div v-for="(logo, index) in companyLogo" :key="index">
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="mx-auto scale-75 xl:scale-90"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  companyLogo: {
    type: Array,
    required: true,
  },
});
</script>
