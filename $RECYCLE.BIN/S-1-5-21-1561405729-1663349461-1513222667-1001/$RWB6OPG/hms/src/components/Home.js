import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Home() {
  return (
    <div className="">
      <h1 className='text-success fs-1 text-center mt-4 main-heading-home'>Our Special Dish</h1>
      <div id="carouselExampleIndicators" className="carousel slide carousel-background-style">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner container" >
    <div className="carousel-item active">
    <div className='row'>
            <div className='col-sm-6 text-center'>
                
                <div className='h-100  d-flex flex-column justify-content-center'>
                    <p className='fs-1 text-white'>Fried chicken Biryani</p>
                    <p className='home-para-style fs-4'>Note that the development build is not optimized.To create a production build</p>

                </div>

            </div>
            <div className='col-sm-6 p-5' >
            <img src="https://ruralkingz.com/wp-content/uploads/2020/08/fried.jpg" className="d-block w-100 coursel-dish-image" height="400px" alt="..."/>
            </div>

        </div>
    </div>
    <div className="carousel-item">
    <div className='row'>
            <div className='col-sm-6 text-center'>
                
                <div className='h-100  d-flex flex-column justify-content-center'>
                    <p className='fs-1 text-white'>Fried chicken Biryani</p>
                    <p className='home-para-style fs-4'>Note that the development build is not optimized.To create a production build</p>

                </div>

            </div>
            <div className='col-sm-6 p-5' >
            <img src="https://ruralkingz.com/wp-content/uploads/2020/08/fried.jpg" className="d-block w-100 coursel-dish-image" height="400px" alt="..."/>
            </div>

        </div>
    </div>
    <div className="carousel-item ">
    <div className='row'>
            <div className='col-sm-6 text-center'>
                
                <div className='h-100  d-flex flex-column justify-content-center'>
                    <p className='fs-1 text-white'>Fried chicken Biryani</p>
                    <p className='home-para-style fs-4'>Note that the development build is not optimized.To create a production build</p>

                </div>

            </div>
            <div className='col-sm-6 p-5' >
            <img src="https://ruralkingz.com/wp-content/uploads/2020/08/fried.jpg" className="d-block w-100 coursel-dish-image" height="400px" alt="..."/>
            </div>

        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}

export default Home;
