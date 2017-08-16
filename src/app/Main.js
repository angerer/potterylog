import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../public/Home.js'
import Gallery from '../gallery/Gallery.js'
import Works from '../works/Works.js'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/gallery' component={Gallery}/>
        <Route path='/works' component={Works}/>
      </Switch>
    </main>
  );
}

export default Main
