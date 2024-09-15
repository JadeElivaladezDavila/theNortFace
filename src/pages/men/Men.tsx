import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogMen } from "../../data/catalog";

const heroMenPage = {
    imageUrl: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2023/01/04/16728360088075.jpg',
    imageText: 'Nueva temporada en chamarras de hombre',
    headline: 'Nueva temporada otoño-invierno en chamarras para hombre',
    button: {
        href: '/',
        label: 'VER AHORA'
    }
};

const MenPage = () => {
    return <>
        <Hero {...heroMenPage}/>
        <Catalog productList={catalogMen}/>
    </>
}

export { MenPage };
