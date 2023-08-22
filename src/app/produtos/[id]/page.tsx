'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import { Product } from "@/models/ProductModel";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Spinner } from "@/components/Spinner";
import styles from "./page.module.scss";

import productsList from "@/mocks/products.json";

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';


interface ParamsProps {
    params: {
        id: string
    }
}


export default function FilteredProducts({ params: { id } }: ParamsProps) {

    const router = useRouter();

    const [product, setProduct] = useState({} as Product);

    useEffect(() => {
        const filteredProduct = productsList.filter((product) => product.id === parseInt(id));
        setProduct(filteredProduct[0]);
    }, []);

    function formatPrice(price: number) {
        return price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function getProductPhoto(link: string | string[]) {
        return Array.isArray(link) ? link[0] : link;
    }

    return (
        <>
            <Header />
            <main className={styles.main__wrapper}>
                <div className="container">
                    <button className={styles.main__header} onClick={() => router.back()}>
                        <FaArrowLeft
                            color="#000"
                            size={20}
                        />
                        <h2>Produto</h2>
                    </button>
                    <div className={styles.main__body}>
                        {
                            !Object.keys(product).length ? <Spinner type="products" /> :
                                <>
                                    <Swiper
                                        effect={'cards'}
                                        grabCursor={true}
                                        modules={[EffectCards, Autoplay]}
                                        className={styles.swiper}
                                    >
                                        {
                                            Array.isArray(product.photo) ?
                                                product.photo.map((photo, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div
                                                            className={styles.photo}
                                                            style={{ backgroundImage: `url('${photo}')` }}
                                                        />
                                                    </SwiperSlide>

                                                )) :
                                                <SwiperSlide>
                                                    <div
                                                        className={styles.photo}
                                                        style={{ backgroundImage: `url('${product.photo}')` }}
                                                    />
                                                </SwiperSlide>
                                        }
                                    </Swiper>

                                    <div className={styles.product__details}>
                                        <h3>{product.name}</h3>
                                        <h4>{formatPrice(product.price!)}</h4>
                                        <p>{product.description}</p>
                                        <a
                                            href={`https://api.whatsapp.com/send?phone=5583986903987&text=Ol%C3%A1.%20Tude%20bem?%0AGostaria%20de%20encomendar%20um(a)%20${product.name}%20com%20este%20modelo%20(${getProductPhoto(product.photo)})`}
                                            target="_blank"
                                            className={styles.card__button}
                                        >
                                            <BiLogoWhatsapp size={20} />
                                            <span>Comprar</span>
                                        </a>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
