const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    const products = [
        {
            title: 'Laranjeira',
            category: 'Frutífera',
            body: 'A laranjeira é uma árvore de folhas perenes, conhecida por suas folhas verde-escuras e brilhantes. Suas flores brancas desabrocham em deliciosas laranjas, apreciadas por seu sabor cítrico e alto teor de vitamina C.',
            price: 30,
        },
        {
            title: 'Bananeira',
            category: 'Frutífera',
            body: 'A bananeira é uma planta tropical de folhas largas, produzindo cachos de bananas alongadas. Rápido crescimento e rica em potássio, é uma importante fonte de alimentos em climas tropicais.',
            price: 20,
        },
        {
            title: 'Cerejeira',
            category: 'Frutífera',
            body: 'A cerejeira é uma árvore caduca com flores rosa pálido ou brancas na primavera. Oferece cerejas coloridas, variando do vermelho ao preto, apreciadas tanto por sua beleza ornamental quanto por seu sabor doce.',
            price: 40,
        },
    ]

    res.render('home', { products })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})