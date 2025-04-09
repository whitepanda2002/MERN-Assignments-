const products = [
  { id: 1, name: "Product A", price: "$10", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product B", price: "$20", image: "https://via.placeholder.com/150" },
];

const ProductList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
    {products.map(product => (
      <div key={product.id} className="border p-4 rounded-lg shadow-md text-center">
        <img src={product.image} alt={product.name} className="mx-auto mb-4" />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
      </div>
    ))}
  </div>
);
export default ProductList;

