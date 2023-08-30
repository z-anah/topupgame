<template>
  <body class="font-nunito text-base text-black dark:text-white dark:bg-slate-900">

    <NavUI></NavUI>
    <section class="relative table w-full py-16">
      <div class="absolute inset-0 bg-black opacity-80"></div>
      <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 class="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Masukkan
            Player ID</h3>

          <div class="text-center subcribe-form mt-4 pt-2">
            <form class="relative mx-auto max-w-xl">
              <input type="text" id="help" name="name"
                class="pt-4 pr-40 pb-4 pl-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700"
                placeholder="Masukkan Player ID...">
              <!-- <button type="submit"
                                class="btn absolute top-[2px] right-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">Search</button> -->
            </form><!--end form-->
          </div>
        </div><!--end grid-->
      </div><!--end container-->

      <div class="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
        <ul class="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
          <li
            class="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
            Untuk menemukan ID Anda, klik pada ikon karakter. User ID tercantum di bawah nama karakter Anda.
            Contoh:
            '5363266446'.
          </li>
        </ul>
      </div>
    </section>

    <section class="relative md:py-24 py-16">
      <div class="container">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <!-- Content -->
          <div v-for="(item, index) in topupcats" :key="item.name" v-on:click="setTopUpCat(index)" 
          :class='`group relative px-6 py-10 shadow dark:shadow-gray-800 ${topupcat == index ? "shadow-md dark:shadow-gray-700 bg-indigo-600 dark:bg-indigo-600" : ""} transition-all duration-500 ease-in-out
            rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center`'>
            <div class="relative overflow-hidden text-transparent -m-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                :class='`feather feather-hexagon h-24 w-24 fill-indigo-600/5 ${topupcat == index ? "fill-white/10 mx-auto " : ""} mx-auto`'>
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                </path>
              </svg>
              <div
                :class='`absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto rounded-xl ${topupcat == index ? "text-white" : "text-indigo-600"} transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center`'>
                <img v-bind:src="require(`../assets/images/games/${game.name}/${item.img}`)" />
              </div>
            </div>

            <div class="mt-6">
              <p href="#"
                :class='`text-lg font-medium ${topupcat == index ? "text-white" : ""} transition-all duration-500 ease-in-out`'>
                {{ item.name }}
              </p>

            </div>
          </div>
          <!-- Content -->
        </div><!--end grid-->
      </div><!--end container-->

    </section>

    <section class="relative md:py-24 py-16">
      <div class="container">
        <div class="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-5 gap-[30px]">
          <!-- Content -->
          <div v-for="(item, index) in topupcats[topupcat].topups" :key="item.name" v-on:click="topupid = index"
           :class='`group relative px-6 py-10 shadow dark:shadow-gray-800 ${topupid == index ? "shadow-md dark:shadow-gray-700 bg-indigo-600 dark:bg-indigo-600" : ""} transition-all duration-500 ease-in-out
            rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center`'>
            <div class="relative overflow-hidden text-transparent -m-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              :class='`feather feather-hexagon h-24 w-24 fill-indigo-600/5 ${topupid == index ? "fill-white/10 mx-auto " : ""} mx-auto`'>
                    <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                </path>
              </svg>
              <div
                 :class='`absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto rounded-xl ${topupid == index ? "text-white" : "text-indigo-600"} transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center`'>
                  <img v-bind:src="require(`../assets/images/games/${game.name}/${item.img}`)" />
              </div>
            </div>

            <div class="mt-6">
              <p href="#"   :class='`text-lg font-medium ${topupid == index ? "text-white" : ""} transition-all duration-500 ease-in-out`'>
                {{ item.name }}
              </p>
              <p href="#"   :class='`text-lg font-medium ${topupid == index ? "text-white" : ""} transition-all duration-500 ease-in-out`'>
                Dari
              </p>
              <p href="#"   :class='`text-lg font-medium ${topupid == index ? "text-white" : ""} transition-all duration-500 ease-in-out`'>
                {{ item.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }) }}
              </p>

            </div>
          </div>
          <!-- Content -->
        </div><!--end grid-->
      </div><!--end container-->

    </section>

    <section class="relative table w-full py-16">
      <div class="absolute inset-0 bg-black opacity-80"></div>
      <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 class="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
            Masukkan detail Anda
          </h3>
          <p>Silahkan masukkan email Anda untuk menerima bukti pembelian Anda</p>

          <div class="text-center subcribe-form mt-4 pt-2">
            <form class="relative mx-auto max-w-xl">
              <input type="text" id="help" name="name"
                class="pt-4 pr-40 pb-4 pl-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700"
                placeholder="Masukkan Alamat Email...">
              <!-- <button type="submit"
                                class="btn absolute top-[2px] right-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">Search</button> -->
            </form><!--end form-->
          </div>
        </div><!--end grid-->
      </div><!--end container-->

      <div class="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
        <ul class="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
          <li
            class="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
            Untuk menemukan ID Anda, klik pada ikon karakter. User ID tercantum di bawah nama karakter Anda.
            Contoh:
            '5363266446'.
          </li>
        </ul>
      </div>
    </section>
  </body>
</template>

<script>
import NavUI from '@/components/NavUI.vue'

export default {
  components: {
    NavUI
  },
  methods:{
    setTopUpCat(index){
      this.topupid = 0;
      this.topupcat = index;
    }
  },
  data() {
    const id = this.$route.params.id;
    if (id >= 1 && id <= 3) {
      return {
        game: this.$store.state.games[this.$route.params.id - 1],
        topupcats: this.$store.state.games[this.$route.params.id - 1].topupcats,
        topupcat: 0,
        topupid: 0,
      }
    } else {
      this.$router.push('/');
      return {};
    }
  }
}
</script>