<template>
  <!-- ======= Footer ======= -->
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact" data-aos="fade-up" data-aos-delay="100">
            <img src="../assets/image003.png" class="img-fluid img-responsive" width="50">
            <p>
              {{profile.mosque.name}} <br>
              {{profile.mosque.address}}<br>
              {{profile.mosque.country}} <br><br>
              <strong>Phone:</strong> {{profile.mosque.phone}}<br>
              <strong>Email:</strong> {{profile.mosque.email}}<br>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="200">
            <h4>Menu Lainnya</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <router-link :to="{name:'Home'}">Beranda</router-link></li>
              <li><i class="bx bx-chevron-right"></i> <router-link :to="{name:'Info'}">Pengumuman</router-link></li>
              <li><i class="bx bx-chevron-right"></i> <router-link :to="{name:'Kajian'}">Kajian</router-link></li>
              <li><i class="bx bx-chevron-right"></i> <router-link :to="{name:'Gallery'}">Galeri</router-link></li>
              <li><i class="bx bx-chevron-right"></i> <router-link :to="{name:'Takmir'}">Takmir Masjid</router-link></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="300">
            <h4>Fasilitas Kami</h4>
            <ul>
              <li v-for="facility in facilities" :key="facility.key"><i class="bx bx-chevron-right"></i> <a href="javascript:;">{{facility.text}}</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="400">
            <h4>Sosial Media Kami</h4>
            <p>Ikuti kami di social media untuk selalu uptodate berita terbaru dari kami</p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container py-4">
      <div class="copyright">
        &copy; {{date}} Copyright <strong><span>VueMosque</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- End Footer -->
</template>

<script>
import profileMosque from '../constants/profile'
import facilities from '../constants/facilities'

export default {
  name: 'Footer',
  data(){
    return {
      date: new Date().getFullYear(),
      profile: profileMosque,
      facilities: facilities
    }
  }
}
</script>

<style>

</style>