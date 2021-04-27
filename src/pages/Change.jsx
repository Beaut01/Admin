import React from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { changeCpu } from '../redux/actions/cpu'

export const ChangePage = () => {
    const { id } = useParams()
    const cpuId = Number(id)
    const cpu = useSelector(({cpu}) => cpu.cpu)
    const dispatch = useDispatch()

    const [fields, setFields] = React.useState({
        name: '',
        imageURL: '',
        characteristics: '',
        quantity: '',
        price: ''
    })

    const handleChange = () => {
        const obj ={
            id: cpuId,
            name: fields.name,
            imageURL: fields.imageURL,
            characteristics: fields.characteristics,
            quantity: fields.quantity,
            price: fields.price
        }
        dispatch(changeCpu(obj))
    }

    React.useEffect(() => {
        localStorage.setItem('cpu', JSON.stringify(cpu))
    },[cpu])

    return(
        <div className='container d-flex justify-content-center'>
            <div className='wrapp'>
                <h4 className='text-center'>Измените товар</h4>
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
                    <button className='btn btn-primary' onClick={handleChange}>Изменить</button>
                </div>
            </div>
        </div>
    )
}