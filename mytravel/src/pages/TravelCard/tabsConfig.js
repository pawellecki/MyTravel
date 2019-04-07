import Stages from './Stages/Stages'
import Places from './Places/Places'
import EatDrink from './EatDrink/EatDrink'
import Costs from './Costs/Costs'

const tabs = [
    {
        name: 'stages',
        label: 'Stages',
        component: Stages,
        defaultActive: true
    },
    {
        name: 'places',
        label: 'Places',
        component: Places
    },
    {
        name: 'eat_drink',
        label: 'Eat & drink',
        component: EatDrink
    },
    {
        name: 'costs',
        label: 'Costs',
        component: Costs
    }
]

export default tabs
