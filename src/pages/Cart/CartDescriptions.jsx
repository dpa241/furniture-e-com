import React, { useState } from 'react'

const CartDescriptions = () => {
    const [quantity, setQuantity] = useState(1);
  return (
    <div className="w-2/3 ">
          <div className="flex justify-between  border-b-[1px] pb-5">
            <div className="max-w-[600px]">
              <div className="flex items-center gap-4">
                <img
                  src="./products/new3.jpg"
                  alt=""
                  className="w-[120px] h-[120px] object-cover"
                />
                <div className="space-y-3">
                  <div className="space-y-3">
                    <h3 className="text-xl uppercase font-semibold">
                      MORDERN BLACK HANGING LIGHT
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Set: Seat+Back:Artificial-Leather-AL-03; | Material:
                      Lacquer Finish | Color: Antique | Size: L550 X W770 X
                      SH455 X TH860
                    </p>
                  </div>
                  <div className="bg-secondary flex items-center rounded border border-input w-32 ">
                    <button
                      className="py-[3px] px-2 self-center cursor-pointer text-lg font-medium"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                    <span className="text-sm">Number : {quantity}</span>
                    <button
                      className="py-[2px] px-2 self-center cursor-pointer text-lg font-medium"
                      onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-1">
              <span className="self-end text-red-600 cursor-pointer">X</span>
              <span className="text-xl font-bold">$1723.21</span>
            </div>
          </div>
          {/* <div className="flex justify-between  border-b-[1px] py-5">
            <div className="max-w-[600px]">
              <div className="flex items-center gap-4">
                <img
                  src="./products/new3.jpg"
                  alt=""
                  className="w-[120px] h-[120px] object-cover"
                />
                <div className="space-y-3">
                  <div className="space-y-3">
                    <h3 className="text-xl uppercase font-semibold">
                      MORDERN BLACK HANGING LIGHT
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Set: Seat+Back:Artificial-Leather-AL-03; | Material:
                      Lacquer Finish | Color: Antique | Size: L550 X W770 X
                      SH455 X TH860
                    </p>
                  </div>
                  <div className="bg-secondary flex items-center rounded border border-input w-32 ">
                    <button
                      className="py-[3px] px-2 self-center cursor-pointer text-lg font-medium"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                    <span className="text-sm">Number : {quantity}</span>
                    <button
                      className="py-[2px] px-2 self-center cursor-pointer text-lg font-medium"
                      onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-1">
              <span className="self-end text-red-600 cursor-pointer">X</span>
              <span className="text-xl font-bold">$1723.21</span>
            </div>
          </div>
          <div className="flex justify-between  border-b-[1px] py-5">
            <div className="max-w-[600px]">
              <div className="flex items-center gap-4">
                <img
                  src="./products/new3.jpg"
                  alt=""
                  className="w-[120px] h-[120px] object-cover"
                />
                <div className="space-y-3">
                  <div className="space-y-3">
                    <h3 className="text-xl uppercase font-semibold">
                      MORDERN BLACK HANGING LIGHT
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Set: Seat+Back:Artificial-Leather-AL-03; | Material:
                      Lacquer Finish | Color: Antique | Size: L550 X W770 X
                      SH455 X TH860
                    </p>
                  </div>
                  <div className="bg-secondary flex items-center rounded border border-input w-32 ">
                    <button
                      className="py-[3px] px-2 self-center cursor-pointer text-lg font-medium"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                    <span className="text-sm">Number : {quantity}</span>
                    <button
                      className="py-[2px] px-2 self-center cursor-pointer text-lg font-medium"
                      onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-1">
              <span className="self-end text-red-600 cursor-pointer">X</span>
              <span className="text-xl font-bold">$1723.21</span>
            </div>
          </div> */}
        </div>
  )
}

export default CartDescriptions