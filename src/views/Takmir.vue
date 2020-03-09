<template>
  <main id="main">
    <!-- ======= Team Section ======= -->
    <section id="team" class="team">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Takmir</h2>
          <p>Daftar takmir masjid/pengurus masjid (DKM)</p>
        </div>

        <div class="row">

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/person.png" width="600" height="600" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{{takmir.penasehat}}</h4>
                  <span>Penasehat</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/person.png" width="600" height="600" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{{takmir.ketua}}</h4>
                  <span>Ketua</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/person.png" width="600" height="600" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{{takmir.wakil_ketua}}</h4>
                  <span>Wakil Ketua</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/person.png" width="600" height="600" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{{takmir.bendahara}}</h4>
                  <span>Bendahara</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/person.png" width="600" height="600" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{{takmir.sekretaris}}</h4>
                  <span>Sekretaris</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/person.png" width="600" height="600" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{{takmir.penasehat}}</h4>
                  <span>Penasehat</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/person.png" width="600" height="600" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{{takmir.penasehat}}</h4>
                  <span>Penasehat</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/person.png" width="600" height="600" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{{takmir.penasehat}}</h4>
                  <span>Penasehat</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/person.png" width="600" height="600" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{{takmir.penasehat}}</h4>
                  <span>Penasehat</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/person.png" width="600" height="600" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{{takmir.penasehat}}</h4>
                  <span>Penasehat</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/person.png" width="600" height="600" class="img-fluid" alt="">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>{{takmir.penasehat}}</h4>
                  <span>Penasehat</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Team Section -->
  </main>
</template>

<script>
import ids from '../constants/ids'
import firebase from 'firebase'
export default {
  name: 'Takmir',
  data(){
    return {
      takmir: {},
      fs: firebase.firestore().collection('takmir')
    }
  },
  created(){
    const ref = this.fs.doc(ids.TakmirId);
    ref.get().then((doc) => {
      if(doc.exists){
        this.takmir = doc.data()
      }else{
        this.$router.push({name:'Home'})
      }
    })
  }
}
</script>

<style>

</style>