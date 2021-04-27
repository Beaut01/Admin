import React from 'react' 
import { NavLink } from 'react-router-dom'

export const ProductItem = ({id, characteristics, price, name, quantity, imageURL, onDelete}) => {
    return(
        <div className='row product'>
            <div className='col'>
                <img src={imageURL} alt='cpu' className='image' />
            </div>
            <div className='col-4 text-center'>
                <h4 className='pt-3'>{name}</h4>
                <p>{characteristics}</p>
            </div>
            <div className='col-2 d-flex align-items-center'>
                <h6>{price} ₽</h6>
            </div>
            <div className='col d-flex align-items-center'>
                <p className='pt-4'>{quantity} шт</p>
            </div>
            <div className='col d-flex justify-content-center align-items-center'>
                <NavLink to={`/cpu/${id}`}>
                    <button className='btn btn-primary' >Редактировать</button>
                </NavLink>
            </div>
            <div className='col-2 d-flex justify-content-center align-items-center'>
                <button className='btn btn-danger' onClick={() => onDelete(id)} >Удалить</button>
            </div>
        </div>
    )
}