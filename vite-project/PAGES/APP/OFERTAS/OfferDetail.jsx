import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../../context/ProductsContext';
import { OFFERS, getOfferProducts, calculatePrices } from '../../../data/offers.data';
import './OfferDetail.css';

/**
 * OfferDetail Page
 * Shows all products for a specific offer/pack
 * Luxury Minimalist Design
 */
const OfferDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { products: processedProducts } = useProducts();



    // Find the offer by slug
    const offer = useMemo(() =>
        OFFERS.find(o => o.slug === slug),
        [slug]
    );

    // No need to process locally anymore


    // Get products for this offer
    const offerProducts = useMemo(() => {
        if (!offer || !processedProducts.length) return [];
        return getOfferProducts(offer.id, processedProducts);
    }, [offer, processedProducts]);

    if (!offer) {
        return (
            <div className="offer-detail-error">
                <h2>Oferta no encontrada</h2>
                <button onClick={() => navigate('/')}>Volver al inicio</button>
            </div>
        );
    }

    return (
        <div className="offer-detail-page">
            {/* Hero Section */}
            <div className="offer-detail-hero" style={{ background: offer.gradient }}>
                <button className="offer-back-button" onClick={() => navigate('/')}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                    Volver
                </button>

                <div className="offer-hero-content">
                    <div className="offer-hero-label">OFERTA ESPECIAL</div>
                    <h1 className="offer-hero-title">{offer.name}</h1>
                    <p className="offer-hero-description">{offer.description}</p>

                    <div className="offer-hero-stats">
                        <div className="offer-stat-item">
                            <div className="stat-value">{offerProducts.length}</div>
                            <div className="stat-label">Productos</div>
                        </div>
                        <div className="offer-stat-divider"></div>
                        <div className="offer-stat-item">
                            <div className="stat-value">{offer.discountPercentage}%</div>
                            <div className="stat-label">Descuento</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="offer-detail-content">
                <div className="offer-content-header">
                    <h2>Productos incluidos</h2>
                    <p>Todo lo que necesitas en un solo pack</p>
                </div>

                {offerProducts.length === 0 ? (
                    <div className="offer-no-products">
                        <p>No hay productos disponibles en esta oferta en este momento.</p>
                    </div>
                ) : (
                    <div className="offer-products-grid">
                        {offerProducts.map(product => {
                            const { fakePrice, realPrice } = calculatePrices(
                                product.price,
                                offer.discountPercentage
                            );

                            // Get the first available image
                            const productImage = product.images?.img1 || product.images?.img2 || product.images?.img3;

                            return (
                                <div
                                    key={product.id}
                                    className="offer-product-item"
                                    onClick={() => navigate(`/product/${product.id}`)}
                                >
                                    <div className="offer-product-badge" style={{ background: offer.accentColor }}>
                                        -{offer.discountPercentage}%
                                    </div>

                                    <div className="offer-product-image-container">
                                        {productImage ? (
                                            <img
                                                src={productImage}
                                                alt={product.name}
                                                className="offer-product-image"
                                            />
                                        ) : (
                                            <div className="offer-product-placeholder">Sin imagen</div>
                                        )}
                                    </div>

                                    <div className="offer-product-info-section">
                                        <h3 className="offer-product-name">{product.name}</h3>

                                        {/* Display Sizes */}
                                        <div className="offer-product-sizes">
                                            {product.sizes && product.sizes.length > 0 ? (
                                                <div className="sizes-list">
                                                    {product.sizes.map((s, idx) => (
                                                        <span key={idx} className="size-tag">
                                                            {typeof s === 'object' ? s.size : s}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : (
                                                <span className="no-sizes">Sin talle</span>
                                            )}
                                        </div>

                                        <div className="offer-product-prices">
                                            <span
                                                className="offer-price-old"
                                            >
                                                AR$ {fakePrice.toLocaleString()}
                                            </span>
                                            <span
                                                className="offer-price-new"
                                            >
                                                AR$ {realPrice.toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* WhatsApp CTA */}
                <div className="offer-cta-section">
                    <h3>¿Necesitas más información?</h3>
                    <p>Contactanos y te asesoramos personalmente</p>
                    <a
                        href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}?text=Hola!%20Me%20interesa%20el%20${encodeURIComponent(offer.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="offer-whatsapp-button"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Consultar ahora
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OfferDetail;
