import React from 'react';
import { useNavigate } from 'react-router-dom';
import { calculatePrices } from '../../data/offers.data';
import './OfferSection.css';

/**
 * OfferSection Component
 * Displays a single offer with preview of 4 products
 * Clicking navigates to the full offer page
 */
const OfferSection = ({ offer, products }) => {
    const navigate = useNavigate();

    // Get first 4 products for preview
    const previewProducts = products.slice(0, 4);

    const handleOfferClick = () => {
        navigate(`/ofertas/${offer.slug}`);
    };

    if (previewProducts.length === 0) {
        return null; // Don't render if no products
    }

    return (
        <div
            className="offer-section"
            onClick={handleOfferClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleOfferClick()}
        >
            <div className="offer-header">
                <h2 className="offer-title">APROVECHÁ ESTOS PACKS</h2>
                <div className="offer-badge" style={{ background: offer.gradient }}>
                    <span style={{ color: offer.textColor }}>
                        {offer.discountPercentage}% OFF
                    </span>
                </div>
            </div>

            <div className="offer-name">
                <h3>{offer.name}</h3>
                <p>{offer.description}</p>
            </div>

            <div className="offer-products-grid">
                {previewProducts.map((product, index) => {
                    const { fakePrice, realPrice } = calculatePrices(
                        product.price,
                        offer.discountPercentage
                    );

                    return (
                        <div
                            key={product.id + '-' + index}
                            className="offer-product-card"
                            style={{ background: offer.gradient }}
                        >
                            <div className="offer-product-image">
                                <img
                                    src={product.images.img1 || product.images.img2 || product.images.img3}
                                    alt={product.name}
                                    loading="lazy"
                                />
                            </div>
                            <div className="offer-product-info">
                                <h4 className="offer-product-name" style={{ color: offer.textColor }}>{product.name}</h4>
                                <div className="offer-product-pricing">
                                    <span
                                        className="offer-fake-price"
                                        style={{ color: offer.fakePriceColor }}
                                    >
                                        AR$ {fakePrice.toLocaleString()}
                                    </span>
                                    <span
                                        className="offer-real-price"
                                        style={{ color: offer.realPriceColor }}
                                    >
                                        AR$ {realPrice.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="offer-cta">
                <button className="offer-cta-button">
                    Ver oferta completa
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default OfferSection;
