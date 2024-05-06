const express = require("express")
const { engine } = require("express-handlebars")
const path = require("path")

const app = express()

app.engine('handlebars', engine());

app.set('view engine', 'handlebars')
app.set('views', "./views")

app.use('/public', express.static(path.join(__dirname, 'public')))

const products = [
    {
        id: 1,
        title: 'Sublime Elegance Coffee',
        description: 'Sinta o abraço acolhedor de nosso Café Especial, uma mistura meticulosamente selecionada que transcende as expectativas. Originado de grãos arábica de alta qualidade, este café oferece uma experiência sensorial única. Delicie-se com a suavidade equilibrada e notas sutis de chocolate, complementadas por uma acidez moderada. Cada gole revela uma jornada de sabores refinados, proporcionando momentos de puro prazer e indulgência. Deixe-se envolver pela riqueza aromática e pela profundidade de caráter deste café que celebra o extraordinário em cada xícara.',
        imagePath: '/img/product_cafe_1.png',
        category: 'coffee',
        price: 169.90.toFixed(2),
    },
    {
        id: 2,
        title: 'Dark Harmony Espresso',
        description: 'Descubra a intensidade única do nosso Espresso Dark Harmony. Elaborado com grãos robusta de primeira qualidade, este café oferece uma explosão de sabor encorpado e uma textura sedosa. Notas aveludadas de cacau e um toque de amêndoas criam uma experiência excepcional. Uma escolha para os amantes de cafés ousados e inesquecíveis.',
        imagePath: `/img/product_cafe_${2}.png`,
        category: 'coffee',
        price: 89.50.toFixed(2),
    },
    {
        id: 3,
        title: 'Tranquil Chamomile Infusion',
        description: 'Deleite-se com nossa Infusão de Camomila Tranquil. Uma fusão suave de flores de camomila colhidas à mão, proporcionando uma bebida relaxante e reconfortante. Cada gole é uma pausa serena, infundindo calma e bem-estar. Descubra a harmonia em cada momento com esta infusão delicadamente perfumada.',
        imagePath: `/img/product_cafe_${3}.png`,
        category: 'tea',
        price: 29.90.toFixed(2),
    },
    {
        id: 4,
        title: 'Velvet Raspberry Hot Chocolate',
        description: 'Aconchegue-se com nosso Chocolate Quente Velvet Raspberry. Uma indulgência irresistível, combinando a cremosidade do chocolate quente com a explosão de sabores de framboesa. Este deleite suave é uma celebração do prazer indulgente, perfeito para os amantes de uma experiência doce e reconfortante.',
        imagePath: `/img/product_cafe_${4}.png`,
        category: 'chocolate',
        price: 39.99.toFixed(2),
    },
]

app.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    const selectedProduct = products.find(product => product.id === productId);

    if (selectedProduct) {
        console.log(`Produto de ID ${productId} foi encontrado!`);
        res.render('product', { product: selectedProduct });
    } else {
        console.log(`Produto de ID ${productId} não encontrado!`);
        res.status(404).send('Produto não encontrado');
    }
})

app.get('/', (req, res) => {
    const productsWithTruncatedDescriptions = products.map(product => ({
        ...product,
        description: product.description.length > 90
            ? product.description.substring(0, 90) + '...'
            : product.description,
    }));

    res.render('home', { products: productsWithTruncatedDescriptions });
})

app.listen(3000, () => {
    console.log('App funcionando!')
})