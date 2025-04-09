function SimpleForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input submitted:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        className="border p-2 mr-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

