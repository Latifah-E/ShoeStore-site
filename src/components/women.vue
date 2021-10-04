<template>
<div>
       <div id="template-mo-zay-hero-carousel2" class="carousel slide" data-bs-ride="carousel">
       
        <div class="carousel-inner backdrop-carousel">
            <div class="carousel-item active">
                <img src="../assets/womens-backdrop1.svg" class="backdrop">
            </div>
            <div class="carousel-item">
                <img src="../assets/womens-backdrop2.svg" class="backdrop">
            </div>
            <div class="carousel-item">
                <img src="../assets/womens-backdrop3.svg" class="backdrop">
            </div>
        </div>
       
    </div>
     <div class="backdrop-title">
        <img src="../assets/womens-title.svg">
    </div>
    <main class="container">
    
        
     
            
                <div class="row main-row">
                 <div class="row sneakers">

            <div class="col-lg-4 col-md-4 col-sm-12 product-card" v-for="women in womens" :key="women">
               <section class="card2" id="kids" >
        <div class="product-image">
            <img class="womens path" :src="women.path"  alt="OFF-white Red Edition" draggable="false" />
        </div>
        <div class="product-info">
            <h2 class="name">{{women.name}}</h2>
             <p class="brand">{{women.brand}}</p>
            <div class="price">${{women.price}}</div>
        </div>
        <div class="btn2">
            <button    class="buy-btn  button">Buy Now</button>
            <button class="fav carticon button">
                  <a class="nav-icon position-relative text-decoration-none" href="#">
                        <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        
                    </a>
            </button>
        </div>
    </section>
            </div>
        </div>
                </div>
            
            
        
       
    
    </main>
</div>
</template>
<script>
export default {
    data:function(){
        return {
            womens:[],
            isloading:false
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            this.axios.get('/category_id=2').then(response=>[
                console.log(response.data[1].name),
                (this.womens = response.data),
            ]).catch(error=>{
                console.log(error)
            })
            
        }
       
    }
}
</script>
<style>
:root {
    --dark-color-lighten: #f2f5ff;
    --red-card: #a62121;
    --blue-card: #4bb7e6;
    --btn: #141414;
    --btn-hover: #3a3a3a;
    --text: #fbf7f7;
}

/*===== RESET =====*/
*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.browse {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    background-color: var(--dark-color-lighten);
}

button.button {
    display: inline-block;
    border: none;
    outline: none;
    border-radius: 0.2rem;
    color: var(--text);
    cursor: pointer;
}
.container2{
    height: 100%;
   
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
a {
    text-decoration: none;
}

img.womens {
    max-width: 100%;
    height: 100%;
    user-select: none;
}

/*===== CARD =====*/

.card2 {
    position: relative;
    padding: 1rem;
    width: 350px;
    height: 450px;
    box-shadow: -1px 15px 30px -12px rgb(32 32 32);
    border-radius: 0.9rem;
    background: #e6e6e6;
    color: #000000;
    cursor: pointer;
    margin-top: 100px;
}
.card-blue {
    background: var(--blue-card);
}

.product-image {
    height: 230px;
    width: 100%;
    transform: translate(0, -1.5rem);
    transition: transform 500ms ease-in-out;
    filter: drop-shadow(5px 10px 15px rgba(8, 9, 13, 0.4));
}

.product-info {
    text-align: center;
}

.card2:hover .product-image {
    transform: translate(-1.5rem, -7rem) rotate(-20deg);
}

.product-info h2 {
    font-size: 1.4rem;
    font-weight: 600;
}

.product-info p {
    margin: 0.4rem;
    font-size: 0.8rem;
    font-weight: 600;
}

.price {
    font-size: 1.2rem;
    font-weight: 500;
}

.btn2 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 0.8rem;
}

.buy-btn {
    background-color: var(--btn);
    padding: 0.6rem 3.5rem;
    font-weight: 600;
    font-size: 1rem;
    transition: 300ms ease;
}

.buy-btn:hover {
    background-color: var(--btn-hover);
}

.fav {
    box-sizing: border-box;
    background: #fff;
    padding: 0.5rem 0.5rem;
    border: 1px solid#000;
    display: grid;
    place-items: center;
}

.svg {
    height: 25px;
    width: 25px;
    fill: #fff;
    transition: all 500ms ease;
}

.fav:hover .svg {
    fill: #000;
}
button.carticon{
        background: #bcbcbc;
}

@media screen and (max-width: 800px) {
    .browse {
        height: auto;
    }

    .container{
        padding: 2rem 0;
        width: 100%;
        flex-direction: column;
        gap: 3rem;
    }
}

</style>