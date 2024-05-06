const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between py-4 px-8  text-regular-white items-center absolute w-full">
        <figure>
          <h1 className="font-bold ">AMANDA A.</h1>
        </figure>
        <ul className="flex gap-8 items-center">
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <div className="bg-regular-white text-regular-blue p-2 rounded-lg">
            <li>Contact me!</li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
