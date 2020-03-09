<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container-fluid d-flex">

      <div class="logo mr-auto">
        <!-- <h1 class="text-light"><a href="javascript:;"><span>Masjid Al-Anhar</span></a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo -->
        <router-link :to="{name:'Home'}"><img src="../assets/image003.png" class="img-fluid"></router-link>
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li><router-link :to="{name:'Home'}">Beranda</router-link></li>
          <li><router-link :to="{name:'Info'}">Pengumuman</router-link></li>
          <li><router-link :to="{name:'Kajian'}">Kajian</router-link></li>
          <li><router-link :to="{name:'Gallery'}">Galeri</router-link></li>
          <li><router-link :to="{name:'Takmir'}">Takmir</router-link></li>
          <li class="get-started"><router-link :to="{name:'Donate'}">Donasi</router-link></li>
        </ul>
      </nav><!-- .nav-menu -->

    </div>
  </header><!-- End Header -->
</template>

<script>
import $ from "jquery";
export default {
  name: 'Header',
  mounted: function(){
    // Mobile Navigation
    if ($('.nav-menu').length) {
      var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
      $('body').append('<div class="mobile-nav-overly"></div>');

      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').toggle();
      });

      $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
      });

      $(document).click(function(e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Initi AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out"
    });

  }
}
</script>

<style>
  a.router-link-exact-active{
    color: #eb5d1e;
    text-decoration: none;
  }
</style>