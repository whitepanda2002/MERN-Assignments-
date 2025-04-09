function CustomButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
    >
      Click Me
    </button>
  );
}
