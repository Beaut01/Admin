import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Navbar } from '../components/Navbar'
import { ProductItem } from '../components/Product/ProductItem'
import { deleteCpu, loadCpu } from '../redux/actions/cpu'

export const Home = () => {
    const dispatch = useDispatch()
    
    const {cpu, loading} = useSelector(state => state.cpu)

    React.useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('cpu') || '[]')
        dispatch(loadCpu(saved))
    },[dispatch])

    const handleDeleteCpu = id => {
        dispatch(deleteCpu(id))
    }

    React.useEffect(() => {
        localStorage.setItem('cpu', JSON.stringify(cpu))
    },[cpu])

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