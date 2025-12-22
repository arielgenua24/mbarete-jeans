// data-utils.js (o jeans.data.js)
import { Category } from '../data/jeans.categories'; // Asegúrate de tener la importación correcta de Category

export const processJeansData = (products) => {
  if (!products || products.length === 0) return [];

  console.log(products);

  // Agrupar productos por nombre
  const groupedProducts = products.reduce((acc, product) => {
    const key = product.name;
    if (!acc[key]) acc[key] = [];
    acc[key].push(product);
    return acc;
  }, {});

  return Object.entries(groupedProducts).map(([name, group]) => {
    // Reordenar: productos con image1 primero
    const prioritizedGroup = [...group].sort((a) => a.image1 ? -1 : 1);
    const mainProduct = prioritizedGroup[0] || {};

    const codeWithoutHash = mainProduct.productCode.replace('#', '');
    const productCodeInt = parseInt(codeWithoutHash, 10);
    console.log(productCodeInt); // Ejemplo: 18

    // Extraer tallas únicas:
    // Se intenta parsear la talla a número; si no es posible, se conserva el valor original (texto)
    const uniqueSizes = [...new Set(
      group.map(p => {
        const parsed = parseInt(p.size, 10);
        return isNaN(parsed) ? p.size : parsed;
      })
    )];

    return {
      id: productCodeInt, // Mantener ID original
      variantIds: group.map(p => p.id), // Metadata: Todos los IDs de firestore que componen este producto
      variantCodes: group.map(p => {
        const code = p.productCode ? p.productCode.replace('#', '') : '0';
        return parseInt(code, 10);
      }),
      name,
      category: Category[mainProduct.category] || Category.other,
      specialTag: '',
      images: {
        img1: mainProduct.image1 || '',
        img2: mainProduct.image2 || '',
        img3: mainProduct.image3 || ''
      },
      price: parseInt(mainProduct.price) || 0,
      state: '',
      sizes: uniqueSizes
        .sort((a, b) => {
          // Si ambas son numéricas, ordena de forma ascendente
          if (typeof a === "number" && typeof b === "number") return a - b;
          // Si ambas son cadenas, ordena alfabéticamente
          if (typeof a === "string" && typeof b === "string") return a.localeCompare(b);
          // En caso de mezcla, se convierten a cadena para comparar
          return a.toString().localeCompare(b.toString());
        })
        .map(size => ({ size, quantity: 0 }))
    };
  });
};
