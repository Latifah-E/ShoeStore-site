<template>
<div>


    <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">

            <router-link :to="{name:'home'}" class="navbar-brand text-success logo h1 align-self-center" >
                <img src="../assets/Logo.svg" class="site-logo">
            </router-link>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <b-dropdown id="dropdown-1" text="Shop" class="m-md-2">
                            <b-dropdown-item><router-link :to="{name:'kids'}" class="nav-link" >Kid's Shoes</router-link></b-dropdown-item>
                            <b-dropdown-item><router-link :to="{name:'women'}" class="nav-link" >Women's Shoes</router-link></b-dropdown-item>
                            <b-dropdown-item><router-link :to="{name:'mens'}" class="nav-link" >Men's shoes</router-link></b-dropdown-item>
                            <b-dropdown-item><router-link :to="{name:'classy'}" class="nav-link" >Classy shoes</router-link></b-dropdown-item>
                            
                        </b-dropdown> 
                        <li class="nav-item">
                            <router-link :to="{name:'home'}" class="nav-link" >Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'about'}" class="nav-link" >About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'contact'}" class="nav-link" >Contact</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'news'}" class="nav-link" >News</router-link>
                        </li>
                    </ul>
                </div>
                <div class="navbar align-self-center d-flex">
                    <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div class="input-group">
                            <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ...">
                            <div class="input-group-text">
                                <i class="fa fa-fw fa-search"></i>
                            </div>
                        </div>
                    </div>
                    <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                        <i class="fa fa-fw fa-search text-dark mr-2"></i>
                    </a>
                    <button class="nav-icon position-relative text-decoration-none cart"  v-b-modal.modal-1>
                        <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{{carts.length}}</span>
                    </button>
                    <!-- <a class="nav-icon position-relative text-decoration-none" href="#">
                        <i class="fa fa-fw fa-user text-dark mr-3"></i>
                        <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                    </a> -->
                </div>
                
            </div>

        </div>
    </nav>
    <!-- Close Header -->
    <!-- cartModal -->
      <b-modal id="modal-1" title="Cart Items" size="xl" >
        <div class="heading">
            Cart Items
        </div>
        <div class="main">
            <b-table hover :items="carts" :fields="fields" responsive="sm">
                  <template #cell(path)="shoe" style="width:15%">
                      <div class="shoe-container">
                         <img :src="shoe.value" class="checkout-shoe">                  
                      </div>
                  </template>
                  <template #cell(price)="price">
                     <p>${{price.value}}</p>  
                  </template>
                 
                  <template #cell(size)="">
                     <b-form-select v-model="selected" :options="options"></b-form-select>    
                  </template>
                  <template #cell(actions)="">
                     <button class="delete" @click="removeItem(index)"><img src="../assets/delete.svg"></button>  
                  </template>
            </b-table>
        </div>
        <div class="totals">
            
            <div class="calculation">
                 <div class="mytotal">
                     <label class="label1">Total:</label><span class="price-padded">${{total}}.00</span>
                     
                     
                 </div>
               
                 <div class="mypromo">
                     <label class="label1">Shipping:</label><span class="price-padded">${{shipping}}.00</span>
                 </div>
                 <div class="mynet">
                   <label class="label1">Net Total:</label><span class="price-padded">${{nettotal}}.00</span>
                 </div>
            </div>
        </div>
        <div class="payment">
            <button type="submit" class="login-btn" v-b-modal.modal-multi-3>Proceed to Checkout</button>
        </div>

  </b-modal>
  <b-modal id="modal-multi-3" size="lg" ok-only>
    <div class="row">
        <div class="col-6 checkout-bg">
            <img src="../assets/checkout.jpg">
        </div>
        <div class="col-6">
            <div class="order-heading">
                Order Summary
            </div>
            <div class="summary">
                <div class="mytotal">
                     <label class="label2">Total:</label><span class="price-padded2">${{total}}.00</span>
                     
                     
                 </div>
                 <div class="mypromo">
                     <label class="label2">Shipping:</label><span class="price-padded2">${{shipping}}.00</span>
                 </div>
                 <div class="mynet2">
                   <label class="label2">Net Total:</label><span class="price-padded3">${{nettotal}}.00</span>
                 </div>
            </div>
            <div class="order-heading">
               Address
            </div>
            <div class="adress-form">
                <form>
                    <div class="row form2">
                        <div class="col-6 input">
                            <b-form-input type="text" placeholder="Country"></b-form-input>
                        </div>
                         <div class="col-6 input2">
                            <b-form-input type="text" placeholder="City"></b-form-input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-7 input">
                            <b-form-input type="text" placeholder="Address"></b-form-input>
                        </div>
                        <div class="col-5 input2">
                            <b-form-input type="text" placeholder="Postal Code"></b-form-input>
                        </div>
                    </div>
                </form>
            </div>

            <div class="order-heading">
               Contact Details
               <div class="input3">
                   <b-form-input type="email" placeholder="Email"></b-form-input>
                   <b-form-input type="text" placeholder="Phone Number"></b-form-input>
               </div>
            </div>
            <div class="order-heading">
               Payment Details
            </div>
            <div class="payment-proceed">
                

                      <div class="tab-content">
                        <div class="tab-pane fade show active" id="nav-tab-card">
                            
                            <form role="form">
                                <div class="form-group">
                                    <label for="username">Full name (on the card)</label>
                                    <input type="text" class="form-control" name="username" placeholder="" required="">
                                </div> <!-- form-group.// -->

                      <div class="form-group">
                          <label for="cardNumber">Card number</label>
                          <div class="input-group">
                              <input type="text" class="form-control" name="cardNumber" placeholder="">
                              <div class="input-group-append">
                                  <span class="input-group-text text-muted cards">
                                      <i class="fab fa-cc-visa"></i>
                                      <i class="fab fa-cc-amex"></i>
                                      <i class="fab fa-cc-mastercard"></i> 
                                 </span>
                                 </div>
                       </div>
                    </div> <!-- form-group.// -->

                <div class="row">
                    <div class="col-sm-8">
                        <div class="form-group">
                            <label><span class="hidden-xs">Expiration</span> </label>
                            <div class="input-group">
                                <input type="number" class="form-control" placeholder="MM" name="">
                                <input type="number" class="form-control" placeholder="YY" name="">
                            </div>
                     </div>
             </div>
              <div class="col-sm-4">
                <div class="form-group">
                    <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i class="fa fa-question-circle"></i></label>
                    <input type="number" class="form-control" required="">
                    </div> <!-- form-group.// -->
                    </div>
	</div> <!-- row.// -->
	<button class="subscribe btn btn-primary btn-block" type="button"> Confirm  </button>
	</form>
