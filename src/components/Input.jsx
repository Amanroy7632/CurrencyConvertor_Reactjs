import React ,{useId} from "react";
function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false,
  currencyOption = [],
  className = "",
}) {
  const uinqueAmountId=useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={uinqueAmountId} className="text-black/40  text-2xl mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          name=""
          id={uinqueAmountId}
          className="outline-none w-full bg-transparent py-5 text-2xl"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
          
        />
      </div>
      <div className="w-1/2 flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full text-xl">Currency Type</p>
        <select
          name=""
          id=""
          value={selectCurrency}
          onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
         {currencyOption.map((currency)=>
          <option key={currency} value={currency}>
            {currency}
          </option>
         )}
        </select>
      </div>
    </div>
  );
}

export default Input;
