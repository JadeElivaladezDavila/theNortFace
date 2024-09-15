import { RiShoppingCart2Line } from "react-icons/ri";

import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../../../../providers/ShoppingCartContext";
import { ProductCardProps } from "../../../../ProductCard/ProductCard";
import { IconLink } from "../../../../IconLink/IconLink";


const ShoppingCart = () => {
    const { productList } = useContext(ShoppingCartContext);
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        let sum = 0;
        productList.forEach((product: ProductCardProps) => {
            sum += Number(product.quantity);
        });
        setCount(sum);
    }, [productList]);

    return <div>
        <IconLink href="/shopping-cart" 
            label={
                productList.length > 0 ? 
                String(count) : 
                ''}>
            <RiShoppingCart2Line />
        </IconLink>
    </div>
}

export { ShoppingCart };
