import { useCallback, useEffect, useState, useMemo } from 'react';
import SecondaryNavbar from '../../../components/SecondaryNavbar';
import HeroProductCard from './HeroProductCard';
import OfferSection from '../../../components/OfferSection/OfferSection';
import useFirestore from '../../../hooks/useFirestore';
import { processJeansData } from '../../../services/processJeansData';
import { OFFERS, getOfferProducts } from '../../../data/offers.data';
import { jeansData } from '../../../data/jeans.data';
import './index.css';

function Home() {
    const heroProducts = useMemo(() => (
        (jeansData ?? []).slice(0, 10).map((item, index) => ({
            id: item.id,
            heroId: `${item.id}-${index}`,
            name: item.name,
            statusLabel: item.specialTag || item.state || 'DESTACADO',
            isTop: index < 2,
            buyPrice: item.price ?? 0,
            imageUrl: item.images?.img1 || item.images?.img2 || item.images?.img3 || ''
        }))
    ), []);

    const [activeIndex, setActiveIndex] = useState(0);
    const [bgCurrentIndex, setBgCurrentIndex] = useState(0);
    const [bgTransitionIndex, setBgTransitionIndex] = useState(null);
    const [bgIsFading, setBgIsFading] = useState(false);

    // Fetch products from Firestore
    const { products: rawProducts } = useFirestore();
    const [processedProducts, setProcessedProducts] = useState([]);

    const handleViewCatalog = useCallback(() => {
        window.location.hash = '#/jeans';
    }, []);

    // Process products when loaded
    useEffect(() => {
        if (rawProducts && rawProducts.length > 0) {
            const processed = processJeansData(rawProducts);
            setProcessedProducts(processed);
        }
    }, [rawProducts]);

    // Prepare offer data
    const offerData = useMemo(() => {
        if (!processedProducts.length) return [];

        return OFFERS.map(offer => ({
            offer,
            products: getOfferProducts(offer.id, processedProducts)
        })).filter(item => item.products.length > 0); // Only show offers with products
    }, [processedProducts]);

    useEffect(() => {
        if (heroProducts.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % heroProducts.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [heroProducts.length]);

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
        <div className={`home-hero-bg-layer ${stateClass}`} key={`${product.heroId ?? product.id}-${stateClass}`}>
            <img src={product.imageUrl} alt="" />
        </div>
    );

    const bgBaseProduct = heroProducts[bgCurrentIndex] || heroProducts[0];
    const bgTransitionProduct =
        bgTransitionIndex !== null ? heroProducts[bgTransitionIndex] : null;

    return (
        <div className="home-page">
            <div className="home-hero-bg">
                {bgBaseProduct ? renderBgLayer(bgBaseProduct, bgIsFading ? 'fade-out' : 'visible') : null}
                {bgTransitionProduct
                    ? renderBgLayer(bgTransitionProduct, bgIsFading ? 'fade-in' : '')
                    : null}
            </div>

            <div className="home-content">
                <SecondaryNavbar />
                <HeroProductCard
                    products={heroProducts}
                    activeIndex={activeIndex}
                    onViewCatalog={handleViewCatalog}
                    catalogIconSrc="https://img.icons8.com/ios-filled/50/000000/shopping-bag.png"
                />

                <a
                    href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-contact-button"
                    aria-label="Contactar por WhatsApp"
                >
                    <svg
                        className="whatsapp-icon"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span className="whatsapp-text">Consultar ofertas del dia</span>
                </a>

                <div className="home-hero-section">
                    <div className="home-hero-copy">
                        <div className="home-hero-brand">MBARETE</div>
                        <h1 className="home-hero-title">Selección destacada para cerrar el año</h1>
                        <p className="home-hero-description">
                            Tres piezas clave para inspirar a tus clientes. Deslizá en móvil o mirá la
                            selección completa en escritorio.
                        </p>
                    </div>

                    <div className="home-horizontal-scroll">
                        <div className="scroll-card gradient-yellow">
                            <img
                                src="https://i.ibb.co/HTJ9dV4t/Alianza-MBARETE-y-Mercado-Libre.png"
                                alt="Alianza MBARETE y Mercado Libre"
                            />
                        </div>
                        <div className="scroll-card gradient-blue">
                            <img
                                src="https://i.ibb.co/GvBq6SCJ/MBARETE-y-Mercado-Pago-en-accio-n.png"
                                alt="MBARETE y Mercado Pago en acción"
                            />
                        </div>
                        <div className="scroll-card gradient-yellow">
                            <img
                                src="/images-for-home/image3.jpg"
                                alt="Nuevos beneficios exclusivos"
                            />
                        </div>
                    </div>
                </div>

                {/* Dynamic Offer Sections */}
                <div className="home-offers-container">
                    {offerData.map(({ offer, products }) => (
                        <OfferSection
                            key={offer.id}
                            offer={offer}
                            products={products}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
