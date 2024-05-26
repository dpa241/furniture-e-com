import OrderSumary from "./OrderSumary";
import CartDescriptions from "./CartDescriptions";


const CartPage = () => {
  
  return (
    <section className="container mx-auto pt-[92px]">
      <div className="flex py-12 gap-10">
        <CartDescriptions/>
        <OrderSumary/>
      </div>
    </section>
  );
};

export default CartPage;
