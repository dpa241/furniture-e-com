<div className="w-1/2 space-y-5 flex-1">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Test title</h2>
          <div className="flex items-center gap-5">
            <div className="flex gap-1 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <Button variant="destructive" size="sm" className="rounded-none">
              On Sale
            </Button>
          </div>
        </div>
        <div className="text-muted-foreground flex gap-2 pb-6">
          <span>261 products sold</span> . <span>3.1k products watched</span>
        </div>
        <hr className="w-[50%]" />
        <div className="flex items-center gap-5">
          <div className="py-6">
            <Select className="">
              <SelectTrigger className="h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-none space-x-3">
                <p>Type:</p>
                {/* <SelectItem value="light">Light</SelectItem> */}
                <SelectValue
                  className="placeholder:font-bold"
                  placeholder="Select"
                />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Other option */}
          <div className="bg-secondary flex items-center rounded border border-input ">
          <button 
            className="py-[3px] px-2 self-center cursor-pointer text-lg font-medium"
            onClick={()=>setQuantity((prev)=> prev+1)}
            // onClick={()=>increaseAmount(product.id)}
            >
            +
          </button>
          <span className="text-sm">Number : {itemAmount}</span>
          <button 
            className="py-[2px] px-2 self-center cursor-pointer text-lg font-medium"
            onClick={()=>setQuantity((prev)=> prev === 1 ? 1: prev-1)}
            // onClick={()=>decreaseAmountNotZero(product.id)}
            >
            -
          </button>
        </div> 
          <div className="flex items-center">
            <Button
              variant="outline"
              className="border-r-0 cursor-not-allowed "
              // onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
              // onClick={()=>decreaseAmountNotZero(id)}
            >
              <IoMdRemove />
            </Button>
            <Button
              variant="outline"
              className="hover:bg-transparent cursor-default"
            >
              0
            </Button>
            <Button
              variant="outline"
              className="border-l-0 cursor-not-allowed"
              // onClick={() => setQuantity((prev) => prev + 1)}
              // onClick={()=>increaseAmount(id)}
            >
              <IoMdAdd />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              variant="icon"
              size="icon"
              className="bg-teal-700 cursor-pointer ring-teal-700 ring-offset-2 focus:ring-2 rounded-none"
            ></Button>
            <Button
              variant="icon"
              size="icon"
              className="bg-[#7BB5EB] cursor-pointer ring-[#7BB5EB] ring-offset-2 focus:ring-2 rounded-none"
            ></Button>
            <Button
              variant="icon"
              size="icon"
              className="bg-[#5D3B53] cursor-pointer ring-[#5D3B53] ring-offset-2 focus:ring-2 rounded-none"
            ></Button>
            <Button
              variant="icon"
              size="icon"
              className=" bg-gray-400 cursor-pointer ring-gray-400 ring-offset-2 focus:ring-2 rounded-none"
            ></Button>
          </div>
        </div>
        <hr className="w-[70%]" />
        <div className="flex items-center gap-5 py-6">
          <p className="text-[32px] font-bold text-[#CE0000]">$1245</p>
          <div className="flex gap-2">
            <Button variant="default" size="">
              BUY NOW
            </Button>
            <Button
              // onClick={() => addToCart(product, id)}
              variant="outline"
              size=""
            >
              ADD TO CART
            </Button>
            <Button variant="outline" size="">
              <FaRegHeart />
            </Button>
          </div>
        </div>
      </div> 