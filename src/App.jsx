import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([])
  console.log('filtered: ', filtered);

  const [searchValue, setSearchValue]= useState("");
  async function fetchApi() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setData(data);
    setFiltered(data);
  }

  useEffect(()=>{
   let filter = data.filter((user)=>(
     user.name.toLowerCase().includes(searchValue.toLowerCase())
   ))
    console.log('filter: ', filter);
    setFiltered(filter);
  },[searchValue])

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Search..."
          onChange={
            (e)=>setSearchValue(e.target.value)
          }
          className="mb-4 px-3 py-2 border border-gray-400 rounded"
        />

        <table className="border-collapse border border-gray-400 bg-white shadow-md">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">UserName</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-400 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.username}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
