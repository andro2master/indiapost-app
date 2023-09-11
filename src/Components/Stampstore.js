import React from "react";
import { NavLink } from "react-router-dom";

const Stampstore = ({ idx, img, name, dn, year, trivia }) => {
  const mystyle = {
    color: "red",
    fontWeight: "bold",
    fontSize: 38,
  };

  return (
    // <div className='flex-auto items-center'>
    //     <div className='text-lg font-bold items-center'><h1>No : {idx +1}</h1></div>
    //     <div><img src={img} className='h-20' alt={name}/></div>

    //     <div><h1 className='flex-auto'> Name : {name}</h1>
    //     <h1>Amount : {dn}</h1>
    //     <h1>Year : {year}</h1>
    //     </div>
    //     <hr></hr>

    // </div>
    //     <table className='border-collapse'>
    //   <thead>
    //     <tr>
    //       <th className='border border-gray-400 px-4 py-2 w-100'>No</th>
    //       <th className='border border-gray-400 px-4 py-2'>Image</th>
    //       <th className='border border-gray-400 px-4 py-2'>Name</th>
    //       <th className='border border-gray-400 px-4 py-2'>Amount</th>
    //       <th className='border border-gray-400 px-4 py-2'>Year</th>

    //     </tr>
    //   </thead>
    //   <tbody>

    //       <tr key={idx} className='text-center'>
    //         <td className='border border-gray-400 px-4 py-2 w-100'>{idx + 1}</td>
    //         <td className='border border-gray-400 px-4 py-2'>
    //           <img src={img} className='h-20' alt={name} />
    //         </td>
    //         <td className='border border-gray-400 px-4 py-2'>{name}</td>
    //         <td className='border border-gray-400 px-4 py-2'>{dn}</td>
    //         <td className='border border-gray-400 px-4 py-2'>{year}</td>
    //       </tr>

    //   </tbody>
    // </table>
    <div class="grid grid-cols-3">
  <div class="col-span-1">
      <div data-te-spy="scroll"
      data-te-target="#scrollspy1"
      data-te-offset="200"></div>
    <div className="flex-auto m-5 rounded-lg grid gap-4 justify-center item-center bg-yellow-100">
      <card key={idx} className=" border rounded-lg p-4">
        <img
          src={img}
          className="drop-shadow-lg rounded-lg h-40 w-auto mx-auto"
          alt={name}
        />
        <br />
        <h5
          style={{
            color: "red",
            fontWeight: "bold",
            fontFamily: "Rubik Iso",
            fontSize: 28,
            background: "White",
            borderWidth: "8px",
            borderRadius: "20px",
            textAlign: "center",
          }}
          
        >
          {name}
        </h5>
        <p style={mystyle} className="">
          Year : {year}
        </p>
        <p className="text-green-600 text-4xl font-semibold mt-2">{dn}</p>
        <br />
        <NavLink
          to="/login"
          className="drop-shadow-2xl bg-blue-500 text-white px-4 py-2 mt-2 rounded-full hover:bg-red-600 transition duration-300"
        >
          Add to Cart
        </NavLink>
      </card>
      <div className="p-4 text-justify">
        <h3>{trivia}</h3>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Stampstore;
