import { useParams } from 'react-router-dom';
import drinksProvider from '../../utils/drinksProvider/drinksProvider';
import { useEffect, useState } from 'react';

const DetailDrinks = () => {
    const [info, setInfo] = useState({})
    
    const {id} = useParams()

    const getdetail = async () => {
        try {
            const data = await drinksProvider.getDrinkById(id)
            if(data){
              return setInfo(data)
            }else{
              alert('No se encontro el producto')
            }
        }catch{
            console.log(error.message);
        }
      };
    
      useEffect(() => {
        getdetail()
      }, [])

  return (
    <div>
            <p>{info.name}</p>
            <p>{info.image ? info.image : 'Default image'}</p>
            <p>$ {info.price}</p>
        </div>
  )
}

export default DetailDrinks