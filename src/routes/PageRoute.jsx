import { Route, Routes } from "react-router-dom";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import Card from "../pages/Card";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Succesfull from "../pages/Succesfull";

const PageRoute=()=>{
    return(
<Routes>
    <Route path="/">
<Route index  element={<Home/>}/>
<Route path=":pid" element={<SingleProduct/>}/>
</Route>
<Route path="/login" element={<LoginPage/>}/>
<Route path="/card" element={<Card/>}/>
<Route path="/sucess" element={<Succesfull/>}/>
</Routes>
    )
}

export default PageRoute;