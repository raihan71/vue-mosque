<template>
  <div>
   <Hero></Hero>
   <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="row justify-content-between">
          <div class="col-lg-5 d-flex align-items-center justify-content-center" data-aos="fade-up">
            <carousel :autoplay="true" :perPage=1>
              <slide v-for="img in images.slice(0, 3)" :key="img.key">
                <img :src="img.url" width="400" height="250">
              </slide>
            </carousel>
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">Kegiatan-kegiatan Masjid Kami</h3>
            <p data-aos="fade-up" data-aos-delay="100">
              Berikut beberapa kegiatan masjid kami
            </p>
            <div class="row">
              <div v-for="activity in activities" :key="activity.id" class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <i class="bx" :class="activity.icon"></i>
                <h4>{{activity.name}}</h4>
                <p>{{activity.desc}}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Fasilitas</h2>
          <p>Beberapa fasilitas masjid kami</p>
        </div>

        <div class="row">
          <div v-for="facility in facilities" :key="facility.key" class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx" :class="facility.icon"></i></div>
              <h4 class="title"><a href="javascript:;">{{facility.text}}</a></h4>
              <p class="description">{{facility.desc}}</p>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Services Section -->

    <!-- ======= Contact Us Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Hubungi Kami</h2>
          <p>Untuk saran atau kritik</p>
        </div>

        <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="info">
              <div class="address">
                <i class="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>{{profile.mosque.address}} {{profile.mosque.country}}</p>
              </div>

              <div class="email">
                <i class="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>{{profile.mosque.email}}</p>
              </div>

              <div class="phone">
                <i class="icofont-phone"></i>
                <h4>Call:</h4>
                <p>{{profile.mosque.phone}}</p>
              </div>

              <iframe :src="profile.mosque.location_maps" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <form action="mailto:profile.mosque.email" method="post" role="form" class="php-email-form">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Us Section -->

   </main>
  </div>
</template>

<script>
import firebase from 'firebase'
import facilities from '../constants/facilities'
import activities from '../constants/activities'
import profile from '../constants/profile'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Hero
  },
  data(){
    return {
      images: [],
      facilities: facilities,
      activities: activities,
      profile: profile
    }
  },
  methods: {
    getImages(){
      let i = 0;
      const storage = firebase.storage();
      const storageRef = storage.ref();
      storageRef.child('/').listAll().then((resp => {
        resp.items.forEach((imgRef) => {
          i++;
          this.displayImages(i,imgRef);
        });
      }));
    },
    displayImages(row,images){
      images.getDownloadURL().then((url) => {
        this.images.push({
          id: row,
          url: url
        });
      });
    }
  },
  created(){
    this.getImages();
  }
}
</script>

<style>
.VueCarousel-wrapper {
    width: 475px;
    height: 270px;
    position: relative;
    overflow: hidden;
}
</style>