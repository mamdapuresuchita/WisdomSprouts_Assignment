import React from 'react'
import useCustomAPI from '../hooks/useCustomAPI';

const DogList = () => {
        const{products, loading, error} =useCustomAPI("https://api.thedogapi.com/v1/breeds")
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
            {products.map((d,i)=>(
                <li key={i}>
                    {d.name}
                    <ul>
                        <li>{d.bred_for}</li>
                        <li>{d.breed_group}</li>
                        <li>{d.life_span}</li>
                    </ul>
                </li>
            )

            )}
        </ul>
        </div>
  )
}

export default DogList