import { Routes, Route, Navigate } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { CarritoPage } from "./pages/CarritoPage"
import { ComprasPage } from "./pages/ComprasPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                    <NavBar></NavBar>
            <div className="container">
            <Routes>
                <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                <Route path="/*" element={<Navigate to='/'></Navigate>}></Route>
            </Routes>
            </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
