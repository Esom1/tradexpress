import React,{useState,useEffect} from 'react'
import greenarrow from '../assets/green arrow.png'
import redarrow from '../assets/red arrow.png'
import '../styles/FetchBtc.css'

const FetchBtc = () => {
  const [data,setData] = useState([])
  const [Loading,setLoading] = useState(false)
  const url = 'https://api.coinlore.net/api/tickers/?start=0&limit=5'
  const fetcher = async ()=>{
    try{

      const fetchedData = await fetch(url)
    const resp = await fetchedData.json()
    console.log(resp.data);
    setData(resp.data)

    }catch(e){
      console.log(e);

    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetcher()
  }, [])
  return (
   <div className='border border-2 symbol'>
     <div className='container '>
     <div className='d-lg-flex  justify-content-between align-items-center mt-3 fetch-part'>
     {Loading && <p>Loading....</p>}
        {data.map((datum)=>{
          const {id,symbol,percent_change_1h,price_usd} = datum
          return(
            <div key={id} className='border-end w-25'>
             <div className='d-flex justify-content-center align-items-center gap-3'>
             <p>{symbol}/NGN</p>
              <p>{percent_change_1h}% <span>{percent_change_1h <= 0 ? (<img src ={redarrow} alt = 'red-arrow-img' />):(<img src ={greenarrow} alt = 'green-arrow-img' />)}
              </span></p>
             </div>
              <p className='text-center'>{price_usd}/NGN</p>
            </div>
          )
        })}
     </div>
          </div>
   </div>
  )
}

export default FetchBtc