export const item1: Item = {
    title: '',
    img: { 
        url: './src/assets/bottles.jpg',
        alt: 'Two bottles of chardonnay wine',
    },
    content:  '<p>Zobra tiene el reconocimiento de ser uno de los impulsores de la D.O. La Rioja, apostando por el desarrollo de las variedades autóctonas. La bodega está ubicada en el pueblo Servilla de La Rioja, próximo al Camino de Santiago, y famoso por sus cuevas centenarias donde antaño se elaboraba vino.</p>',
}

export const item2: Item = {
    title: undefined,
    img: { 
        url: './src/assets/grapes.jpg',
        alt: 'Grape trees in a vineyard',
    },
    content: '<h2 class="mb-4">Bodega familiar</h2><p>Viñedos y bodega Zobra se funda en 1949 por Manolo Zobra, siguiendo una tradición familiar de generaciones dedicadas al cultivo de la vid y la elaboración de vino. En la actualidad la 2ª y 3ª generación de la familia Zobra rigen la bodega preservando la esencia con la que se fundó.</p><h2 class="mb-4 mt-6">Tradición, innovación y buen hacer</h2><p>La filosofía de la bodega se sustenta en elaborar vinos que expresen el carácter y la identidad de donde provienen, con un profundo respeto hacia el terruño y a las variedades de uva autóctonas aunando tradición, innovación y buen hacer.</p>',
}

export const item3: Item = {
    title: undefined,
    img: { 
        url: './src/assets/cellar.jpg',
        alt: 'Wine cellar',
    },
    content: '<h2 class="mb-4">Viticultura de precisión</h2><p>La bodega cuenta con 38 hectáreas de viñedo propio de las variedades autóctonas Prieto Picudo y Albarín Blanco, en las cuales se desarrolla  una viticultura de precisión para obtener uvas de la mejor calidad. Los viñedos se asientan sobre suelos cuaternarios con gran cantidad de cantos rodados que acumulan el calor del sol durante el día para ayudar a la planta a soportar las bajas temperaturas de la noche así como a mejorar la maduración de la uva. En la actualidad la bodega combina unas modernas instalaciones para la elaboración de sus vinos con una cueva de más de 300 años de antigüedad donde se ubica el parque de barricas.</p>',
}

export const products: Product[] = [{
    id: 1,
    title: "Rioja Red Blend",
    slug: "rioja-red-blend",
    year: 2020,
    description: "As the name suggests, this style is overwhelmingly found in Rioja, and just a handful of notable examples exist in Priorat (west of Barcelona) and Valdepenas (south of Madrid). In Rioja, the wine's foundation, Tempranillo, is grown primarily in the sub-regions of Rioja Alta and Rioja Alavesa. Tempranillo offers a range of flavors from lighter red fruit such as strawberries and cherries, through to richer and riper flavors such as prunes, chocolate and stewed fruit.",
    img: "../src/assets/rioja.jpg",
},{
    id: 2,
    title: "Tempranillo",
    slug: "tempranillo",
    year: 2021,
    description: "The backbone of some of the best Spanish wines, Tempranillo is a red grape variety grown throughout Spain and Portugal. Generally speaking, Tempranillo produces red wines with red fruit and leather aromas, high tannins, moderate to low acidity, and moderate alcohol. In 2020, Tempranillo was the third most-planted grape variety in the world, with the majority of plantings in the Iberian peninsula.",
    img: "../src/assets/rioja.jpg",
},{
    id: 3,
    title: "Garnacha",
    slug: "garnacha",
    year: 2020,
    description: "Tempranillo is Spain's signature grape, largely thanks to its starring role in the celebrated wines of Rioja. It is also the country's most widely planted variety. Garnacha (or Grenache, as it is known in France) is a versatile grape variety grown all along the Mediterranean coast. In Spain, its most prestigious use is in Priorat wines, but it is widely used in blends, the most famous of which is probably France's Châteauneuf-du-Pape.",
    img: "../src/assets/rioja.jpg",
},]