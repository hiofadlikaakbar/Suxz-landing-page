<template>
  <div class="container mx-auto pt-24 pb-20 2xl:pb-10 px-5 lg:px-12">
    <div class="flex-col lg:flex-row lg:flex items-start justify-between">
      <div class="lg:w-1/2" data-aos="zoom-in-right" data-aos-offset="670">
        <img
          :src="aboutImage[0].src"
          :alt="aboutImage[0].alt"
          class="mx-auto lg:mx-0"
        />
      </div>
      <div
        class="lg:w-[44%] 2xl:w-1/2"
        data-aos="zoom-in-left"
        data-aos-offset="670 "
      >
        <h5
          class="uppercase text-sm mb-2 tracking-widest font-bold 2xl:text-xl md:text-base lg:text-lg text-secondaryPurple"
        >
          about us
        </h5>
        <h2
          class="text-2xl md:text-3xl xl:leading-[3rem] xl:max-w-md 2xl:max-w-lg 2xl:leading-[4rem] lg:text-4xl 2xl:text-5xl mb-6 text-heroSlate font-extrabold"
        >
          We Help Improve Your Work Experience
        </h2>
        <p
          class="text-heroSlate md:text-lg lg:text-xl 2xl:text-2xl 2xl:max-w-lg 2xl:leading-10 max-w-sm md:leading-relaxed text-base font-semibold mb-9"
        >
          We help you to increase self-confidence and train yourself in a
          direction.
        </p>
        <div>
          <div class="flex items-center gap-4 mb-7 xl:mb-9">
            <img :src="aboutImage[1].src" :alt="aboutImage[1].alt" />
            <p
              class="text-heroSlate md:text-lg lg:text-xl text-base font-semibold"
            >
              Study and produce creation to get a job
            </p>
          </div>
          <div class="flex items-center gap-4 mb-7 xl:mb-9">
            <img :src="aboutImage[1].src" :alt="aboutImage[1].alt" />
            <p
              class="text-heroSlate md:text-lg lg:text-xl text-base font-semibold"
            >
              Up to date material and created by expert creators
            </p>
          </div>
          <div class="flex items-center gap-4">
            <img :src="aboutImage[1].src" :alt="aboutImage[1].alt" />
            <p
              class="text-heroSlate md:text-lg lg:text-xl text-base font-semibold"
            >
              Complete classes and projects and get a certificate from us
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  aboutImage: {
    type: Array,
    required: true,
  },
});
</script>
