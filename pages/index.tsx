// eslint-disable-next-line react-hooks/exhaustive-deps
import {useEffect, useState} from 'react';
import Card from '../components/card/card';
import Navbar from '../components/navbar/navbar';
import fetchByName from '../resources/get';
import styles from '../styles/Home.module.css';
import {selectCivilizations, setCivilizations} from '../store/slice';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import FloatButton from '../components/floatButton';
import { Civilizations } from '../resources/types';



const Home =() => {
  const {civilizations} = useAppSelector(selectCivilizations);
  const dispatch = useAppDispatch();
  const [useCivilizations, setUseCivilizations] = useState<Civilizations[]>(civilizations);
  const getCivilizations = async () => {
    if(civilizations?.length === 0){
      const res = await fetchByName('civilizations');
      dispatch(setCivilizations(res?.civilizations))
      setUseCivilizations(res?.civilizations);
    }
  }
  const filterData = (find: string) => {
    const result = civilizations.filter((data: Civilizations) => data.name.toLowerCase().includes(find))
    setUseCivilizations(result);
    console.log(result)
    if(result.length < 1) setUseCivilizations(civilizations);
  }
  useEffect(() => {
    getCivilizations();
  }, []);
  return (
    <>

      <Navbar/>
      <div className='container'>
       <div style={{display: 'flex'}}>
        <h1 className={styles.title}>Civilizations</h1>
        <input onChange={(e) => filterData(e.target.value)} className={styles.input} type='text' placeholder='Buscar'></input>
       </div>
       <ul className={styles.list}>
          {useCivilizations?.map(function(array, index){
            return(
              <li key={index}>
                <Card name={array.name} id={array.id} expansion={array.expansion} army_type={array.army_type} unique_unit={array.unique_unit} unique_tech={array.unique_tech} team_bonus={array.team_bonus} civilization_bonus={array.civilization_bonus}/>
              </li>
            )
          })}
       </ul>

      </div>
      <FloatButton/>
    </>
  )
}
export default Home;
