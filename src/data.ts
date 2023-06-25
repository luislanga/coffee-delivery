import tradEx from './dataImages/Coffee.png'
import americanEx from './dataImages/Coffee (1).png'
import iceEx from './dataImages/Coffee (2).png'


export default {
    items: [
        {
            id: 0,
            name: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: 10,
            tags: ['tradicional'],
            picture: tradEx
        },
        {
            id: 1,
            name: 'Expresso Americano',
            description: 'Expresso diluído, menos intenso que o tradicional',
            price: 10,
            tags: ['tradicional'],
            picture: americanEx
        },
        {
            id: 2,
            name: 'Expresso Gelado',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            price: 10,
            tags: ['tradicional', 'gelado'],
            picture: iceEx
        },
    ]
}