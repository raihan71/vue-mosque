<template>
  <main id="main">
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>Galeri</h2>
          <p>Beberapa hasil dokumentasi kegiatan masjid</p>
        </div>
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div class="row portfolio-container">
          <div data-aos="zoom-in"
            class="image"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')', width: '200px', height: '200px' }"
          ></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import firebase from 'firebase'
import VueGallery from 'vue-gallery';

export default {
  name: 'Gallery',
  data(){
    return{
      images: [],
      index: null
    }
  },
  components: {
    'gallery': VueGallery
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
        this.images.push(url);
      });
    }
  },
  created(){
    this.getImages()
  }
}
</script>

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>