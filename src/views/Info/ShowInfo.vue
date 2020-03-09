<template>
  <main id="main">
    <section>
      <div class="container">
        <div class="row" data-aos="fade-up">
          <div class="col-md-12 mb-4">
            <div class="mb-4" data-aos="zoom-in">
              <h3 class="title my-4">{{news.title}}</h3>
            </div>
            <div data-aos="zoom-in" class="card mb-4 shadow-sm">
              <div class="card-body" v-html="news.desc">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'ShowInfo',
  data(){
    return {
      news: {},
      key: '',
      fs: firebase.firestore().collection('news')
    }
  },
  created(){
    const ref = this.fs.doc(this.$route.params.id);
    ref.get().then((doc) => {
      if(doc.exists){
        this.key = doc.id;
        this.news = doc.data();
      }else{
        this.$router.push({name:'Home'});
      }
    })
  }
}
</script>

<style>

</style>