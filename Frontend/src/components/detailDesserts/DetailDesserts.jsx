import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dessertsProvider from '../../utils/dessertsProvider/dessertsProvider';

const DetailDesserts = () => {
    const [info, setInfo] = useState({})
    
    const {id} = useParams()

    const getdetail = async () => {
        try {
          const data = await dessertsProvider.getDessertsById(id)
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

export default DetailDesserts