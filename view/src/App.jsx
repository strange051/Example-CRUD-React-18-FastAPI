// import React, { useState, useEffect } from 'react'
// import { Router, Link } from 'react-router-dom'
// import history from './history'
// import Route  from './router'

// export default function App() {
//   return (
//     <Router history={history}>
//       <Route />
//     </Router>
//   )
// }

import { HashRouter } from 'react-router-dom'
import Route from './router'

export default function App() {
  return (
    <HashRouter>
      <Route />
    </HashRouter>
  )
}
