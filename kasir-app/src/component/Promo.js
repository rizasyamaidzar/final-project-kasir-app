function Promo(props) {
  return (
    <div>
      <section class="px-3 py-5 bg-neutral-100 lg:py-10">
        <div class=" mt-20 grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p class="text-4xl font-bold md:text-7xl text-orange-600">
              25% OFF
            </p>
            <p class="text-4xl font-bold md:text-7xl">Year End Sale</p>
            <p class="mt-2 text-sm md:text-lg">For limited time only!</p>
            <button class="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
              Shop Now
            </button>
          </div>
          <div class="order-1 lg:order-2">
            <img
              class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
              src="https://png.pngtree.com/png-clipart/20240701/original/pngtree-fast-foods-3d-png-image_15462179.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Promo;
