import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment , incrementbyAmount, reset } from '../Redux/counterSlice'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counterSlice.count)
const [amount,setAmount] = useState(0)
  const handleIncrement = ()=>{
    if(amount>0){
      dispatch(incrementbyAmount(+amount))
      setAmount("")
    }
    else{
      alert("enter valid amount")
//to be continued
    }
  }
  return (
    <div class="w-100 p-3 d-flex justify-content-center align-items-center flex-column" style={{height:'100vh'}}>
      <div class="border border p-3" >
        <h3 class='text-center'>Counter App</h3>
        <div class="row " >
          <h1 class='text-center p-4'>{count}</h1>
          <div class="col-lg-4 text-center my-3">
            <button onClick={()=>dispatch(increment())} className='btn btn-warning'>Increment</button>
          </div>
          <div class="col-lg-4 text-center my-3">
            <button onClick={()=>dispatch(reset())} class='btn btn-danger'>Reset</button>
          </div>
          <div class="col-lg-4 text-center my-3">
            <button onClick={()=>dispatch(decrement())} class="btn btn-success">Decrement</button>
          </div>
          <div className='d-flex justify-content-between mt-5 w-100'>
            <input type="text" className='form-control ' onChange={e=>setAmount(e.target.value)}
            value={amount || ""} placeholder='Enter the amount to be increment' />
            <button onClick={handleIncrement} className='btn btn-primary ms-3'>Increment by Amount</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Counter