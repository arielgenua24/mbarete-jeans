import React, { useEffect, useState } from 'react';
import './HeroProductCard.css';

const formatPrice = (value) =>
    new Intl.NumberFormat('es-AR').format(Math.round(value ?? 0));

function HeroProductCard({
    products = [],
    activeIndex = 0,
    onViewCatalog,
    catalogIconSrc
}) {
    const hasProducts = products && products.length > 0;
    const safeActiveIndex = hasProducts
        ? Math.min(Math.max(activeIndex, 0), products.length - 1)
        : 0;
    const [currentIndex, setCurrentIndex] = useState(safeActiveIndex);
    const [transitionProduct, setTransitionProduct] = useState(null);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        if (!hasProducts) return;
        if (safeActiveIndex === currentIndex) return;

        const nextProduct = products[safeActiveIndex];
        setTransitionProduct(nextProduct);

        const frame = requestAnimationFrame(() =>
            requestAnimationFrame(() => setIsFading(true))
        );

        const timeout = setTimeout(() => {
            setCurrentIndex(safeActiveIndex);
            setTransitionProduct(null);
            setIsFading(false);
        }, 500);

        return () => {
            cancelAnimationFrame(frame);
            clearTimeout(timeout);
            setIsFading(false);
        };
    }, [safeActiveIndex, hasProducts, currentIndex, products]);

    if (!hasProducts) {
        return null;
    }

    const activeProduct = products[safeActiveIndex];
    const baseProduct = products[currentIndex];

    const renderLayer = (product, stateClass) => (
        <div className={`hero-layer ${stateClass}`} key={`${product.id}-${stateClass}`}>
            <img className="hero-main-img" src={product.imageUrl} alt={product.name} />
        </div>
    );

    return (
        <div className="hero-card">
            <div className="hero-image-container">
                {renderLayer(baseProduct, isFading ? 'fade-out' : 'visible')}
                {transitionProduct ? renderLayer(transitionProduct, isFading ? 'fade-in' : '') : null}

                <div className="hero-badges">
                    {activeProduct.isTop ? <span className="hero-badge">TOP</span> : null}
                    <span className="hero-badge">{activeProduct.statusLabel}</span>
                </div>

                <div className="hero-info">
                    <div className="hero-product-name">{activeProduct.name}</div>
                    <div className="hero-price-line">
                        <span className="hero-price-label">Compralo a:</span>
                        <span className="hero-price-value">${formatPrice(activeProduct.buyPrice)}</span>
                    </div>
                    <div className="hero-price-line">
                        <span className="hero-price-label">Se vende a:</span>
                        <span className="hero-price-value">${formatPrice(activeProduct.sellPrice)}</span>
                    </div>
                </div>

                <button type="button" className="hero-catalog-btn" onClick={onViewCatalog}>
                    {catalogIconSrc ? <img src={catalogIconSrc} alt="" className="hero-catalog-icon" /> : null}
                    <span>VER CATALOGO</span>
                </button>
            </div>
        </div>
    );
}

export default HeroProductCard;
