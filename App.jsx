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
    <h1> Truecaller </h1>
    <p className="explain">
    Truecaller is a popular smartphone application that offers various feature to enhance the calling experience for users.
    It provides caller identification, allowing users to identify incoming calls from unknown numbers by displaying the name or organization associated with the caller.
    Truecaller also allows users to block unwanted calls from telemarketers, spammers, and other unwanted contacts, ensuring privacy and avoiding nuisance calls.
    Additionally, it offers a flash messaging feature that enables users to send quick messages to their contacts even if they are unavailable for a call. 
    Truecaller also provides a call recording feature, allowing users to record important conversations for future reference.
    With its chat and voice calling feature, users can send messages, share media, and make voice calls using the internet connection. 
    Truecaller is available for Android, iOS, and Windows Phone operating systems, making it accessible for a wide range of users. 
    It has gained popularity for its ability to help users identify unknown callers and block unwanted calls, ultimately providing a more efficient and secure calling experience.
    </p>
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


