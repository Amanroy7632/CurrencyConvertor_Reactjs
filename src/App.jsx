import { useState } from "react";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const converted = () => {
    if(currencyInfo[to]){
      setConvertedAmount(amount * Number(currencyInfo[to]));
    }else{
      alert("Invalid Country code")
    }
    
  };
  const bgUrl='https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  // const bgUrl =
  //   "https://tse1.mm.bing.net/th?id=OIP.cLOn0k46Sk86ZjHYkKtPhAHaEK&pid=Api&P=0&h=220";
    // const bgUrl="https://i.pinimg.com/originals/58/14/35/5814357e8b8efa3e9c5c58eb4bb4a926.jpg"
    // const bgUrl="https://img.wallpapersafari.com/desktop/1680/1050/2/32/PXGrso.jpg";
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${bgUrl})` }}
    >
      <div className=" w-full">
        <div
          className="w-full max-w-md mx-auto
      border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              converted();
            }}
          >
            <div className="w-full mb-1 ">
              <Input
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2
            -translate-y-1/2 border-2 bg-blue-600 text-white px-10 py-2 rounded-lg"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                amountDisable
                selectCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600
          text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
