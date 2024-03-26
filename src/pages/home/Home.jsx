// react
import { useState } from 'react'
// components
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
import Header from '../../components/header/Header'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
