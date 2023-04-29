import Products from "./Products";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Header from "./Header";
export default function MainContent({handleAddToCart, updateCartItemAmount, cart}) {
    return(
        
        <main className="max-w-4xl mx-auto">
            
            <Header />
            <hr className="mx-auto bg-black dark:bg-white w-1/2"/>

            <Products addToCart={handleAddToCart} updateCartItemAmount={updateCartItemAmount} cart={cart}/>

            <hr className="mx-auto bg-black dark:bg-white w-1/2"/>

            <Reviews />

            <hr className="mx-auto bg-black dark:bg-white w-1/2"/>
            
            <Contact />
            
        </main>
    )
}