import Stages from './Stages/Stages'
import Places from './Places/PlacesContainer'
import EatDrink from './EatDrink/EatDrinkContainer'
import Costs from './Costs/CostsContainer'

const tabs = [
    {
        name: 'stages',
        label: 'Stages',
        component: Stages,
        defaultActive: true
    },
    // {
    //     name: 'places',
    //     label: 'Places',
    //     component: Places
    // },
    // {
    //     name: 'eat_drink',
    //     label: 'Eat & drink',
    //     component: EatDrink
    // },
    // {
    //     name: 'costs',
    //     label: 'Costs',
    //     component: Costs
    // }
]

export default tabs
