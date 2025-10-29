export default function Button({ onClick, name }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
    >
      {name}
    </button>
  );
}
