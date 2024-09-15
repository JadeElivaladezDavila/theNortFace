import { useParams } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/distToastify.css';

import './product.styles.scss';
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel';
import { useContext, useEffect, useState } from 'react';
import { catalogMen } from '../../data/catalog';
import { ProductCardProps } from '../../components/ProductCard/ProductCard';
import ReactStars from 'react-stars';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Catalog } from '../../components/Catalog/Catalog';
import { ShoppingCartContext } from '../../providers/ShoppingCartContext';
import { setToLocalStorage } from '../../routes/localStorage';

interface ProductFromsProps{
   quantity: number;
}

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";

const ProductPage = () => {
   const { productList, setProductList } = useContext(ShoppingCartContext);
   const { register, handleSubmit } = useForm< ProductFromsProps>();
   const params = useParams();
   const [ product, setProduct ] = useState<ProductCardProps>();

   useEffect(() => {
      const result = catalogMen.find((product) =>{
         return product.id === params.productID
      });
      if (result) {
         setProduct(result);
      }
   }, []);

   useEffect(() => {
      if (productList  && productList.lengh < 1){
      setToLocalStorage(PRODUCT_LIST_KEY, productList);
   }
   }, [productList]);

   const onSubmit: SubmitHandler<ProductFromsProps> = (data) => {
        setProductList(
         [
            ...productList,
            product
         ]
       );
      setToLocalStorage(PRODUCT_LIST_KEY, productList);
   };
   
   if (!product) {

      return<div>Este producto no exite,intenta mas tarde</div>;
   };

   return<div className='product-page'>
      
      <div className='product-page-body'>
           <div className='product-page-carousel'>
                     <EmblaCarousel slides={product?.imageUrl}/>
           </div>
           <div className='product-page-detait-wrapper'>
                     <div className='product-page-detait-title'>
                        {product.title}
                     </div>
                     <div className='product-page-detait-price-wrapper'>
                           <div className='product-page-detail-price'>
                              {product.price}MXN
                              return <div>Este producto no existe, intenta más tarde</div>;
                           </div>
                           <div className='product-page-detail-discount'>
                              {product.discount}%
                           </div>
                        </div>
                           <ReactStars
                           count={5}
                           size={16}
                           value={product.stars}
                           edit={false}
                           />
                           {product.description}
                           <form onSubmit={handleSubmit(onSubmit)}>
                              <label>
                                 Cantidad
                                 <select {...register('quantity')} >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                 </select>
                                 <input type='submit' value="Agregar al carrito" />
                              </label>
                           </form>
           </div>
     </div>
     <label>Productos relacionados:</label>
            <Catalog productList={catalogMen.slice(1, 3)}/>
            <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
               />
                  {/* Same as */}
               <ToastContainer />
      </div>
};
       
export { ProductPage };
