<template>
  <main id="main">
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>Pengumuman</h2>
          <p>Daftar pengumuman terbaru dibawah ini</p>
        </div>
        <div class="row portfolio-container" data-aos="zoom-in">
          <div v-for="news in newses" :key="news.key" class="col-lg-4 col-md-12 mb-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">{{news.title}}</h5>
                <p class="text-card text-justify">{{news.desc | truncate(190)}}</p>
                <router-link :to="{name:'ShowInfo',params:{id:news.key}}" class="card-link">Baca selengkapnya</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Info',
  data(){
    return {
      newses: [],
      fs: firebase.firestore().collection('news')
    }
  },
  created(){
    this.fs.onSnapshot((query) => {
      this.newses = [];
      query.forEach((doc) => {
        this.newses.push({
          key: doc.id,
          title: doc.data().title,
          desc: doc.data().desc.replace(/<[^>]+>/g,'')
        })
      })
    })
  }
}
</script>

<style>

</style>