</div> <!-- tab-pane.// -->

</div> <!-- tab-content .// -->


 <!-- card.// -->
            </div>
        </div>
    </div>
  </b-modal>
    <!-- Modal -->
    <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="w-100 pt-1 mb-5 text-right">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" class="modal-content modal-body border-0 p-0">
                <div class="input-group mb-2">
                    <input type="text" class="form-control searcher" id="inputModalSearch" name="q" v-model="search" placeholder="Search ...">
                    <button type="submit" class="input-group-text bg-success text-light">
                        <i class="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
                     <li  v-for="shoe in filteredAnswers" :key="shoe" class="answerlists">
                      <section class="card2">
                         <div class="product-image">
                          <img class="shoes path" :src="shoe.path" alt="OFF-white Red Edition" draggable="false" />
                       </div>
                        <div class="product-info">
                     <h2 class="name">{{shoe.name}}</h2>
                      <p class="brand">{{shoe.brand}}</p>
                     <div class="price">{{shoe.price}}</div>
                      </div>
                            <div class="btn2">
            <b-form-input type="number" class="quantity" v-model="shoe.quantity" placeholder="Input Quantity"></b-form-input>
            <button class="fav carticon button" @click="addProductToCart(shoe)">
                  <a class="nav-icon position-relative text-decoration-none">
                        <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        
                    </a>
            </button>
        </div>
    </section>
                    </li>
            
        </div>
    </div>


         <router-view/>
   
  

    <!-- Start Brands -->
    <section class="bg-light py-5">
        <div class="container my-4">
            <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Our Brands</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div class="col-lg-9 m-auto tempaltemo-carousel">
                    <div class="row d-flex flex-row">
                        <!--Controls-->
                        <div class="col-1 align-self-center">
                            <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                                <i class="text-light fas fa-chevron-left"></i>
                            </a>
                        </div>
                        <!--End Controls-->

                        <!--Carousel Wrapper-->
                        <div class="col">
                            <div class="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
                                <!--Slides-->
                                <div class="carousel-inner product-links-wap" role="listbox">

                                    <!--First slide-->
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="../assets/brand_01.png" alt="Brand Logo"></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="../assets/brand_02.png" alt="Brand Logo"></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="../assets/brand_03.png" alt="Brand Logo"></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="../assets/brand_04.png" alt="Brand Logo"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <!--End First slide-->

                                    <!--Second slide-->
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="../assets/brand_01.png" alt="Brand Logo"></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="../assets/brand_02.png" alt="Brand Logo"></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="../assets/brand_03.png" alt="Brand Logo"></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="../assets/brand_04.png" alt="Brand Logo"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <!--End Second slide-->

                                    <!--Third slide-->
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="../assets/brand_01.png" alt="Brand Logo"></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="../assets/brand_02.png" alt="Brand Logo"></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="../assets/brand_03.png" alt="Brand Logo"></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="../assets/brand_04.png" alt="Brand Logo"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <!--End Third slide-->

                                </div>
                                <!--End Slides-->
                            </div>
                        </div>
                        <!--End Carousel Wrapper-->

                        <!--Controls-->
                        <div class="col-1 align-self-center">
                            <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                                <i class="text-light fas fa-chevron-right"></i>
                            </a>
                        </div>
                        <!--End Controls-->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--End Brands-->


    <!-- Start Footer -->
    <footer class="bg-footer" id="tempaltemo_footer">
        <div class="container">
            <div class="row">

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Our shop</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li>
                            <i class="fas fa-map-marker-alt fa-fw"></i>
                            Senga Rd, Mikocheni.
                        </li>
                        <li>
                            <i class="fa fa-phone fa-fw"></i>
                            <a class="text-decoration-none" href="tel:010-020-0340">+255 753 068 823</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope fa-fw"></i>
                            <a class="text-decoration-none" href="mailto:info@company.com">info@teeshoes.com</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-decoration-none" href="#">Luxury</a></li>
                        <li><a class="text-decoration-none" href="#">Kid's shoes</a></li>
                        <li><a class="text-decoration-none" href="#">Men's Shoes</a></li>
                        <li><a class="text-decoration-none" href="#">Women's Shoes</a></li>
                        <li><a class="text-decoration-none" href="#">Sport Shoes</a></li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-decoration-none" href="#">Home</a></li>
                        <li><a class="text-decoration-none" href="#">About Us</a></li>
                        <li><a class="text-decoration-none" href="#">Shop Locations</a></li>
                        <li><a class="text-decoration-none" href="#">FAQs</a></li>
                        <li><a class="text-decoration-none" href="#">Contact</a></li>
                    </ul>
                </div>

            </div>

            <div class="row text-light mb-4">
                <div class="col-12 mb-3">
                    <div class="w-100 my-3 border-top border-light"></div>
                </div>
                <div class="col-auto me-auto">
                    <ul class="list-inline text-left footer-icons">
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a rel="nofollow" class="text-light text-decoration-none" target="_blank" href="http://fb.com/templatemo"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-auto">
                    <label class="sr-only" for="subscribeEmail">Email address</label>
                    <div class="input-group mb-2">
                        <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address">
                        <div class="input-group-text  subs">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-100 bg-grey py-3 copyright">
            <div class="container">
                <div class="row pt-2">
                    <div class="col-12">
                        <p class="text-left text-light">
                            Copyright &copy; 2021 Tee's Shoes 
                           
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
</div>
</template>
<script>
 import store from '@/store/index'
 export default {
     name:'main',
       data(){
        return {
            search:"",
           
            answers:[{
        name:'Jordan Point Lane',brand:'Nike', price:'$200',path:'http://localhost:8000/img/kids1.ab06ba24.svg'
       },
       {
        name:'Nike Air Max 95',brand:'Nike', price:'$200',path:'http://localhost:8080/img/kids2.82038cca.svg'
       },
       {
        name:'Jordan Flight Club',brand:'Nike', price:'$200',path:'http://localhost:8080/img/kids3.76d1941b.svg'
       },
       {
        name:'Nike Crater Impact',brand:'Nike', price:'$200',path:'http://localhost:8080/img/kids4.e137f023.svg'
       },
       {
        name:'Ozelia Shoes',brand:'Adidas', price:'$200',path:'http://localhost:8080/img/kids5.5f25ee6c.svg'
       },
        {
        name:'NMD_R1 Monsters',brand:'Adidas', price:'$200',path:'http://localhost:8080/img/kids6.7ac87fef.svg'
       },
       {
        name:'Adidas X Lego®',brand:'Adidas', price:'$200',path:'http://localhost:8080/img/kids1.ab06ba24.svg'
       },
       {
        name:'ZX 360 Shoes',brand:'Reebok', price:'$150',path:'http://localhost:8080/img/kids7.73c47bae.svg'
       },
       {
        name:'Jelly Belly Club',brand:'Reebok', price:'$100',path:'http://localhost:8080/img/kids8.6c31b657.svg'
       },
        {
        name:'RS-Z College Toddler ',brand:'Puma', price:'$250',path:'http://localhost:8080/img/kids10.894e79ec.svg'
       },
       {
        name:'Cruse Rider Roar AC',brand:'Puma', price:'$270',path:'http://localhost:8080/img/kids12.dd22fbcf.svg'
       },
       {
        name:'Puma X BRATZ Cruise Rider',brand:'Puma', price:'$600',path:'http://localhost:8080/img/kids12.dd22fbcf.svg'
       },
       {
        name:'Nike Air Huarache',brand:'Nike', price:'$100',path:'http://localhost:8080/img/womens1.00d5d191.svg'
       },
       
    ],
    fields: [
           {key:'path'},
           {key:'name'},
           {key:'brand'},
           {key:'price'},
           {key:'quantity'},
        //    {key:'stock'},
           {key:'size'},
           {key:'actions'},
    ],
    shoes: [],
  
     options: [
          { value: null, text: 'Choose a size' },
          { value: 'a', text: 'XS' },
          { value: 'b', text: 'S' },
          { value: 'c', text: 'M' },
          { value: 'd', text: 'L'},
          { value: 'e', text: 'XL'}
        ]
        }
    },
 
	
    computed: {    
        products(){
            return store.state.products
        },
         filteredAnswers: function(){
            return this.shoes.filter((shoe)=> {
                // this.search = this.search.toLowerCase();
                if(this.search.length != 0) 
                return  shoe.brand.match(this.search) || shoe.name.match(this.search)
                console.log(shoe);
            });
        },
        carts(){
            console.log(this.$store.state.cart);
            return this.$store.state.cart
        },
         total() {
            let total = 0;
            this.carts.forEach(cart => {
            total += (cart.price * cart.quantity);
        });
            return total;
        },
        shipping() {
             if (this.total > 0) {
                let shipping = 60
                return shipping
             }else {
                let shipping = 0
                return shipping
             }
             
        },
        nettotal(){
           
            let nettotal = (this.shipping + this.total)
            return nettotal
            
        }
    }, 
    created(){
       this.init()
    },
    mounted(){
     this.init()
    },
    methods: {
      init(){
            this.axios.get('/shoes').then(response=>[
                console.log(response.data),
                (this.shoes = response.data),
            ]).catch(error=>{
                console.log(error)
            })
            
        },
         removeItem(index) {
      this.carts.splice(index, 1)
    },
     addProductToCart(product){
            console.log(product)
            this.$store.commit('pushProductToCart',product)
            const Swal = require('sweetalert2')
            Swal.fire({
           
             icon: 'success',
            title: 'Your item has been added to cart',
            showConfirmButton: false,
             timer: 1500
          })
        }
  }
 }
</script>
