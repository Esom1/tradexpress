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
            <div key={id} className='border-lg-end w-25'>
             <div className='d-flex justify-content-center align-items-center gap-3 minus'>
             <p className='symbol'>{symbol}/NGN</p>
              <p className='percent'>{percent_change_1h}% <span>{percent_change_1h <= 0 ? (<img className='arrow' src ={redarrow} alt = 'red-arrow-img' />):(<img className='arrow' src ={greenarrow} alt = 'green-arrow-img' />)}
              </span></p>
             </div>
              <p className='text-center local'>{price_usd}/NGN</p>
            </div>
          )
        })}
     </div>
          </div>
   </div>
  )
}

export default FetchBtc