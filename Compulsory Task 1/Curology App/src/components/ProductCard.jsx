import product1 from "../assets/cleanser.png"


const ProductCard = () => {

  const name = "Cleanser 3O5a"
  return (
    <>
      {/* Card Div */}
      <div className="flex font-sans p-4 h-68 sm:p-0 sm:py-2 sm:h-56 md:h-72 lg:h-64">
        {/* Card Image */}
        <div className="flex-none w-56 group relative sm:w-44 md:w-48 lg:w-60">
          {/* Image */}
          <img
            src={product1}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover contrast-150  saturation-150 transition duration-300 group-hover:blur-xs group-hover:grayscale rounded-l-3xl"
            loading="lazy"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-indigo-900 bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-2 z-5 rounded-l-3xl">
            <p className="font-sans font-bold text-xs text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio optio magnam culpa libero, est ipsa voluptatum iste nostrum quisquam cupiditate vero, harum ducimus labore quas deserunt, blanditiis illo. Voluptate reprehenderit suscipit, ipsa maiores saepe tempora.
            </p>
          </div>
        </div>
        {/* Card Form */}
        <form className="flex-auto p-4 bg-indigo-100 rounded-r-3xl">
          <div className="flex flex-wrap">
            <h1 className="flex-auto font-semibold text-gray-900">
             Cleanser 3052a
            </h1>
            <h3 className="w-full flex-none mt-2 order-1 text-3xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">
               60R
            </h3>
            <h5 className="text-sm font-medium text-zinc-500 sm:text-xs sm:font-mono">In Stock</h5>
          </div>
          <div className="flex items-baseline mt-4 mb-2 pb-2 border-b border-slate-500 sm:mt-2 lg:mt-4 ">
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="sm"
                checked
              />
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-indigo-500 peer-checked:text-white">
                S
              </div>
            </label>
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="md"
              />
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-indigo-500 peer-checked:text-white">
                M
              </div>
            </label>
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="lg"
              />
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-indigo-500 peer-checked:text-white">
                L
              </div>
            </label>
          </div>
          <div className="flex space-x-4 mb-2 text-sm font-medium">
            <div className="flex-auto flex space-x-2">
              <button
                className="h-10 px-4 font-semibold rounded-full bg-indigo-500 text-white sm:text-xs lg:text-md"
                type="submit"
              >
                Buy now
              </button>
              <button
                className="h-10 px-4 font-semibold rounded-full border border-slate-50 text-slate-900 sm:text-xs lg:text-md"
                type="button"
              >
                Add to bag
              </button>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Free shipping on all continental US, MZ, SP, PT, SA, IT borders.
          </p>
        </form>
      </div>
    </>
  );
};

export default ProductCard;

{/* <label>
  <input
    className="sr-only peer"
    name="size"
    type="radio"
    value="lg"
  />
  <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-indigo-500 peer-checked:text-white">
    L
  </div>
</label> */}

