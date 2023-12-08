export const item1: Item = {
    title: '',
    img: { 
        url: './src/assets/bottles.jpg',
        alt: 'Two bottles of chardonnay wine',
    },
    content:  '<p>Zobra is recognized as one of the pioneers of the DOCa La Rioja, betting on the development of native varieties. The winery is located in the town of Servilla de La Rioja, near the Camino de Santiago, and is famous for its centuries-old caves where wine was once made.</p>',
}

export const item2: Item = {
    title: undefined,
    img: { 
        url: './src/assets/grapes.jpg',
        alt: 'Grape trees in a vineyard',
    },
    content: "<h2>Family winery</h2><p class='mt-4'>Viñedos y bodega Zobra was founded in 1949 by Manolo Zobra, following a family tradition of generations dedicated to the cultivation of the vine and the production of wine. Currently, the 2nd and 3rd generation of the Zobra family manage the winery preserving the essence with which it was founded.</p><h2 class='mt-6'>Tradition and good craftsmanship</h2><p class='mt-4'>The winery's philosophy is based on the production of wines that express the character and identity of where they come from, with a deep respect for the terroir and the native grape varieties, combining tradition, innovation and good craftsmanship.</p>",
}

export const item3: Item = {
    title: undefined,
    img: { 
        url: './src/assets/cellar.jpg',
        alt: 'Wine cellar',
    },
    content: '<h2>Precision viticulture</h2><p class="mt-6">The winery has 38 hectares of its own vineyards of the native varieties Prieto Picudo and Albarín Blanco, in which precision viticulture is developed to obtain grapes of the highest quality. The vineyards are located on Quaternary soils with a large amount of rounded stones that accumulate the heat of the sun during the day to help the plant withstand the low temperatures of the night as well as improve the maturation of the grape. Currently, the winery combines modern facilities for the production of its wines with a cave over 300 years old where the barrel park is located.</p>',
}

export const contact: Item = {
    title: undefined,
    img: { 
        url: './src/assets/zobra_text.svg',
        alt: 'Zobra Taste Timeless Logo',
    },
    content: '<div class="flex text-center mt-12 pb-6 gap-x-36"><div class="w-4/12"><h3 class="text-2xl">Our address</h3><p class="mt-2">Calle Piqueras 98<br>Logrono, Spain</p></div><div class="w-4/12"><h3 class="text-2xl">Book a tour</h3><p class="mt-2">Monday to Saturday +33 123 456 789<br /> or <a class="text-yellow-600 hover:text-yellow-600 hover:underline" href="./contact">click here.</a></p></div><div class="w-4/12"><h3 class="text-2xl">Distribution</h3><p class="mt-2">For inquiries message us at<br>distribute@zobra.es</p></div></div>',
}

export const contact2: Item = {
    title: undefined,
    img: { 
        url: '../src/assets/zobra_text.svg',
        alt: 'Zobra Taste Timeless Logo',
    },
    content: '<div class="flex text-center mt-12 pb-6 gap-x-36"><div class="w-4/12"><h3 class="text-2xl">Our address</h3><p class="mt-2">Calle Piqueras 98<br>Logrono, Spain</p></div><div class="w-4/12"><h3 class="text-2xl">Book a tour</h3><p class="mt-2">Monday to Saturday +33 123 456 789<br /> or <a class="text-yellow-600 hover:text-yellow-600 hover:underline" href="./contact">click here.</a></p></div><div class="w-4/12"><h3 class="text-2xl">Distribution</h3><p class="mt-2">For inquiries message us at<br>distribute@zobra.es</p></div></div>',
}

export const cardContent: Item = {
    title: undefined,
    img: { 
        url: '../src/assets/glass.jpg',
        alt: 'Hand holding a tilted glass of wine',
    },
    content: '<div class="text-center flex flex-col"><small class="text-yellow-600 uppercase">Our vineyard</small><h2 class="mt-2">Tasting & Tours</h2><p class="mt-4">Embark on a journey of discovery as you explore the heart of our vineyard and uncover the secrets behind our exquisite wines. Our passionate and knowledgeable guides will lead you through the picturesque vineyards, where you will learn about the meticulous grape-growing process and the art of winemaking.</p></div>',
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