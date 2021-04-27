import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCpu } from '../redux/actions/cpu'

export const CreatePage = () => {
    const [fields, setFields] = React.useState({
        name: '',
        imageURL: '',
        characteristics: '',
        quantity: '',
        price: ''
    })
    const dispatch = useDispatch()
    
    const handleAdd = () => {
        const obj = {
            id: Date.now(),
            name: fields.name,
            imageURL: fields.imageURL,
            characteristics: fields.characteristics, 
            quantity: fields.quantity,
            price: fields.price
        }
        dispatch(addCpu(obj))
    }
    
    return(
        <div className='container d-flex justify-content-center'>
            <div className='wrapp'>
                <h1 className='text-center'>Добавьте товар</h1>
                <hr/>
                <div className='row mb-3'>
                    <div className='col-5'>
                        <label htmlFor='name' className='form-label'>Введите название</label>
                        <input 
                            className='form-control' 
                            id='name' 
                            value={fields.name} 
                            onChange={e => setFields({...fields, name: e.target.value})}
                        />
                    </div>
                    <div className='col-7'>
                        <label htmlFor='URL' className='form-label'>Введите ссылку на товар</label>
                        <input 
                            className='form-control' 
                            id='URL' 
                            value={fields.imageURL}
                            onChange={e => setFields({...fields, imageURL: e.target.value})} 
                        />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12'>
                        <label htmlFor='characteristics' className='form-label'>Введите характеристики</label>
                        <input 
                            className='form-control' 
                            id='characteristics' 
                            value={fields.characteristics} 
                            onChange={e => setFields({...fields, characteristics: e.target.value})} 
                        />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-6'>
                        <label htmlFor='quantity' className='form-label'>Введите количество</label>
                        <input 
                            className='form-control' 
                            id='quantity' 
                            value={fields.quantity} 
                            onChange={e => setFields({...fields, quantity: e.target.value})}
                        />
                    </div>
                    <div className='col-6'>
                        <label htmlFor='price' className='form-label'>Введите цену</label>
                        <input 
                            className='form-control' 
                            id='price' 
                            value={fields.price} 
                            onChange={e => setFields({...fields, price: e.target.value})}
                        />
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-around'>
                    <NavLink to='/'>
                        <button className='btn btn-danger'>Закрыть</button>
                    </NavLink>
                    <NavLink to='/'>
                        <button className='btn btn-primary' onClick={handleAdd}>Добавить</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}