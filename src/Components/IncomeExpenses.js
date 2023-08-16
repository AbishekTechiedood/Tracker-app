import React ,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';


//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '₹ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i ) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}


const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);

 const amounts = transactions.map(transaction => transaction.amount);

 const income = amounts

 .filter(item =>item >0)
 .reduce((acc ,item)=>(acc += item) ,0)

 const expenses =(
  amounts.filter(item => item < 0).reduce((acc,item)=>(acc += item),0) *
  -1
 )


return (
   <div className='inc-exp-container'>
   <div>
    <h4>INCOME</h4>
    <p className="money-plus">{moneyFormatter(income)}</p>
  </div>

  <div>
    <h4>EXPENSE</h4>
    <p className="money-plus">{moneyFormatter(expenses)}</p>
  </div>
  </div>


 )
}

export default IncomeExpenses