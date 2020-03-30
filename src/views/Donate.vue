<template>
  <main id="main">
    <section>
      <div class="container">
        <div class="row" data-aos="fade-up">
          <div class="col-md-12 mb-4" data-aos="zoom-in">
            <div class="card shadow-sm">
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p data-aos="zoom-in">
                    Dari Jabir bin ‘Abdillah radhiyallahu ‘anhu, Rasulullah shallallahu ‘alaihi wa sallam bersabda<br />
                    مَنْ بَنَى مَسْجِدًا لِلَّهِ كَمَفْحَصِ قَطَاةٍ أَوْ أَصْغَرَ بَنَى اللَّهُ لَهُ بَيْتًا فِى الْجَنَّةِ<br />
                    Siapa yang membangun masjid karena Allah walaupun hanya selubang tempat burung bertelur atau lebih kecil, maka Allah bangunkan baginya (rumah) seperti itu pula di surga.
                  </p>
                  <footer data-aos="zoom-in" class="blockquote-footer">HR. Ibnu Majah no. 738</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div class="col-md-12 mb-4" data-aos="zoom-in">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">
                  <span class="text-secondary">Jadi mau bangun rumah di surga engga? </span>
                  <span class="text-dark">Yuk mari berdonasi melalui rekening dibawah</span>
                </h5>
                <div class="card text-white bg-info mb-3">
                  <div class="card-body text-justify">
                    BANK : {{donasi.bank}}<br />
                    NOREK : {{donasi.norek}}<br />
                    A/N : {{donasi.an}}<br />
                  </div>
                </div>
                <h5 class="card-title">
                  Kami ucapakan Jazakallahu khoiron (semoga Allah membalasmu dengan kebaikan). Aamiin.
                </h5>
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
import ids from '../constants/ids'
export default {
  name: 'Donate',
  data(){
    return {
      donasi: {},
      fs: firebase.firestore().collection('donate')
    }
  },
  created(){
    const ref = this.fs.doc(ids.DonateId);
    ref.get().then((doc) => {
      if(doc.exists){
        this.donasi = doc.data()
      }else{
        this.$router.push({name:'Home'});
      }
    })
  }
}
</script>

<style>

</style>