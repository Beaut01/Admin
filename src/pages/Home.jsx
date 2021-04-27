import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Navbar } from '../components/Navbar'
import { ProductItem } from '../components/Product/ProductItem'
import { deleteCpu, loadCpu } from '../redux/actions/cpu'

export const Home = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(loadCpu())
    },[dispatch])
    
    const {cpu, loading} = useSelector(state => state.cpu)

    const handleDeleteCpu = id => {
        dispatch(deleteCpu(id))
    }
    return(
        <React.Fragment>
            <Navbar />
            <div className='container'>
                {cpu.map(obj => {
                    return(
                        <ProductItem
                            key={obj.id}
                            {...obj} 
                            onDelete={handleDeleteCpu}
                        />
                    )
                })}
            </div>
        </React.Fragment>
    )
}