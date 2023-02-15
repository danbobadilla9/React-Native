
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    tel: number;
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Dan Israel',
        edad: 35,
        direccion: {
            pais:'Mexico',
            tel: 223
        }
    }

    // persona.nombreCompleto = 'Dan Israel';
    
    return (
        <>
            <h3>ObjetosLiterales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona,['nombre'],2)}
                </pre>
            </code>
        </>
    )
}
