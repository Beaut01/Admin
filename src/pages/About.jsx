import React from 'react'
import { Navbar } from '../components/Navbar'

export const AboutPage = () => {
    return(
        <React.Fragment>
            <Navbar />
            <div className='container' >
                <div className="alert alert-primary mt-4 p-4" role="alert">
                    <h3>Весрия приложения: 1.0</h3>
                </div>
            </div>
        </React.Fragment>
    )
}