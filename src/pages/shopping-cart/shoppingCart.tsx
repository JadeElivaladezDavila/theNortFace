import  { useContext, useEffect, useState } from "react";
import  { useForm } from "react-hook-form";
import { ShoppingCartContext } from "../../providers/ShoppingCartContext";
import { ProductCardProps } from "../../components/ProductCard/ProductCard";

import './ShoppingCart.styles.scss';

import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { setToLocalStorage } from "../../routes/localStorage";

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";

const ShoppingCartPage = () => {
    const { register } =useForm();
    const { productList, setProductList } = useContext(ShoppingCartContext);
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        let totalGlobal= 0;
        // useEffect Va a estar escuchando las propiedades en el array cambien 
        productList.forEach((product: ProductCardProps) => {// Leemos cada producto de la lista
            //calcula al total por producto
            const totalByproduct = product.quantity! * product.price;

            //el total por pruducto lo suma al total general
            totalGlobal =  totalGlobal +  totalByproduct;
        });
       setTotal(totalGlobal);
        }, [ productList ]);

        const handleClick = (id: string) => { // id seleccionado
            //cuando el usuario de click, se ejecuta esta funcion
            // Uasamos  filter, pro que queremos eliminarar  el eleemento de la lista
            const result = productList.filter(( product: ProductCardProps) => {
                return product.id !== id // Regresamos todos los productos que cumplan esta condicion 
            });
            productList(result);
            setToLocalStorage(PRODUCT_LIST_KEY, result);

        }

            const findProduct = (id: string) => {

                // Si lo encuentra regresa la posicion, sino regresa un -1
                const result = productList.findIndex((productSearch: ProductCardProps) => 
                    productSearch.id === id
                );
                return result;
            }; 


            const handleOnQuantityChange = (event : React.ChangeEvent<HTMLInputElement>, id: string) => {
                const productIndex = findProduct(id); //Buscamos el indice del producto en la lista

                productList[productIndex].quality = Number (event.target.value); //Actualizamos la vieja cantidad por la nueva

                setProductList([...productList]);  // Actualizamos la lista de productos con los nuevos datos
                // que se vean los datos actualizados de la pagina 

                setToLocalStorage(PRODUCT_LIST_KEY, [...productList]); //Guardams en el localStorage para que se guarde icluso
                // al actualizar
            }


    return <div className="shopping-cart-page">
        <h1>Carrito</h1>
        <div className="shopping-cart-page-list">
            {
                productList.map((product: ProductCardProps) => {
                    return <div className="shopping-cart-page-product">
                        <div className="shopping-cart-page-product-image">
                            <img src={product.imageUrl[0]} alt="" />
                        </div>
                        <div className="shopping-cart-page-product-desc">
                            <div>
                                {product.description}
                            </div>
                            <div>

                                CANTIDAD: 

                                <input 
                                type ="number"
                                defaultValue={product.quantity}
                                onChange={(e) => {handleOnQuantityChange(e,product.id)}} />
                                  
                            
                            </div>
                            <button onClick={() => handleClick(product.id)}>Eliminar</button>
                        </div>
                        <div className="shopping-cart-page-product-price">
                            ${product.price}
                        </div>
                        <div className="shopping-cart-page-product-total">
                            ${product.quantity! * product.price}
                        </div> 
                    </div>
                })
            }
        </div>
        <div> Total: ${total}<div/>
        <ButtonLink href="checkout" label="Proceder al pago" />
    </div>
</div>
};

export { ShoppingCartPage };