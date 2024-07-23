import React from 'react';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import Carousel from './components/Carousel/Carousel';
import FilterEvents from './components/FilterEvents/FilterEvents';
import PopularEvents from './components/PopularEvents/PopularEvents';
function App() {
  return (
    <div>
  <Carousel/>
   <FilterEvents/>
   <Categories/>

   <Footer/>
  </div>
  );
}

export default App;