<template>
  <main id="main">
    <section>
      <div class="container">
        <div class="row" data-aos="fade-up">
          <div class="col-md-12 mb-4">
            <div class="mb-4" data-aos="zoom-in" data-aos-delay="100">
              <h3 class="title my-4">{{kajian.title}}</h3>
              <h6 class="card-subtitle mb-2 text-muted">
                <span><i class="icofont-user-alt-1"></i> {{kajian.lecturer}}</span>
                <span class="ml-4"><i class="icofont-clock-time"></i> {{kajian.date}} : {{kajian.time}}</span>
              </h6>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" class="card mb-4 shadow-sm">
              <div class="card-body" v-html="kajian.desc">
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
  name: 'ShowKajian',
  data(){
    return {
      key:'',
      kajian: {},
      fs: firebase.firestore().collection('kajian')
    }
  },
  created(){
    const ref = this.fs.doc(this.$route.params.id);
    ref.get().then((doc) => {
      if(doc.exists){
        this.key = doc.id;
        this.kajian = doc.data()
      }else{
        this.$router.push({name:'Home'});
      }
    })
  }
}
</script>

<style>

</style>