import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import { X } from "lucide-react";
import { useContext } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { id, title, amount, newPrice } = item;
  const { removeFromCart, increaseAmount, decreaseAmount,decreaseAmountNotZero } =
    useContext(CartContext);
  return (
    <div className="flex pr-5">
      <div className="flex items-center gap-2 w-full h-[150px] border-b  ">
        {/* Image */}
        <div>
          <Link to={`/product/${id}`}>
            <img src={item?.images?.mainImg} alt="" className="max-w-[80px]" />
          </Link>
        </div>
        <div className="w-full space-y-3">
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
            <div onClick={() => removeFromCart(id)} className="cursor-pointer">
            <X className="hover:text-red-600 transition-all duration-200" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              {/* Button */}
                <div className="flex">
                  <Button
                    variant="outline"
                    size="xs"
                    className="border-r-0"
                    onClick={() => decreaseAmountNotZero(id)}
                  >
                    <IoMdRemove />
                  </Button>
                  <Button variant="outline" size="xs" className="hover:bg-transparent  cursor-default">
                    {amount}
                  </Button>
                  <Button
                    variant="outline"
                    size="xs"
                    className="border-l-0"
                    onClick={() => increaseAmount(id)}
                  >
                    <IoMdAdd />
                  </Button>
                </div>
              <span>${newPrice}</span>
            </div>
            <div>
              <span className="font-medium">${parseFloat(newPrice * amount).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
