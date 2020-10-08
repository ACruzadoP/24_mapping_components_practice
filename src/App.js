import React from "react"

import productsData from "./vschoolProducts"
import Product from "./Product"

function App() {
  const pruductComponents = productsData.map(item => <Product key={item.id} product={item}/>)

  return (
    <div>
        {pruductComponents}
    </div>
  )
}

export default App