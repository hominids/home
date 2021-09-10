import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Image from '../components/image'

    const images = [
      'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    ]

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    function Vote () {
    return (
      <div>
        <Carousel
          autoPlaySpeed={1000}
          responsive={responsive}
          centerMode={true}
          ssr
          showDots={true}
          slidesToSlide={1}
          infinite={true}
          draggable={true}
          keyBoardControl={true}
          minimumTouchDrag={80}
          containerClass="container-with-dots"
          itemClass="image-item"
          deviceType={''}
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          focusOnSelect={true}
          sliderClass=""
        >
          {images.map((image) => {
            return <Image url={image} alt={image} />
          })}
        </Carousel>
      </div>
    )

  }

/*
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Progress from './Progress';

const data = [
  {
    id: 1,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    progress: 4,
  },
  {
    id: 2,
    title: 'Design Quality & performance',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    progress: 5,
  },
  {
    id: 3,
    title: 'Layout and organized layers',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    progress: 5,
  },
  {
    id: 4,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    progress: 4,
  },
];

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const carouselParams = {
  additionalTransfrom:0,
  arrows:false,
  autoPlaySpeed:3000,
  centerMode:false,
  className:"",
  containerClass:"carousel-container",
  dotListClass:"",
  draggable: true,
  focusOnSelect:false,
  infinite:true,
  itemClass:"",
  keyBoardControl: true,
  minimumTouchDrag:80,
  renderButtonGroupOutside: true,
  renderDotsOutside:false,
  responsive:responsive,
  showDots:false,
  sliderClass:"",
  slidesToSlide:1,
}

function Vote() {

    return (
        <div className="grid justify-items-center my-12 mx-5">

          <h4 className="text-xs text-red-500 uppercase font-bold my-3 h-2 text-center">Vote</h4>

          <h2 className="text-2xl font-body font-bold text-center my-5">Open Proposals 🗳</h2>

          <Carousel {...carouselParams}>
            {data.map((item) => {
              return 
              <div key={item.sliderClass}>
                <Progress progress={item.progress} />
              </div>
            })}
          </Carousel>
        </div>
    )
}


--------------------------------
    function Vote () {
    return (
      <div>
        <Carousel
          responsive={responsive}
          ssr
          showDots={false}
          slidesToSlide={1}
          infinite
          containerClass="container-with-dots"
          itemClass="image-item"
          deviceType={''}
        >
          {images.map((image) => {
            return <Image url={image} alt={image} />
          })}
        </Carousel>
      </div>
    )

  }

*/

export default Vote;