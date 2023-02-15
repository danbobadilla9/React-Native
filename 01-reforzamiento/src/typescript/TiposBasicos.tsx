import React from 'react'

export const TiposBasicos = () => {

    const nombre: string | number = 'Dan';
    const edad: number = 35;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Velociad','Volar','Respirar en el agua'];
    const poderes2: any[] = [];
    poderes2.push(1);
    poderes2.push("Dan");

    return (
        <>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, { (estaActivo)? 'Activo': 'No Activo'}
            <hr/>
            {poderes.join(',')}
        </>
    )
}
