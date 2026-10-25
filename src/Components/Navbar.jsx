import Home from "../Pages/Home";

function Navbar() {
  return (
    <nav>

      <ul className="flex justify-center gap-2 text-center">
        <li >Home |</li>
        <li >About |</li>
        <li >Services |</li>
        <li >Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;