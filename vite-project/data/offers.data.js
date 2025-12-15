// Offer configurations for Mbarete Jeans
// Each offer represents a special pack/promotion

export const OFFERS = [
    {
        id: 'pack-verano-2025',
        name: 'Pack Verano 2025',
        slug: 'pack-verano-2025',
        description: 'Los mejores jeans para la temporada de verano',
        discountPercentage: 35,
        gradient: 'linear-gradient(to top, #F68300, #fcd6acff, #FFFFFF)',
        textColor: '#ffffffff',
        accentColor: '#ffffffff',
        realPriceColor: '#ffffffff', // Color manually controlable
        fakePriceColor: '#ffffffff', // Color manually controlable
        // Filter logic: will select specific category or state
        filterType: 'category',
        filterValue: 'bermuda'
    },
    {
        id: 'pack-emprendedor',
        name: 'Pack Emprendedor',
        slug: 'pack-emprendedor',
        description: 'Todo lo que necesitas para empezar tu negocio',
        discountPercentage: 40,
        gradient: 'linear-gradient(to top, #CCE7FF, #E6F3FF, #FFFFFF)',
        textColor: '#1A1A1A',
        accentColor: '#5BA3D0',
        realPriceColor: '#000000', // Example: Dark teal for "good deal"
        fakePriceColor: '#6f6f6fff', // Example: Red for old price
        filterType: 'mixed',
        filterValue: null // Will select variety
    },
    {
        id: 'oferta-relampago',
        name: 'Oferta Relámpago',
        slug: 'oferta-relampago',
        description: 'Descuentos increíbles por tiempo limitado',
        discountPercentage: 30,
        gradient: 'linear-gradient(to top, #001e3df3, #117dc4ff,  #ffffffff)',
        textColor: '#ffffffff',
        accentColor: '#ffffffff',
        realPriceColor: '#ffffffff',
        fakePriceColor: '#ffffffff',
        filterType: 'category',
        filterValue: 'jean'
    },
    {
        id: 'pack-mayorista-premium',
        name: 'Pack Mayorista Premium',
        slug: 'pack-mayorista-premium',
        description: 'La mejor selección para revendedores',
        discountPercentage: 38,
        gradient: 'linear-gradient(to top, #dfba8c3d, #fbe1c7ff, #FFFFFF)',
        textColor: '#1A1A1A',
        accentColor: '#fbe1c7ff',
        realPriceColor: '#090114ff', // Purple luxury
        fakePriceColor: '#BDBDBD',
        filterType: 'category',
        filterValue: 'baggy'
    }
];

/**
 * Get products for a specific offer
 * @param {string} offerId - The offer ID
 * @param {Array} allProducts - All available products
 * @returns {Array} Filtered products for this offer
 */
export const getOfferProducts = (offerId, allProducts) => {
    const offer = OFFERS.find(o => o.id === offerId || o.slug === offerId);
    if (!offer || !allProducts) return [];

    let filtered = [];

    // Special logic for Pack Verano: Filter by "bermuda" in name or category
    if (offer.id === 'pack-verano-2025') {
        return allProducts.filter(p =>
            (p.name && p.name.toLowerCase().includes('bermuda')) ||
            (p.category && p.category.toString().toLowerCase().includes('bermuda'))
        );
    }

    if (offer.filterType === 'category' && offer.filterValue) {
        filtered = allProducts.filter(p => p.category === offer.filterValue);
    } else if (offer.filterType === 'mixed') {
        // Get a variety: some from each category
        const categories = [...new Set(allProducts.map(p => p.category))];
        filtered = categories.flatMap(cat =>
            allProducts.filter(p => p.category === cat).slice(0, 3)
        );
    }

    return filtered;
};

/**
 * Calculate fake price (inflated) and real price
 * @param {number} realPrice - The actual product price
 * @param {number} discountPercentage - The fake discount percentage
 * @returns {Object} { fakePrice, realPrice }
 */
export const calculatePrices = (realPrice, discountPercentage) => {
    const fakePrice = Math.round(realPrice * (1 + discountPercentage / 100));
    return {
        fakePrice,
        realPrice
    };
};

export default OFFERS;
