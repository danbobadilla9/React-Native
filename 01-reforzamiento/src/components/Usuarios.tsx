import React from 'react'
import { useEffect } from 'react';
import { reqResApi } from '../api/reqRes';

const Usuarios = () => {
    
    useEffect( () => {
        //llamado al API

        reqResApi.get('/users')
            .then( resp => {
                console.log(resp.data.data);
                
            })
            .catch( console.log );
            

    },[])

    return (

        <>
            <h3>Usuarios:</h3>
            <table className='table'>
                
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>

                <tbody>

                </tbody>

            </table>
        </>
    )
}

export default Usuarios