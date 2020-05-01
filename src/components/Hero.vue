<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
          <h1>{{profile.mosque.name}}</h1>
          <h2>Berlokasikan di {{profile.mosque.address}} {{profile.mosque.country}}</h2>
          <router-link :to="{name:'Donate'}" class="btn-get-started scrollto">Bantu Kami</router-link>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img">
          <img src="../assets/masjid.png" class="img-fluid animated float-right" height="300" width="300" alt="">
        </div>
      </div>
    </div>

  </section><!-- End Hero -->
</template>

<script>
import profiles from '@/constants/profile'
export default {
  name: 'Hero',
  data(){
    return {
      profile: profiles
    }
  }
}
</script>

<style>

</style>