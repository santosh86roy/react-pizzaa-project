export const Footer = () => {
  return (
    <>
      <footer className="relative ">
        <hr className="border border-primary mt-8 -rotate-3" />
        <div className="bg-primary -rotate-2 h-12"></div>
        <div className="bg-footer-image bg-conver bg-bottom absolute inset-0 h-72"></div>
        <div className="bg-black opacity-90 h-72 -mt-12"></div>
        <div className="-mt-72 text-white absolute z-50 px-32 w-full ">
          <div className="flex text-primary text-3xl mt-4">
            <span className="font-bold mr-1">Pizzaaa</span>
            <span>Cafe</span>
          </div>
          <div className="w-full flex justify-between text-center">
            <div className="text-left">
              <div className="flex flex-col mt-4">
                <span>Call to Order</span>
                <span className="font-bold">022 2528 3458</span>
              </div>
              <div className="flex flex-col  mt-4">
                <span>Email</span>
                <span className="font-bold">pizzaaaCafe@email.com</span>
              </div>
              <div className="flex flex-col  mt-4">
                <span>Address</span>
                <span className="font-bold">Chembur, Mumbai - 400043</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col text-left">
                <span className="font-bold">Usefull Links</span>
                <span>Home</span>
                <span>Menu</span>
                <span>About</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col text-left">
                <span className="font-bold">Opening Hours</span>
                <span>Mon - Fri : 10am - 11pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary text-white w-full py-0.5 absolute z-50 flex items-center justify-center tex-sm">
          2024 Pizzaaa Cafe
        </div>
      </footer>
    </>
  );
};
