import './Banner.css';
import { useState , useEffect } from 'react';

function Banner() {

    const [BannerContent , setBannerContent] = useState();
      

    useEffect(()=>{
        setInterval(()=>{
            if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
            {
                setBannerContent();
            }
            else
            {
                setBannerContent( <div>
                    {/* Carousel Start */}
                     <div class="container-fluid p-0">
                     <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                         <div class="carousel-inner">
                             <div class="carousel-item active">
                                 <img class="w-100" src="assets/img/banner1.jpg" alt="Image" />
                                 <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                     <div class="p-3" style= {{"max-width": "900px"}}>
                                         <h1 class="display-2 text-uppercase text-white mb-md-4">Property Consultancy</h1>
                                         <a href="" class="btn btn-primary py-md-3 px-md-5 mt-2">Get A Quote</a>
                                     </div>
                                 </div>
                             </div>
                             <div class="carousel-item">
                                 <img class="w-100" src="assets/img/banner2.jpg" alt="Image" />
                                 <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                     <div class="p-3" style={{"max-width": "900px"}}>
                                         <h1 class="display-2 text-uppercase text-white mb-md-4">A Higher Quality of Living</h1>
                                         <a href="" class="btn btn-primary py-md-3 px-md-5 mt-2">Contact Us</a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                             data-bs-slide="prev">
                             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                             <span class="visually-hidden">Previous</span>
                         </button>
                         <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                             data-bs-slide="next">
                             <span class="carousel-control-next-icon" aria-hidden="true"></span>
                             <span class="visually-hidden">Next</span>
                         </button>
                     </div>
                    </div>
                    {/* Carousel End */}
                    </div>) 
            }
        },2000);
    },[]);

    return (
   <div>{BannerContent}</div>
);
}

export default Banner;