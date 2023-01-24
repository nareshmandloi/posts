import React from 'react'
import { Route } from 'react-router-dom';
import Posts from '../posts';
import Welcome from '../welcome';

function Routes() {
    return (
      <div>
        <Route path="/" exact component={Welcome} />
        <Route path="/posts" component={Posts} />
      </div>
    );
  }

export default Routes