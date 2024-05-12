import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { id, title, img, amount, newPrice } = item;
  const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext)
  return (
    <div className="flex">
      <div className="flex items-center gap-2 w-full h-[150px] border-b ">
        {/* Image */}
        <div>
          <Link to={`/product/${id}`}>
            <img src={img} alt="" className="max-w-[80px]" />
          </Link>
        </div>
        <div className="w-full">
          {/* title and remove icon */}
          <div className="flex items-center justify-between">
            {/* title */}
            <Link
              className="text-sm uppercase font-medium max-w-[240px] hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            {/* remove icon */}
            <div onClick={()=>removeFromCart(id)} className="cursor-pointer">X</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <Button variant='secondary'>
                <span onClick={()=>decreaseAmount(id)}><IoMdRemove/></span>
                <span>{amount}</span>
                <span onClick={()=>increaseAmount(id)}><IoMdAdd/></span>
              </Button>
              <span>${newPrice}</span>
            </div>
            <div>
              <span>${newPrice * amount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
