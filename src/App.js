import './App.css';
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Company from "./Components/Company/Company";
import Manufactoring from "./Components/Manufactoring/Manufactoring";
import Partners from "./Components/partnerns/partners";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div>
            <Home/>
            <Products/>
            <Company/>
            <Manufactoring/>
            <Partners/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App;
