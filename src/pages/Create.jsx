import React from 'react'
import { NavLink } from 'react-router-dom'

export const CreatePage = () => {
    return(
        <div className='container d-flex justify-content-center'>
            <div className='wrapp'>
                <h1 className='text-center'>Добавьте товар</h1>
                <hr/>
                <div className='row mb-3'>
                    <div className='col-5'>
                        <label htmlFor='name' className='form-label'>Введите название</label>
                        <input className='form-control' id='name' />
                    </div>
                    <div className='col-7'>
                        <label htmlFor='URL' className='form-label'>Введите ссылку на товар</label>
                        <input className='form-control' id='URL' />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12'>
                        <label htmlFor='characteristics' className='form-label'>Введите характеристики</label>
                        <input className='form-control' id='characteristics' />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-6'>
                        <label htmlFor='quantity' className='form-label'>Введите количество</label>
                        <input className='form-control' id='quantity' />
                    </div>
                    <div className='col-6'>
                        <label htmlFor='price' className='form-label'>Введите цену</label>
                        <input className='form-control' id='price' />
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-around'>
                    <NavLink to='/'>
                        <button className='btn btn-danger'>Закрыть</button>
                    </NavLink>
                    <NavLink to='/'>
                        <button className='btn btn-primary'>Добавить</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}