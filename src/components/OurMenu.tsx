// import Shery from "sheryjs/dist/shery";
// import ControlKit from "controlkit/dist/controlkit";

export const OurMenu = () => {
  // const gradientStyle = {
  //   background: "linear-gradient(0deg, #FFFFFF 0%, #FFFAEB 18%, #FEBD0B 100%)",
  // };
  // useEffect(() => {
  //   // Load SheryJS
  //   const sheryInstance = new Shery();

  //   // Initialize the debug panel
  //   const panel = new ControlKit();

  //   // Add your SheryJS configurations and effects here
  //   // Example:
  //   const element = document.querySelector(".back");
  //   const configurations = {
  //     style: 5, // Example configuration
  //     debug: true,
  //     gooey: true,
  //   };
  //   sheryInstance.imageEffect(element, configurations);

  //   // Clean up any resources if needed
  //   return () => {
  //     // Clean up SheryJS instance
  //     sheryInstance.destroy();
  //   };
  // }, []);
  const products = [
    {
      category: "Pizza",
      items: [
        { name: "Chicago Style", price: 140 },
        { name: "Brick Oven Pizza", price: 180 },
        { name: "Italian Pizza", price: 200 },
        // { name: "Neapolitan Pizza", price: 240 },
        // { name: "California Pizza", price: 280 },
        // { name: "New York Style Pizza", price: 280 },
        // { name: "Sicilian Pizza", price: 300 },
        // { name: "Greek Pizza", price: 320 },
        // { name: "Detroit Pizza", price: 360 },
        // { name: "Bagel Pizza", price: 375 },
        // { name: "French Break Pizza", price: 380 },
      ],
    },
    {
      category: "Burger",
      items: [
        { name: "Hamburger", price: 140 },
        { name: "Turkey Burger", price: 180 },
        // { name: "Elk Burger", price: 200 },
        // { name: "Veggie Burger", price: 240 },
        // { name: "Wild Salmon Burger", price: 280 },
        { name: "Cheese Burger", price: 180 },
      ],
    },
    {
      category: "Soft Drink",
      items: [
        { name: "Coke", price: 140 },
        { name: "Mojito", price: 180 },
        { name: "Royal Martini", price: 180 },
        { name: "Bloody Mary", price: 180 },
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="menu-templates w-full max-w-5xl">
        {/* <div className="back">
          <img
            src={ExampleCarouselImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <img
            src={BurgerCarouseImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <img
            src={PastaCarouselImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}
        <div className="front pointer-events-none">
          <div className="title mb-10">
            <h2 className="text-black text-center font-bold text-5xl p-5">
              Our <span className="text-primary">Menu</span>
            </h2>
          </div>
          {products.map((product, index) => (
            <div key={index} className="items_rates mb-10 px-5">
              <div className="products-rate">
                <div className="heading px-7 mb-5">
                  <h3 className="text-5xl font-bold underline text-primary">
                    {product.category}
                  </h3>
                </div>
                {product.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center md:px-14 px-5 py-1 md:text-2xl text-xl font-semibold"
                  >
                    <span className="md:w-1/3 w-1/2">{item.name}</span>
                    <span className="w-1/3 text-center hidden md:block">
                      .........
                    </span>
                    <span className="md:w-1/3 w-1/4 text-right">
                      ₹ {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
