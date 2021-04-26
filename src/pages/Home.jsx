import React from 'react'

import { Navbar } from '../components/Navbar'
import { ProductItem } from '../components/Product/ProductItem'
import { DATA } from '../data'

export const Home = () => {
    const cpu = DATA
    return(
        <React.Fragment>
            <Navbar />
            <div className='container'>
                {cpu.map(obj => {
                    return(
                        <ProductItem
                            key={obj.id}
                            {...obj} 
                        />
                    )
                })}
            </div>
        </React.Fragment>
    )
}