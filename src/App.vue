<template>
  <NavbarPage />
  <HeaderPage :hero-images="heroImages" />
  <LearningPage
    :learning-pages-data="learningPagesData"
    sub-title="Learnings"
    title="Online Learning Platform International Curriculum"
    desc="Study and understand the material class is more relaxed without time limit."
  />
  <AboutPage :about-image="aboutImage" />
  <PartnerPage :company-logo="companyLogo" />
  <AlumniPage :testimoni="testimoni" />
  <OfferPage />
  <FooterPage />
</template>

<script setup>
import NavbarPage from "./components/NavbarPage.vue";
import FooterPage from "./components/FooterPage.vue";
import AboutPage from "./components/AboutPage.vue";
import OfferPage from "./components/OfferPage.vue";
import HeaderPage from "./components/HeaderPage.vue";
import LearningPage from "./components/LearningPage.vue";
import PartnerPage from "./components/PartnerPage.vue";
import AlumniPage from "./components/AlumniPage.vue";
import aboutImg from "./assets/about.jpg";
import mobileHeader from "./assets/mobileheader.png";
import desktopHeader from "./assets/desktopheader.png";
import bootcampAvatar from "./assets/bootcamp.jpg";
import superstarAvatar from "./assets/superstar.jpg";
import starterAvatar from "./assets/starter.jpg";
import premiumAvatar from "./assets/premium.jpg";
import check from "./assets/check.svg";
import jason from "./assets/jason.png";
import jean from "./assets/jean.png";
import cassandra from "./assets/cassandra.png";
import peter from "./assets/peter.png";
import paypal from "./assets/paypal.png";
import amazon from "./assets/amazon.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import reddit from "./assets/reddit.png";
import redis from "./assets/redis.png";
import microsoft from "./assets/microsoft.png";
import medium from "./assets/medium.png";
const testimoni = [
  {
    src: jason,
    alt: "jason",
    name: "Jason Todd",
    job: "Enterpreneur",
    text: `"The mentor is cool, how to convey each material is also detailed and easy to understand.."`,
  },
  {
    src: cassandra,
    alt: "cassandra",
    name: "Cassandra K",
    job: "Web Designer",
    text: `"The mentor is cool, how to convey each material is also detailed and easy to understand.."`,
  },
  {
    src: peter,
    alt: "peter",
    name: "Peter Parker",
    job: "PHP Enthusiast",
    text: `"The mentor is cool, how to convey each material is also detailed and easy to understand.."`,
  },
  {
    src: jean,
    alt: "jean",
    name: "Jean Gray",
    job: "Designer",
    text: `"The mentor is cool, how to convey each material is also detailed and easy to understand.."`,
  },
];
const companyLogo = [
  {
    src: github,
    alt: "github",
  },
  {
    src: microsoft,
    alt: "microsoft",
  },
  {
    src: redis,
    alt: "redis",
  },
  {
    src: amazon,
    alt: "amazon",
  },
  {
    src: paypal,
    alt: "paypal",
  },
  {
    src: linkedin,
    alt: "linkedin",
  },
  {
    src: reddit,
    alt: "reddit",
  },
  {
    src: medium,
    alt: "medium",
  },
];
const aboutImage = [
  {
    src: aboutImg,
    alt: "about img",
  },
  {
    src: check,
    alt: "check svg",
  },
];
const heroImages = [
  {
    src: mobileHeader,
    alt: "mobile header",
  },
  {
    src: desktopHeader,
    alt: "desktop header",
  },
];
const learningPagesData = [
  {
    src: starterAvatar,
    alt: "starter avatar",
    title: "Starter",
    description: "Free class access for that start learning code and design",
  },
  {
    src: premiumAvatar,
    alt: "premium avatar",
    title: "Premium",
    description: "Advanced material from the Starter & learn to build projects",
  },
  {
    src: superstarAvatar,
    alt: "superstar avatar",
    title: "Superstar",
    description: "Materials for experts who have completed the premium package",
  },
  {
    src: bootcampAvatar,
    alt: "bootcamp avatar",
    title: "Bootcamp",
    description:
      "Informatics science training program with the latest material",
  },
];
</script>
