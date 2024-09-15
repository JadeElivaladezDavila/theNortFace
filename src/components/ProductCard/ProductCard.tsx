import React, { FC } from "react";
import ButtonLink from "../ButtonLink/ButtonLink";
import { FaCartShopping } from "react-icons/fa6";
import './ProductCard.styles.scss';
import ReactStars from "react-stars";
 

export interface ProductCardProps {
    quantity?: any;
    id: string;
    imageUrl: string[];
    description: string;
    price: number;
    stars: number;
    discount?: number;
    title:string;
    imageText?: string;
}

const ProductCard: FC<ProductCardProps> = ({
    imageUrl,
    description,
    price,
    stars,
    discount, 
    id,
    imageText
}) => {
    return <a className="product-card" href={`product${id}`}>
        <><img
            className="product-card-img"
            src={imageUrl[0]}
            alt={imageText} /><label>{description}</label><ReactStars
                count={5}
                size={24}
                value={stars}
                edit={false} /><p>
                <label
                    className="product-card-price">
                    $MXN{price}
                </label>
                <label
                    className="product-card-discount">
                    -{discount}%
                </label>
            </p><ButtonLink
                href=""
                className="dark"
                iconAfter={() => <FaCartShopping />} /></>
    </a>
}

export { ProductCard };