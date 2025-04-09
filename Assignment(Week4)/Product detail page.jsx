// Inside ProductList.jsx
const [selectedProduct, setSelectedProduct] = useState(null);

const handleViewDetails = (product) => {
  setSelectedProduct(product);
};
...
<button
  onClick={() => handleViewDetails(product)}
  className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
>
  View Details
</button>

{selectedProduct && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl mb-2">{selectedProduct.name}</h2>
      <p>{selectedProduct.price}</p>
      <button onClick={() => setSelectedProduct(null)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Close
      </button>
    </div>
  </div>
)}

