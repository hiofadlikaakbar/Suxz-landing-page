<template>
  <div class="container mx-auto pb-10 px-5 xs:px-3 md:px-6 lg:px-0">
    <div class="flex flex-col md:flex-row items-center justify-center">
      <!-- img -->
      <div class="mb-10 lg:mb-0 md:w-1/2 md:order-2">
        <img
          :src="heroImages[0].src"
          :alt="heroImages[0].alt"
          class="mx-auto md:hidden"
        />
        <img
          :src="heroImages[1].src"
          :alt="heroImages[1].alt"
          class="mx-auto hidden md:block md:scale-110 xl:scale-100"
        />
      </div>
      <!-- text -->
      <div class="md:w-1/2 lg:w-[43%] xl:w-[42%] md:order-1">
        <h5
          class="uppercase text-sm mb-2 tracking-widest font-bold 2xl:text-xl md:text-base lg:text-lg text-secondaryPurple"
        >
          suxz make it easy
        </h5>
        <h1
          class="text-3xl md:text-5xl text-heroSlate 2xl:text-7xl 2xl:max-w-xl 2xl:leading-[5.5rem] xl:text-6xl xl:leading-[4.8rem] xl:max-w-md md:max-w-md md:leading-[3.7rem] lg:max-w-sm font-extrabold mb-7"
        >
          Find Your Way Of Success
        </h1>
        <p
          class="text-base md:text-lg font-semibold xl:text-xl 2xl:text-2xl 2xl:max-w-[34rem] 2xl:leading-10 leading-relaxed xl:leading-9 max-w-md mb-7 text-heroSlate"
        >
          We help you to increase self-confidence and train yourself in a
          direction, and make you more creative in developing a work
        </p>
        <div class="flex gap-3 xs:gap-5 lg:gap-7">
          <a
            href="#"
            class="block px-5 xs:px-6 md:px-9 rounded-lg py-3 md:py-4 duration-300 ease-in-out hover:bg-[#F7F7FD] hover:text-slate-400 font-semibold bg-secondaryPurple text-white"
            >Get Started</a
          >
          <a
            href="#"
            class="block px-5 xs:px-6 md:px-9 hover:text-white rounded-lg py-3 md:py-4 font-semibold duration-300 ease-in-out hover:bg-secondaryPurple bg-[#F7F7FD] text-slate-400"
            >Our Services</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  heroImages: {
    type: Array,
    required: true,
  },
});
</script>
