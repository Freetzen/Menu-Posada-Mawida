import { useParams } from "react-router-dom";

const Detail = () => {
    
    const {id} = useParams()

    const getdetail = async () => {
        try {
            // const detail = await provider.detail()
        }catch{
            console.log(error.message);
        }
      };
    
      useEffect(() => {
        getdetail()
      }, [])

  return (
    <div>Detail</div>
  )
}

export default Detail