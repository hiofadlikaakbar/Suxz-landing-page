<template>
  <div class="container mx-auto py-16 px-5 xl:px-10">
    <div class="text-center mb-20">
      <h5
        class="uppercase text-sm mb-2 tracking-widest font-bold 2xl:text-xl md:text-base lg:text-lg text-secondaryPurple"
      >
        TESTIMONIAL
      </h5>
      <h2
        class="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl mb-6 text-heroSlate font-extrabold"
      >
        OUR ALUMNI SAY
      </h2>
      <p
        class="text-heroSlate md:text-lg lg:text-xl 2xl:text-2xl text-base font-semibold mb-9"
      >
        These are the words of people who have taken our class
      </p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-12 gap-20 items-center"
    >
      <div
        v-for="(testimony, index) in testimonies"
        :key="index"
        class="border relative py-12 px-8 border-secondaryPurple rounded-lg"
      >
        <img
          :src="testimony.src"
          :alt="testimony.alt"
          class="absolute -top-10 left-0 right-0 mx-auto"
        />
        <div class="pt-8">
          <h1 class="text-2xl text-heroSlate text-center mb-2 font-extrabold">
            {{ testimony.name }}
          </h1>
          <h3
            class="text-slate-400 text-base lg:text-lg text-center font-semibold mb-8"
          >
            {{ testimony.job }}
          </h3>
          <p
            class="text-base text-center lg:text-lg leading-relaxed text-heroSlate font-semibold"
          >
            {{ testimony.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  testimoni: {
    type: Array,
    required: true,
  },
});
const testimonies = [
  {
    src: props.testimoni[0].src,
    alt: props.testimoni[0].alt,
    name: props.testimoni[0].name,
    job: props.testimoni[0].job,
    text: props.testimoni[0].text,
  },
  {
    src: props.testimoni[1].src,
    alt: props.testimoni[1].alt,
    name: props.testimoni[1].name,
    job: props.testimoni[1].job,
    text: props.testimoni[1].text,
  },
  {
    src: props.testimoni[2].src,
    alt: props.testimoni[2].alt,
    name: props.testimoni[2].name,
    job: props.testimoni[2].job,
    text: props.testimoni[2].text,
  },
  {
    src: props.testimoni[3].src,
    alt: props.testimoni[3].alt,
    name: props.testimoni[3].name,
    job: props.testimoni[3].job,
    text: props.testimoni[3].text,
  },
];
</script>
