import {useState, useEffect} from 'react';
import Card from '../components/card/card';
import Navbar from '../components/navbar/navbar';
import fetchByName from '../resources/get';
import { Civilizations } from '../resources/types';
import styles from '../styles/Home.module.css';



const Home =() => {
  const [civilizations, setCivilizations] = useState<Civilizations[]>();
  const getCivilizations = async () => {
    const res = await fetchByName('civilizations');
    setCivilizations(res?.civilizations);
  }
  
  useEffect(() => {
    getCivilizations();
  }, []);
  return (
    <>
      <Navbar/>
      <div className='container'>
       <h1 className={styles.title}>Civilizations</h1>
       <ul className={styles.list}>
          {civilizations?.map(function(array, index){
            return(
              <li key={index}>
                <Card name={array.name} id={array.id} expansion={array.expansion} army_type={array.army_type} unique_unit={array.unique_unit} unique_tech={array.unique_tech} team_bonus={array.team_bonus} civilization_bonus={array.civilization_bonus}/>
              </li>
            )
          })}
       </ul>

      </div>
    </>
  )
}
export default Home;
