import { State } from "./jeans.state";
import { Category } from "./jeans.categories";


export const jeansData = [
    {
      id: 1,
      name: "Louis antonio",
      category: Category.jean,
      images: {
        img1: "/images/louis_antonio_1.jpg",
        img2: "/images/louis_antonio_2.jpg",
        img3: "/images/louis_antonio_3.jpg",
      },
      price: 17500,
      state: State.SoldOut,
      talles: '38/40/42/44' 
    },
    {
        id: 2,
        name: "Pantalon baggy Gris",
        category: Category.baggy,
        images: {
          img1: "url1.jpg",
          img2: "url2.jpg",
          img3: "url3.jpg",
        },
        price: 19000,
        state: State.SoldOut,
        talles: '38/39/40/41/42/43/44/45/46' 
     },
     {
        id: 3,
        name: "bermuda 48H",
        category: Category.bermuda,
        images: {
          img1: "url1.jpg",
          img2: "url2.jpg",
          img3: "url3.jpg",
        },
        price: 12000,
        state: State.nuevo,
        talles: '38/39/40/41/42/43/44/45/46' 
     },
     {
        id: 4,
        name: "JEAN LUMA GRIS",
        category: Category.baggy,
        images: {
          img1: "../images/luma1.JPG",
          img2: "../images/luma2.JPG",
          img3: "../images/luma3.JPG",
        },
        price: 22500,
        state: '',
        talles: '38/40/42/46' 
     },
     {
        id: 5,
        name: "Parachutte Baggy negro",
        category: Category.baggy,
        images: {
          img1: "/public/images/para",
          img2: "url2.jpg",
          img3: "url3.jpg",
        },
        price: 20500,
        state: '',
        talles: '38/40/42' 
     },
     {
        id: 6,
        name: "Parachutte Baggy militar",
        category: Category.baggy,
        images: {
          img1: "/images/parachute_verde_militar_1.JPG",
          img2: "/images/parachute_verde_militar_2.JPG",
          img3: "/images/parachute_verde_militar_3.JPG",
        },
        price: 22000,
        state: '',
        talles: '38/40/42/44' 
     },
     {
        id: 7,
        name: "Bermuda Doha trueno gris",
        category: Category.bermuda,
        specialTag: 'truenos grises',
        images: {
          img1: "url1.jpg",
          img2: "url2.jpg",
          img3: "url3.jpg",
        },
        price: 20500,
        state: State.nuevo,
        talles: '38/44/48' 
     },
     {
        id: 8,
        name: "ICON MAX AZUL ROTO",
        category: Category.baggy,
        images: {
          img1: "/images/icon_maxx_1.JPG",
          img2: "/images/icon_maxx_2.JPG",
          img3: "/images/icon_maxx_3.JPG",
        },
        price: 21000,
        state: '',
        talles: '38/40/42/44' 
     },
     {
        id: 9,
        name: "Bermuda Azul mom cargo arenados",
        category: Category.bermuda,
        specialTag: 'clasico',
        images: {
          img1: "url1.jpg",
          img2: "url2.jpg",
          img3: "url3.jpg",
        },
        price: 11000,
        state: State.ReIngreso,
        talles: '38/39/40/41/42/43/44/45/46/47/48' 
     },
     {
        id: 10,
        name: "Louis super baggy",
        category: Category.baggy,
        specialTag: 'mas anchos',
        images: {
          img1: "/images/louis_super_baggy_1.JPG",
          img2: "/images/louis_super_baggy_2.JPG",
          img3: "/images/louis_super_baggy_3.JPG",
        },
        price: 19500,
        state: '',
        talles: '38/42/44' 
     },
     {
      id: 11,
      name: "Bermuda mom azul rayo",
      category: Category.bermuda,
      specialTag: 'rayos',
      images: {
        img1: "url1.jpg",
        img2: "url2.jpg",
        img3: "url3.jpg",
      },
      price: 8000,
      state: State.nuevo,
      talles: '38/40/46/48' 
   },
   {
    id: 12,
    name: "jean esencia",
    category: Category.jean,
    specialTag: '',
    images: {
      img1: "images/esencia_1.JPG",
      img2: "/images/esencia_2.JPG",
      img3: "/images/esencia_3.JPG",
    },
    price: 17500,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46' 
 },
  {
    id: 13,
    name: "bermuda mom Cargo",
    category: Category.bermuda,
    specialTag: '',
    images: {
      img1: "url1.jpg",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 8000,
    state: State.EnOferta,
    talles: '40/42' 
  },
  {
    id: 14,
    name: "baggy cargo desmontable",
    category: Category.baggy,
    specialTag: 'desmontable',
    images: {
      img1: "/images/baggy_desmontable_gris_1.JPG",
      img2: "/images/baggy_desmontable_gris_2.JPG",
      img3: "/images/baggy_desmontable_gris_3.JPG",
    },
    price: 29000,
    state: '',
    talles: '38/40/42/44'  
  },
  {
    id: 15,
    name: "bermuda celeste lisa",
    category: Category.bermuda,
    specialTag: '',
    images: {
      img1: "url1.jpg",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 8000,
    state: State.nuevo,
    talles: '38/40/44/46'  
  },
  {
    id: 16,
    name: "bermuda Mom celeste roto laser",
    category: Category.bermuda,
    specialTag: 'celeste roto laser',
    images: {
      img1: "url1.jpg",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 8000,
    state: State.nuevo,
    talles: '44/46/48'  
  },
  {
    id: 17,
    name: "bermuda cargo deflecado negro liso",
    category: Category.bermuda,
    specialTag: 'deflecado',
    images: {
      img1: "url1.jpg",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 11000,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46'   
  },
  {
    id: 18,
    name: "bermuda mom cargo celeste roto",
    category: Category.bermuda,
    specialTag: 'mas anchos',
    images: {
      img1: "url1.jpg",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 11000,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46/47/48'   
  },
  {
    id: 19,
    name: "bermuda mom gris liso",
    category: Category.bermuda,
    specialTag: '',
    images: {
      img1: "url1.jpg",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 8000,
    state: '',
    talles: '38/46'   
  },
  {
    id: 20,
    name: "super baggy con parches",
    category: Category.baggy,
    specialTag: 'parches',
    images: {
      img1: "/images/super_baggy_esencia_1.JPG",
      img2: "/images/super_baggy_esencia_2.JPG",
      img3: "/images/super_baggy_esencia_3.JPG",
    },
    price: 17500,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46'   
  },
  {
    id: 21,
    name: "joggers mom negro",
    category: Category.joggers,
    specialTag: 'parches',
    images: {
      img1: "/images/jogger_mom_negro_1.JPG",
      img2: "/images/jogger_mom_negro_2.JPG",
      img3: "/images/jogger_mom_negro_3.JPG",
    },
    price: 16000,
    state: '',
    talles: '38/40/42'   
  },
  {
    id: 22,
    name: "TIED botamanga clasico",
    category: Category.jean,
    specialTag: 'parches',
    images: {
      img1: "/images/tied_1.JPG",
      img2: "/images/tied_2.JPG",
      img3: "/images/tied_3.JPG",
    },
    price: 18000,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46'
  },
  {
    id: 23,
    name: "parachutte marron chocolate",
    category: Category.parachutte,
    specialTag: '',
    images: {
      img1: "/images/parachutte_marron_chocolate_1.JPG",
      img2: "/images/parachutte_marron_chocolate_2.JPG",
      img3: "/images/parachutte_marron_chocolate_3.JPG",
    },
    price: 20500,
    state: '',
    talles: '38/40/42'
  },
  {
    id: 24,
    name: "parachutte semi oxido",
    category: Category.parachutte,
    specialTag: '',
    images: {
      img1: "/images/parachute_semi_oxido_1.JPG",
      img2: "/images/parachute_semi_oxido_2.JPG",
      img3: "/images/parachute_semi_oxido_3.JPG",
    },
    price: 18000,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46'
  },
  {
    id: 25,
    name: "parachutte Humann",
    category: Category.parachutte,
    specialTag: '',
    images: {
      img1: "/images/parachute_humann_1.JPG",
      img2: "/images/parachute_humann_2.JPG",
      img3: "/images/parachute_humann_3.JPG",
    },
    price: 20500,
    state: '',
    talles: '38/40/42'
  },
  {
    id: 26,
    name: "parachutte verde militar",
    category: Category.parachutte,
    specialTag: '',
    images: {
      img1: "images/parachute_verde_militar_1.JPG",
      img2: "/images/parachute_verde_militar_2.JPG",
      img3: "/images/parachute_verde_militar_3.JPG",
    },
    price: 20500,
    state: '',
    talles: '38/40/42'
  },
  {
    id: 27,
    name: "baggy carp",
    category: Category.baggy,
    specialTag: '',
    images: {
      img1: "/images/baggy_carp_1.JPG",
      img2: "/images/baggy_carp_2.JPG",
      img3: "/images/baggy_carp_3.JPG",
    },
    price: 17500,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46'
  },
  {
    id: 28,
    name: "super baggy botamanga mas ancha",
    category: Category.baggy,
    specialTag: '',
    images: {
      img1: "/images/super_baggy_botamanga_celeste_1.JPG",
      img2: "/images/super_baggy_botamanga_celeste_2.JPG",
      img3: "/images/super_baggy_botamanga_celeste_3.JPG",
    },
    price: 20000,
    state: '',
    talles: '38/40/42/44'
  },
  {
    id: 29,
    name: "arrayanes baggy cargo oxido",
    category: Category.baggy,
    specialTag: '',
    images: {
      img1: "none",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 18500,
    state: '',
    talles: '44/46'
  },
  {
    id: 30,
    name: "wider baggy celeste",
    category: Category.baggy,
    specialTag: '',
    images: {
      img1: "/images/wider_baggy_celeste_1.JPG",
      img2: "/images/wider_baggy_celeste_2.JPG",
      img3: "/images/wider_baggy_celeste_3.JPG",
    },
    price: 16500,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46'
  },
  {
    id: 31,
    name: "bermuda Outsider",
    category: Category.bermuda,
    specialTag: 'Outsider',
    images: {
      img1: "url1.jpg",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 11000,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46'
  },
  {
    id: 32,
    name: "gray super baggy parches",
    category: Category.baggy,
    specialTag: 'parches',
    images: {
      img1: "/images/gray_super_baggy_1.JPG",
      img2: "/images/gray_super_baggy_2.JPG",
      img3: "/images/gray_super_baggy_3.JPG",
    },
    price: 17500,
    state: State.pocoStock,
    talles: '38/42/44'
  },
  {
    id: 33,
    name: "bermuda Def Gris Roto",
    category: Category.bermuda,
    specialTag: 'roto',
    images: {
      img1: "url1.jpg",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 8000,
    state: State.pocoStock,
    talles: '40/42'
  },
  {
    id: 50,
    name: "bermuda Def Gris Roto",
    category: Category.bermuda,
    specialTag: 'roto',
    images: {
      img1: "url1.jpg",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 8000,
    state: State.pocoStock,
    talles: '40/42'
  },
  {
    id: 34,
    name: "frisa clasico",
    category: Category.frisa,
    specialTag: '',
    images: {
      img1: "url1.jpg",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 17000,
    state: State.pocoStock,
    talles: '38/40/42'
  },
  {
    id: 35,
    name: "frisa celeste",
    category: Category.frisa,
    specialTag: '',
    images: {
      img1: "url1.jpg",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 17000,
    state: State.pocoStock,
    talles: '38/40/42'
  },
  {
    id: 36,
    name: "frisa verde",
    category: Category.frisa,
    specialTag: '',
    images: {
      img1: "url1.jpg",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 17000,
    state: State.pocoStock,
    talles: '38/40/42'
  },
  {
    id: 37,
    name: "azul joggers mom",
    category: Category.joggers,
    specialTag: '',
    images: {
      img1: "/images/azul_joggers_mom_1.JPG",
      img2: "/images/azul_joggers_mom_2.JPG",
      img3: "/images/azul_joggers_mom_3.JPG",
    },
    price: 16000,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46'
  },
  {
    id: 38,
    name: "azul ups baggy",
    category: Category.baggy,
    specialTag: '',
    images: {
      img1: "/images/ups_azul_baggy_1.JPG",
      img2: "/images/ups_azul_baggy_2.JPG",
      img3: "/images/ups_azul_baggy_3.JPG",
    },
    price: 19500,
    state: '',
    talles: '38/40/42'
  },
  {
    id: 39,
    name: "jean oxido especial",
    category: Category.jean,
    specialTag: '',
    images: {
      img1: "/images/oxido_1.JPG",
      img2: "/images/oxido_2.JPG",
      img3: "/images/oxido_3.JPG",
    },
    price: 17500,
    state: State.nuevo,
    talles: '38/39/40/41/42/43/44/45/46'
  },
  {
    id: 40,
    name: "baggy Ups Gris",
    category: Category.baggy,
    specialTag: '',
    images: {
      img1: "/images/ups_azul_baggy_1.JPG",
      img2: "/images/ups_azul_baggy_2.JPG",
      img3: "/images/ups_azul_baggy_3.JPG",
    },
    price: 22000,
    state: '',
    talles: '38/40/42'
  },
  {
    id: 41,
    name: "Mom oxide",
    category: Category.jean,
    specialTag: '',
    images: {
      img1: "/images/mom_oxide_1.JPG",
      img2: "/images/mom_oxide_2.JPG",
      img3: "/imagoxide_3.JPG",
    },
    price: 17000,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46'
  },
  {
    id: 42,
    name: "bermuda cargo celeste roto",
    category: Category.bermuda,
    specialTag: '',
    images: {
      img1: "",
      img2: "url2.jpg",
      img3: "url3.jpg",
    },
    price: 12000,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46'
  },
  {
    id: 43,
    name: "pantalon baggy oxido",
    category: Category.baggy,
    specialTag: '',
    images: {
      img1: "/images/pantalon_baggy_oxido_2.JPG",
      img2: "/images/pantalon_baggy_oxido_1.JPG",
      img3: "/images/pantalon_baggy_oxido_3.JPG",
    },
    price: 19000,
    state: '',
    talles: '38/39/40/41/42/43/44/45/46'
  },
  {
    id: 44,
    name: "super baggy west",
    category: Category.baggy,
    specialTag: '',
    images: {
      img1: "/images/west_claro_1.JPG",
      img2: "/images/west_claro_2.JPG",
      img3: "/images/west_claro_3.JPG",
    },
    price: 18500,
    state: '',
    talles: '40'
  },
  {
    id: 45,
    name: "West Claro",
    category: Category.baggy,
    specialTag: '',
    images: {
      img1: "/images/west_claro_1.JPG",
      img2: "/images/west_claro_2.JPG",
      img3: "/images/west_claro_3.JPG",
    },
    price: 16500,
    state: '',
    talles: '40/42'
  },
];
  