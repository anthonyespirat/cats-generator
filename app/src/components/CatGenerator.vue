<script>
  export default {
    data() {
      return {
        imgBaseUrl : 'http://127.0.0.1:3000/images/',
        cat: 'cathero.jpg'
      }
    },
    methods : {
      generateOneCat : async function () {
        const res = await fetch('http://127.0.0.1:3000/cat')
        const json = await res.json();
        this.cat = `${this.imgBaseUrl}${json[0].url}`
      },
      tenCats: function () {
        this.cat = '10cats.jpg'
      }
    }
  }

</script>

<template>
  <div class="home container col-xxl-8 px-lg-4 py-2 pt-lg-5">
    <div class="row flex-lg-row-reverse align-items-center">
      <div class="col-12 pb-3 pb-lg-0 col-lg-6">
        <img :src="cat" class="d-block rounded-3 img-fluid custom" alt="The Cat Hero" width="700" height="500" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Generate Random Cat Image</h1>
        <p class="lead">
          Be careful, it's addictive ! Never stop generate some cute cat.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" v-on:click="generateOneCat" class="btn btn-primary btn-lg px-4 me-md-2">Generate One Cat</button>
          <button type="button" v-on:click="tenCats" class="btn btn-outline-secondary btn-lg px-4">Generate 10 cats</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .custom {
    max-height: 500px;
    min-height: 500px;
    object-fit: contain;
  }
  .home {
    max-height: 100vh;
    min-height: 100vh;
    box-sizing: border-box;
  }
  .fix {
    max-width: 100%;
  }
</style>