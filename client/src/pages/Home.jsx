import '../index.css'

import Header from '../components/Header'
import AddRestaurant from '../components/AddRestaurant'
import RestaurantLists from '../components/RestaurantLists'

function Home() {
    return (
        <div>
            <Header />
            <AddRestaurant />
            <RestaurantLists />
        </div>
    )
}

export default Home