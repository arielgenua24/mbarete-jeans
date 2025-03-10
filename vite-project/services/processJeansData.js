// data-utils.js (o jeans.data.js)
import { Category } from '../data/jeans.categories'; // Asegúrate de tener la importación correcta de Category

export const processJeansData = (products) => {
  if (!products || products.length === 0) return [];

  console.log(products)

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
    // Extraer tallas únicas
    const uniqueSizes = [...new Set(group.map(p => parseInt(p.size)))];

    return {
      id: productCodeInt, // Mantener ID original
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
        .filter(size => !isNaN(size))
        .sort((a, b) => a - b)
        .map(size => ({ size, quantity: 0 }))
    };
  });
};