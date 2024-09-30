import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [options, setOptions] = useState([
    "icici",
    "spaytm",
    "sbi",
    "uybl",
    "upi",
  ]);

  const [filteredOptions,setFilteredOptions]=useState(options);
  const [inputValue,setInputValue]=useState("");
  const [highlightedIndex,setHighlightedIndex]=useState(0);
  const [showOptions, setShowOptions] = useState(false);


  const handleOptionChange=(e)=>{
    
    setInputValue(prev=>{
      let index=prev.indexOf("@");
     
      let originalVal=prev.slice(0,index+1);
      

      return  originalVal+e.target.value;
        })
  }

  const filterList=(suffix)=>{
     if(suffix=== '') {setFilteredOptions(options);
      return ;
     }
      const updatedList=options.filter((val)=> val.startsWith(suffix));
      console.log(updatedList);
      setFilteredOptions(updatedList);
  }

  const handleChange=(e)=>{

    
      if(e.target.value.charAt(0) !== "@" && e.target.value.includes("@")){
        let val=e.target.value;

        let index=val.indexOf("@");
        let suffix=val.slice(index+1);
          console.log(suffix);
       
          filterList(suffix);

        setShowOptions(true);
      }
      else{
        setShowOptions(false);
      }

      setInputValue(e.target.value);
  }

  const handleKeyDown=(e)=>{
  if(showOptions){

      if(filteredOptions.length === 1){
        setHighlightedIndex(0);
        return;
      }


    if(e.key === "ArrowDown" ) setHighlightedIndex(prev=>{
    
      if(prev < filteredOptions.length-1) return prev+1;
      return prev;
    });
    else if(e.key === "ArrowUp") setHighlightedIndex(prev=>{
      if(prev > 0) return prev-1;
      return prev;
    }); 
    else if(e.key === "Enter") setInputValue(prev=>{
      
      setShowOptions(false);
      return  prev+filteredOptions[highlightedIndex];
        })

  }
  }

  const handleMouseEnter=(index)=>{
    setHighlightedIndex(index);
  }

  const handleOnClick=(index)=>{
    setInputValue(prev=>{
      
      
      setShowOptions(false);
      return  prev+filteredOptions[index];
        })
  }

  return (
    <div className="app">
      <div className="main-container">
        <img src="https://img.freepik.com/free-vector/womans-hand-putting-dollar-bill-into-open-mans-wallet-payment-transfer-money-person-holding-purse-flat-vector-illustration-finance-concept-banner-website-design-landing-web-page_74855-25048.jpg?w=740&t=st=1727707511~exp=1727708111~hmac=3b0b4aadfce2d268973d64571ca6b400889e1e88aa245774f7a0a7e927973dcc" />
        <div className="bottom-section">
          <input autoFocus value={inputValue} placeholder="Enter your UPI" onChange={handleChange} onKeyDown={handleKeyDown}/>
          {showOptions && filteredOptions.length !==0 && (
            <div className="select-container">
              <div className="option-container" size={filteredOptions.length} onChange={handleOptionChange}>
                {filteredOptions.map((el,index) => (
                  <p className="option" key={el}  style={{backgroundColor: index === highlightedIndex ? "rgb(199, 197, 197)" :"white"}} onMouseEnter={()=>handleMouseEnter(index)} onClick={()=>handleOnClick(index)}>
                    {el}
                  </p>
                ))}
              </div>
            </div>
          )}
          <button>Pay Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
