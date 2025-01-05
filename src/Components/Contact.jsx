import React, { useState, useEffect } from "react";

const Contact = () => {
  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState();

  // const handelSubmit = (e) => {
  //   console.log(username);
  //   console.log(password);
  // };

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://nominatim.openstreetmap.org/search?q=London&format=json&limit=1"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    // <div className="flex justify-center text-center">
    //   <h1 className="flex justify-center text-6xl items-center h-16 text-gray-900 relative">
    //     Contact Page
    //   </h1>
    //   <div className="flex flex-col justify-center text-center w-72 absolute mt-52">
    //     <form onSubmit={handelSubmit}>
    //       <input
    //         type="text"
    //         placeholder="UserName"
    //         className="bg-gray-300 mt-2"
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         className="bg-gray-300 mt-2"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <div>
    //         <button className="bg-gray-900 text-white rounded py-2 px-3 mt-4">
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    //   <p className="text-8xl text-gray-900">{username}</p>
    //   <p className="text-6xl text-gray-900">{password}</p>
    // </div>

    // <div className="text-center gap-4">
    //   <p>You clicked {count} times</p>
    //   <button
    //     onClick={() => setCount(count + 1)}
    //     className="bg-gray-900 text-white rounded py-2 px-3 "
    //   >
    //     Click me
    //   </button>
    // </div>

    // <div>{data ? data.title : "Loading..."}.</div>
    <h1 className="text-gray-900 text-3xl font-bold p-10">Contact Page</h1>
  );
};

export default Contact;
