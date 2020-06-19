import React, { useState, useEffect } from 'react' 

function MyName(props) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    useEffect(() => {
       console.log('my prop = ' , props);
       setName(props.name);
       setSurname(props.surname);
        
    }, [])
    return (
        <div>
            <h1>{name} {surname}</h1>
            
        </div>
    )
}

export default MyName
