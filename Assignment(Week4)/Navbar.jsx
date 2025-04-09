const Navbar = () => (
  <nav className="bg-white shadow-md px-6 py-4 flex justify-between">
    <div className="text-xl font-bold">MyShop</div>
    <ul className="flex gap-4">
      <li><a href="#" className="hover:text-blue-600">Home</a></li>
      <li><a href="#" className="hover:text-blue-600">Products</a></li>
      <li><a href="#" className="hover:text-blue-600">Contact</a></li>
    </ul>
  </nav>
);
export default Navbar;

