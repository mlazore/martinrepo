import React from 'react'

function Product(){
    return(
        <>
        <h2>Welcome to our Shop!</h2>
    <section class="grid-container">
        <div class="griditem1"> <img src="/images/abwheel2.png" alt="abroller" width="150" />
            <h3>Ab Roller</h3>
            <p>$40</p>
            <p>A tool to help strengthen the core</p>
            <button>Buy Now!</button>
        </div>
        <div class="griditem2"> <img src="/images/bag2.png" alt="PunchingBag" height="150px" />
            <h4>Punching Bag</h4>
            <p>$100</p>
            <p>A bag that you practice boxing with, it is also a amazing cardio tool.</p>
            <button>Buy Now!</button>
        </div>
        <div class="griditem3"> <img src="/images/balanceball2.png" alt="ball" width="200px" height="170px" />
            <h4>Balance Ball</h4>
            <p>$100</p>
            <p>A balance ball that helps with increasing stability muscles.</p>
                    <button>Buy Now!</button>
        </div>
        <div class="griditem4"> <img src="/images/bands2.png" alt="bands" width="150px" height="150px"/>
            <h4>Bands</h4>
            <p>$80</p>
            <p>Resistance bands that help with stretching and muscle building.</p>
                    <button>Buy Now!</button>
        </div>
        <div class="griditem5"> <img src="/images/dumbbells2.png" alt="dumbbells" width="160px" height="150px"/>
            <h4>Dumbbells</h4>
            <p>$200</p>
            <p>Free weights that allow individuals to build muscle.</p>
                    <button>Buy Now!</button>
        </div>
        <div class="griditem6"> <img src="/images/jumprope2.png" alt="jumprope" width="150px" height="170px" />
            <h4>Jumprope</h4>
            <p>$30</p>
            <p>A rope that helps with cardio and burn fat.</p>
                    <button>Buy Now!</button>
        </div>
        <div class="griditem7"> <img src="/images/kettlebell2.png" alt="kettlebell" width="200px" height="180px" />
            <h4>Kettlebell</h4>
            <p>$200</p>
            <p>A free weight that is very easy to use.</p>
                    <button>Buy Now!</button>
        </div>
        <div class="griditem8"> <img src="/images/massage2.png" alt="MassageGun" width="150px" />
            <h4>Massage Gun</h4>
            <p>$150</p>
            <p>A device used to massage sore muscles and help blood flow.</p>
                    <button>Buy Now!</button>
        </div>
        <div class="griditem9"> <img src="/images/pull2.png" alt="pullupbar" height="140px" />
            <h4>Pullup Bar</h4>
            <p>$40</p>
            <p>A tool used to help build and strengthen back muscles.</p>
                    <button>Buy Now!</button>
        </div>
        <div class="griditem10"> <img src="/images/stairmaster2.png" alt="Stairmaster" width="140px" height="150px" />
            <h4>Stairmaster</h4>
            <p>$900</p>
            <p>A machine that aids in cardiovascular training and exercise. </p>
            <button>Buy Now!</button>
        </div>
        <div class="griditem11"> <img src="/images/medicineball2.png" alt="weightball" width="150px" height="140px" />
            <h4>WeightBall</h4>
            <p>$50</p>
            <p>A object used to help strengthen your core and cardiovascular endurance</p>
            <button>Buy Now!</button>
        </div>
        <div class="griditem12"> <img src="/images/yogamat2.png" alt="yogamat" width="150px" height="160px" />
            <h4>Yoga Mat</h4>
            <p>$15</p>
            <p>A object used to perform yoga on</p>
            <button>Buy Now!</button>
        </div>
    </section>
    <footer id="footer-container">
        <div class="footer">
            <div class="description">Copyright &copy;</div>
        </div>
        <a href="https://www.facebook.com/" aria-label="Facebook" class="Facebook"> <i class="fab fa-facebook-square fa-2x"></i></a>
        <a href="https://www.instagram.com/" aria-label="Instagram" class="Instagram"> <i class="fab fa-instagram-square fa-2x"></i> </a>
        <a href="https://twitter.com/" aria-label="Twitter" class="Twitter"> <i class="fab fa-twitter-square fa-2x"></i> </a>
    </footer>
    </>
  )
}

export default Product