<template>
  <div>
    <NavBar />

    <div class="container mt-4">
      <transition name="slide-up">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style scoped>
    .slide-up-enter-active{
      transition: all 0.5s ease;
    }

     .slide-up-leave-active{
        transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      }

      .slide-up-enter,
      .slide-up-leave-to{
        transform: translateY(10vh);
        opacity: 0;
      }
</style>