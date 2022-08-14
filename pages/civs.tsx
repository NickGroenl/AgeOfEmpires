import { useRouter } from 'next/router';
import React, {FunctionComponent, useEffect} from 'react';
import { Civilizations } from '../resources/types';

const Civs:FunctionComponent<Civilizations> = ({id}) => {
    const router = useRouter();
    useEffect(() => {
        console.log(router.query);
    }, [])
    
    return (
        (
            <div>

            </div>
        )
    )
}



export default Civs;
