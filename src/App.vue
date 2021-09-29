<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App'
 
}
</script>

<style>
body,html{
font-family: 'Dosis', sans-serif!important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Dosis', sans-serif!important;
  color: #2c3e50;
}
img.site-logo{
  width:100%
}
.logo{
      width: 9%;
}
button.dropdown-toggle{
      border: none;
    background: transparent;
    color: #535353;
    font-size: 19px;
    padding: 0;
    font-weight: 300;

}
button.dropdown-toggle:hover{
      border: none;
    background: transparent;
    color: #000000;
    font-size: 19px;
    padding: 0;


}
button.dropdown-toggle:active{
      border: none;
    background: transparent;
    color: #000000;
    font-size: 19px;
    padding: 0;


}
.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {
        border: none;
    background: transparent!important;
    color: #000000!important;
    font-size: 19px;
    padding: 0;
    font-weight: 200;
}
.bordered{
  border-radius:20px;
}
.bordered:hover{
  background:#e0e0e0;
}
.bg-success{
      background: linear-gradient(
90deg, rgba(0,0,0,1) 0%, rgba(83,83,83,1) 43%, rgba(188,188,188,1) 100%)!important;

}
.fa, .fas {
    font-weight: 900;
    color: #535353!important;
}
#templatemo_main_nav a {
    color: #535353;
}
#templatemo_main_nav a:hover{
    color: #000000;
}
li a.text-decoration-none:hover{
  color: white;
}
.bg-footer {
    --bs-bg-opacity: 1;
    background-color: black!important;
}
.bg-grey{
  background-color: #444343;
}
.button-sucess{
      background: #656262!important;
    border-color: transparent!important;
}
.copyright{
  background: #2c2c2c!important;
}
/* testimoniuals caousel */
.testimonials{
        background-image:url(./assets/back2.jpg)!important;
        background-size:cover;
        padding: 50px 0;
         background-attachment: fixed;
}
.testimonials-section{
  
  margin-top: 300px;
}
img.quotes{
      width: 7%;
}
.my-container{
      padding: 60px 550px;
}
p.testimonial-quote{
      padding-top: 40px;
    color: white;
    font-size: 34px!important;
}
h1.hometitle{
      text-align: left;
    color: black!important;
    text-transform: uppercase;
    padding-top: 50px;
    padding-bottom: 20px;
    border-bottom: 3px black solid;
}
h3.home-sub {
    text-align: left;
    padding-bottom: 30px;
    font-size: 25px!important;
}
.text-align-left{
  text-align: left;
}
button.getbtn,a.getbtn{
      background: #868585;
    border: none;
    padding: 5px 20px;
    border-radius: 5px;

}
button.getbtn:hover,a.getbtn:hover{
      background: #cfcfcf;
    border: none;
    padding: 5px 20px;
    border-radius: 5px;

}
.slide-right{
  animation:slide-right 2s forwards;
    transform:translateX(-100%);
}

@keyframes slide-right {
  to {
    transform:translateX(0);
  }
   0%{opacity: 0;}
   10%{opacity: 0.1;}
   20%{opacity: 0.2;}
   30%{opacity: 0.3;}
   40%{opacity: 0.4;}
   50%{opacity: 0.5;}
   60%{opacity: 0.6;}
   70%{opacity: 0.7;}
   80%{opacity: 0.8;}
   90%{opacity: 0.9;}
   100%{opacity: 1.0;}
}
h1.kids{
      padding-top: 100px;
}
.subs{
      border: none;
    background: #f8f9fa!important;
    color: black!important;
}
.about p{
  font-size: 19px!important;
  text-align: left!important;
}
.about h1{
  text-align: left;
}
.browse1{
  background: transparent!important;

}
.browse2{
  padding-bottom:50px;
}

.product-card {
    padding-left: 45px!important;
}
.heading{
      text-align: left;
    font-weight: 500!important;
    font-size: 30px!important;
}
p.par{
      text-align: left;
}
.news{
  padding: 50px 0;
}
.news-heading{
      font-size: 50px!important;
      padding-bottom: 30px;
}
a.readmore{
    color: #535353;

}
.modal-header{
  display: none!important;
}
.headline{
  font-size: 35px!important;
}
.btn-primary {
    color: #fff;
    background-color: #6c767d;
    border-color: #6c767d;
}
.btn-primary:hover {
    color: #fff;
    background-color: #6c767d;
    border-color: #6c767d;
}
.btn-secondary:focus{
 background-color: transparent !important;
 border: none !important;
 box-shadow: none!important;
 color: #535353 !important;
}
a.dropdown-item:focus{
  background: #535353!important;
}
/* checkout styles */
img.backdrop{
  width: 100%;
        height: 100%;
}
.backdrop-carousel{
  height: 100%!important;
  z-index:1;
  position: relative;
}
.backdrop-title{
    z-index: 3;
    position: relative;
    margin-top: -40.3%;
    background: #575b5e96;
        padding-bottom: 4.2%;
}
.backdrop-title img{
  width:80%;
  height:100%;
}
.backdrop-title2{
  z-index: 3;
    position: relative;
    margin-top: -40.3%;
    background: #575b5e96;
           padding-bottom: 0.6%;
}
.backdrop-title2 img{
  width:80%;
  height:100%;
}
.backdrop-title3{
    z-index: 3;
    position: relative;
    margin-top: -40.3%;
    background: #575b5e96;
    padding-bottom: 2.9%;
}
.backdrop-title3 img{
  width:80%;
  height:100%;
}

</style>
