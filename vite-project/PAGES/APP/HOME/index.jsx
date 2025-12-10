import React, { useCallback, useEffect, useState } from 'react';
import SecondaryNavbar from '../../../components/SecondaryNavbar';
import HeroProductCard from './HeroProductCard';
import './index.css';

const demoProducts = [
    {
        id: 'baggy-aranita',
        name: 'BAGGY ARAÑITA',
        isTop: true,
        statusLabel: 'RECIÉN AGREGADO',
        buyPrice: 15000,
        sellPrice: 30000,
        imageUrl:
            'https://i.ibb.co/qL2V158M/37ddab29-6095-43dc-a1b2-ddce7b671b5b.jpg'
    },
    {
        id: 'cargo-stone',
        name: 'CARGO STONE',
        isTop: false,
        statusLabel: 'EXCLUSIVO',
        buyPrice: 17000,
        sellPrice: 34000,
        imageUrl:
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'slim-indigo',
        name: 'SLIM INDIGO',
        isTop: true,
        statusLabel: 'TOP VENTA',
        buyPrice: 16000,
        sellPrice: 32000,
        imageUrl:
            'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?auto=format&fit=crop&w=800&q=80'
    }
];

function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [bgCurrentIndex, setBgCurrentIndex] = useState(0);
    const [bgTransitionIndex, setBgTransitionIndex] = useState(null);
    const [bgIsFading, setBgIsFading] = useState(false);

    const handleViewCatalog = useCallback(() => {
        window.location.hash = '#/jeans';
    }, []);

    useEffect(() => {
        if (activeIndex === bgCurrentIndex) return;

        setBgTransitionIndex(activeIndex);

        const frame = requestAnimationFrame(() =>
            requestAnimationFrame(() => setBgIsFading(true))
        );

        const timeout = setTimeout(() => {
            setBgCurrentIndex(activeIndex);
            setBgTransitionIndex(null);
            setBgIsFading(false);
        }, 500);

        return () => {
            cancelAnimationFrame(frame);
            clearTimeout(timeout);
            setBgIsFading(false);
        };
    }, [activeIndex, bgCurrentIndex]);

    const renderBgLayer = (product, stateClass) => (
        <div className={`home-hero-bg-layer ${stateClass}`} key={`${product.id}-${stateClass}`}>
            <img src={product.imageUrl} alt="" />
        </div>
    );

    const bgBaseProduct = demoProducts[bgCurrentIndex];
    const bgTransitionProduct =
        bgTransitionIndex !== null ? demoProducts[bgTransitionIndex] : null;

    return (
        <div className="home-page">
            <div className="home-hero-bg">
                {renderBgLayer(bgBaseProduct, bgIsFading ? 'fade-out' : 'visible')}
                {bgTransitionProduct
                    ? renderBgLayer(bgTransitionProduct, bgIsFading ? 'fade-in' : '')
                    : null}
            </div>

            <div className="home-content">
                <SecondaryNavbar />
                <HeroProductCard
                    products={demoProducts}
                    activeIndex={activeIndex}
                    onViewCatalog={handleViewCatalog}
                    catalogIconSrc="https://img.icons8.com/ios-filled/50/000000/shopping-bag.png"
                />

                <div className="home-dots">
                    {demoProducts.map((_, idx) => (
                        <button
                            type="button"
                            key={idx}
                            className={`dot ${idx === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(idx)}
                            aria-label={`Mostrar producto ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
