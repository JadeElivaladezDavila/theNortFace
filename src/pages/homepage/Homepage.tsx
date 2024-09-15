import { Carousel } from "../../components/Carousel/Carousel";
import { Hero } from "../../components/Hero/Hero";
import { sales } from "../../data/sales";
import { trendingProducts } from "../../data/trending-products";

const heroProps = {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboyxXSVu7FLz7vx4yQalk3dlJV6f-r3CNcQ&s',
    imageText: 'THE NORT FACE',
    headline: 'Aprovecha las ofertas THE NORT FACE, 15% descuento en chamarras .',
    button: {
      href: '/kids',
      label: 'COMPRAR AHORA'
    }
  };

const Homepage = () => {
    return <>
        <Hero {...heroProps} />
        <div className='app-body'>
            <Carousel title="Tendencias" items={trendingProducts}/>
            <Carousel title="Greenlander" items={sales} />
        </div>
    </>   
};

export { Homepage };
