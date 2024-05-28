export const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between w-full bg-primary text-white h-12 px-8 py-4">
        <div>
          <span className=" text-2xl">
            <strong className="font-bold">Pizzaaa</strong> <span>Cafe</span>
          </span>
        </div>
        <div className="flex gap-x-8">
          <span>Home</span>
          <span>Our Menu</span>
          <span>About</span>
          <div className="flex gap-x-6">
            <span>Fb</span>
            <span>Ins</span>
          </div>
        </div>
      </header>
    </>
  );
};
