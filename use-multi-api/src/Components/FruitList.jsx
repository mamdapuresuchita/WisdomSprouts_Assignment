import React from 'react'
import useCustomAPI from '../hooks/useCustomAPI'

const FruitList = () => {
    const{products, loading, error} =useCustomAPI("https://www.fruityvice.com/api/fruit/all")
    if (loading)
    return (
      <>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );

  if (error)
    return (
      <>
        <p>Error while getting products.........</p>
      </>
    );
    return (
    <div>


        <ul>
            {products.map((f,i)=>(
                <li key={i}>
                    {f.name}
                    <ul>
                        <li>{f.family}</li>
                        <li>{f.genus}</li>
                    </ul>
                </li>
            )

            )}
        </ul>
        </div>
  )
}

export default FruitList