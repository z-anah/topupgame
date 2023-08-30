  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
<template>
  <body class="font-nunito text-base text-black dark:text-white dark:bg-slate-900">

    <NavUI></NavUI>
    <section class="relative mt-20">
      <div class="container">
        <div class="relative pt-28 pb-24 table w-full rounded-2xl overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <img src="../assets/images/games/pubg.png">
          </div>
          <!-- <div class="absolute inset-0 bg-black/50"></div> -->
          <!-- <div class="container">
            <div class="grid grid-cols-1">
              <div class="md:text-left text-center">
                <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Discover Most
                  Suitable <br> Properties</h1>
                <p class="text-white/70 text-xl max-w-xl">Start working with Tailwind CSS that can provide everything you
                  need to generate awareness, drive traffic, connect.</p>
              </div>
            </div>
          </div> -->
        </div>
      </div><!--end Container-->
    </section><!--end section-->
    <section class="relative md:py-24 py-16">
      <div class="container">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <!-- Content -->
          <div v-for="(item) in games" :key="item.name"
            class="group relative px-6 py-10 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
            <div class="relative overflow-hidden text-transparent -m-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto">
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                </path>
              </svg>
              <div
                class="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                <img v-bind:src="require('../assets/images/games/' + item.img)" />
              </div>
            </div>

            <div class="mt-6">
              <router-link :to="{ name: 'game', params: { id: item.id } }">
                <p href="#" class="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">
                  {{ item.name }}
                </p>
              </router-link>

            </div>
          </div>
          <!-- Content -->
        </div><!--end grid-->
      </div><!--end container-->

    </section>
  </body>
</template>

<script>
// @ is an alias to /src
import NavUI from '@/components/NavUI.vue'

export default {
  name: 'HomeView',
  components: {
    NavUI
  },
  data() {
    return {
      games: this.$store.state.games,
    }
  }
}
</script>
