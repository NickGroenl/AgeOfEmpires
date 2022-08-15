import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {FunctionComponent} from 'react';
import Navbar from '../components/navbar/navbar';
import {Civilizations } from '../resources/types';
import {useAppSelector} from '../store/hooks';
import {selectCivilizations} from '../store/slice';
import styles from '../styles/Home.module.css';

const Civs:FunctionComponent<Civilizations> = () => {
    const router = useRouter();
    const {civilizations} = useAppSelector(selectCivilizations);
    return (
        (
            <>
                <Navbar/>
                {civilizations.map((array, index) => {
                    if(Number(array.id) === Number(router.query.id)) 
                    return (
                        <div className='container' key={index}>
                            <h1 className={styles.title}>{array.name}</h1>
                            <div style={{display: 'flex'}}>
                                <p>Expansion:</p> <p className={styles.text}>{array.expansion}</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p>Civilization Bonus:</p> <p className={styles.text}>{array.civilization_bonus}</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p>Team Bonus:</p> <p className={styles.text}>{array.team_bonus}</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <p>Army Type:</p> <p className={styles.text}>{array.army_type}</p>
                            </div>
                            <Link href='/'>Back</Link>
                        </div>)
                    })
                }

            </>
        )
    )
}



export default Civs;
