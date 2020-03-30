<template>
   <main id="main">
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Kajian</h2>
            <p>Daftar pengajian terbaru</p>
          </div>
          <div class="row portfolio-container" data-aos="zoom-in">
            <div v-for="kajian in kajians" :key="kajian.key" class="col-lg-4 col-md-12 mb-4">
              <div class="card shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">{{kajian.title}}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    <small><i class="icofont-user-alt-1"></i> {{kajian.lecturer}}</small>
                    <small class="float-right"><i class="icofont-clock-time"></i> {{kajian.date}}:{{kajian.time}}</small>
                  </h6>
                  <p class="text-card text-justify">{{kajian.desc | truncate(200)}}</p>
                  <router-link :to="{name:'ShowKajian',params:{id:kajian.key}}" class="card-link">Baca selengkapnya</router-link>
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
  name: 'Kajian',
  data(){
    return {
      kajians: [],
      fs: firebase.firestore().collection('kajian')
    }
  },
  created(){
    this.fs.onSnapshot((query) => {
      this.kajians = [];
      query.forEach((doc) => {
        this.kajians.push({
          key: doc.id,
          title: doc.data().title,
          time: doc.data().time,
          lecturer: doc.data().lecturer,
          date: doc.data().date,
          desc: doc.data().desc.replace(/<[^>]+>/g,'')
        });
      })
    })
  }
}
</script>

<style>

</style>