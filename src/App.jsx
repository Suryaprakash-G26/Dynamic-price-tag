/* eslint-disable react/prop-types */
import './App.css'

function App() {
 const info = [
  {
    title:"Basic",
    price:50,
    feature:["See who viewed your profile",
    "Get the Premium badge on your profile",
    "Get priority customer support",
    "View profiles privately"]
  },
  {
    title:"Advanced",
    price:100,
    feature:["See who viewed your profile",
    "Get the Premium badge on your profile",
    "Get priority customer support",
    "View profiles privately",
    "No ads",
    "Call recording",
    "Incognito mode"]
  },
  {
    title:"Premium",
    price:200,
    feature:["See who viewed your profile",
    "Get the Premium badge on your profile",
    "Get priority customer support",
    "View profiles privately",
    "No ads",
    "Call recording",
    "Incognito mode",
    "Send contact requests to people outside your network",
    "30 contact requests per month"]
  },
  {
    title:"Gold",
    price:250,
    feature:["See who viewed your profile",
    "Get the Premium badge on your profile",
    "Get priority customer support",
    "View profiles privately",
    "No ads",
    "Call recording",
    "Incognito mode",
    "Send contact requests to people outside your network",
    "30 contact requests per month",
    "Gold Caller ID"]
  }
 ]

  return (
   <div className="main">
    <h1> Truecaller Premium Details </h1>
  
    <div className="container">
    <div className="price">
      {info.map((inf,index)=>
      (
        <Pricelist key={index}
        Title={inf.title}
        Price={inf.price}
        Features={inf.feature} />
      ) )
      }
    </div>
    </div>
   
   </div>
  )
}

export default App


function Pricelist({ Title, Price, Features }) {
  const allfeature=["See who viewed your profile",
"Get the Premium badge on your profile",
"Get priority customer support",
"View profiles privately",
"No ads",
"Call recording",
"Incognito mode",
"Send contact requests to people outside your network",
"30 contact requests per month",
"Gold Caller ID"]
  return (
    <div className="pricecard col-lg-4 col-md-6 col-sm-12">
      <h2 className="title">{Title}</h2>
      <h3 className="cost">Inr<span className="Usd">{Price}</span>/Month</h3>
      <ul className="features">
        {allfeature.map((feature, index) => (
          <li
            key={index}
            className={Features.includes(feature) ? "available" : "unavailable"}
          >
            {Features.includes(feature) ? "✅ " : "❌"} {feature}
          </li>
        ))}
      </ul>
      <button className="buy btn btn-primary">Click to Buy</button>
    </div>
  );
}


