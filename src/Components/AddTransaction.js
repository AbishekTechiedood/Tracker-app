import React ,{useState , useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';


export const AddTransaction = () => {
    const [text , SetText] =useState('');
    const [amount , SetAmount] =useState(0);


    const{addTransaction} = useContext(GlobalContext);

    const OnSubmit = e => {
      e.preventDefault();

      const NewTransaction ={
        id:Math.floor(Math.random()*100000000),
        text,
        amount: +amount
      }

      addTransaction(NewTransaction);
    }


  return (

    <>
    <h3>Add new transaction</h3>
    <form onSubmit={OnSubmit}>
    <div className='form-control'>
    <label htmlFor="text">Text</label>

    <input type ='text' value ={text} onChange={(e)=>SetText(e.target.value)} placeholder='Enter text...'/>

    </div>
    <div className='form-control'>

       <label htmlfor ='amount'>

        Amount <br />(negative - expense ,positive -income )

       </label>

       <input type='number' value={amount} onChange={(e)=>SetAmount(e.target.value)} placeholder='Enter amount...'/>

       </div>

       <button className='btn'>Add Transaction</button>

   </form>
    
    </>
  )
}
  
export default AddTransaction