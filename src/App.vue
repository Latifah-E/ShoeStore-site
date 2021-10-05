<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
    
 
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
li.answerlists{
      list-style: none;
    width: 50%;
    float: left;
    z-index:10;
    position: relative;
}
.price {
    font-size: 1.2rem!important;
    font-weight: 500!important;
}
.padded{
  margin-bottom: 100px;
}
button.cart{
      border: none;
    background: transparent;
}
.checkout-shoe{

  width: 55%;
}
thead, tbody, tfoot, tr, td, th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    width: 15%;
}
button.delete{
  border: none;
    background: none;
    margin-left: 10px;

}
.totals{
  
    width: 100%;
}
label.label1 {
    display: inline-block;
    font-size: 21px!important;
    padding-right: 13px;
}
.price-padded{

    float: right;

}
.mynet{
      border-top: #dfe2e6 2px solid;
}
.modal-footer{
  display: none !important;
}
button.login-btn {
    width: 100%;
    background-image: linear-gradient( 
90deg, rgba(0,0,0,1) 0%, rgba(83,83,83,1) 43%, rgb(158, 158, 158) 100%)!important;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 10px;
    margin: 20px 0;
    box-shadow: 0 0 20px #eee;
    transition: 0.5s;
    background-size: 200% auto;
    font-size: 16px;
}
button.login-btn:hover{
    background-position: right center;
}
.payment{
      text-align: right;
}
.checkout-bg img{
  width:100%;
      border-radius: 6px 0 0 6px!important;
}
.checkout-bg{
  padding-left: 0px!important;
}
.heading2{
  text-align:center;
  font-size:25px!important;
  padding-bottom: 20px;
}
#modal-multi-3___BV_modal_body_{
  padding: 0!important;
}
.order-heading{
      text-align: left;
    font-size: 18px!important;
    font-weight: bold!important;
    padding-top: 8px;
}
.price-padded2{
    padding-right: 40px;
    float: right;
        font-size: 16px!important;
}
.mynet2 {
    border-top: #dfe2e6 1px solid;
    width: 90%;
}
.price-padded3{
    padding-right: 0px;
    float: right;
        font-size: 16px!important;
}
.input{
  padding-right: 0!important;
}
.input2{
      padding-left: 10px!important;
      padding-right: 50px!important;
}
.form2{
  margin-bottom: 10px;
}
.input input::placeholder{
  font-size:15px
}
.input2 input::placeholder{
  font-size:15px
}
.input3 {
    padding-right: 40px!important;
    padding-top: 10px;
}
.input3 input::placeholder{
  font-size: 15px;
}
.input3 input{
  margin-bottom:10px;
}
label.label2{
      font-size: 16px!important;
}
label{
      font-size: 16px!important;
}
.form-group{
  padding-right: 40px;
}
span.cards{
      padding: 12px;
    border-radius: 0px 4px 4px 0px;
}
i.fab{
  padding-right: 1px;
}
.form-control::placeholder{
  font-size:15px;
}
button.subscribe{
      padding: 9px 20px;
    margin-top: 4px;
        background-image: linear-gradient( 
90deg, rgba(0,0,0,1) 0%, rgba(83,83,83,1) 43%, rgb(158, 158, 158) 100%)!important;
    color: white;
    border: none;
    box-shadow: 0 0 20px #eee;
    transition: 0.5s;
    background-size: 200% auto;
    font-size: 16px;
}
button.subscribe:hover{
    background-position: right center;
}
</style>
