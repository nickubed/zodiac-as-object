const express = require('express')
const layouts = require('express-ejs-layouts')
const app = express()

let matrix = {
    air: {
        signs: [
            'aquarius', 'gemini', 'libra'
        ],
        traits: [
            'movement',
            'creativity',
            'action',
            'adventure',
            'exciting',
            'easily provoked'
        ]
    },
    water: {
        signs: [
            'pisces', 'cancer', 'scorpio'
        ],
        traits: [
            'private',
            'mysterious',
            'psychic',
            'charming',
            'emotional',
            'sensitive'
        ]
    },
    fire: {
        signs: [
            'aries', 'leo', 'sagittarius'
        ],
        traits: [
            'passionate',
            'strong emotions',
            'temperamental',
            'energetic',
            'accomplished',
            'interesting'
        ]
    },
    earth: {
        signs: [
            'taurus', 'virgo', 'capricorn'
        ],
        traits: [
            'grounded',
            'helpful',
            'practical',
            'realistic',
            'materialistic',
            'dependable'
        ]
    }
}

app.set('view engine', 'ejs')
app.use(layouts)

app.get('/', (req, res) => {
    keys = Object.keys(matrix)
    res.render('index', keys)
})

app.get('/:element', (req, res) => {
    if(matrix[req.params.element]){
        res.render('elementDisplay', {
            signs: matrix[req.params.element].signs,
            traits: matrix[req.params.element].traits,
            element: req.params.element
        })
    }
    else {
        res.render('404')
    }
})

app.listen(3000, () => {
    console.log('Whatup')
})