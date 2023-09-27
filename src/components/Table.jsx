import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { format } from "date-fns";
import companyData from "../data.json";

const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Filter the data based on search term
  const filteredData = companyData.filter((company) =>
    company.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort the data based on the active date
  const sortedData = filteredData.sort((a, b) => {
    if (sortType === "newest") {
      return new Date(b.lastActiveDate) - new Date(a.lastActiveDate);
    } else {
      return new Date(a.lastActiveDate) - new Date(b.lastActiveDate);
    }
  });

  // Calculate the range of data to display on the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = sortedData.slice(startIndex, endIndex);

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(sortedData.length / pageSize);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <div className="flex justify-between items-center px-10">
          <p className="text-green-600">Active Members</p>
          <div className="flex">
            <div className="flex justify-end items-center mx-2 bg-gray-100 rounded-full">
              <BsSearch className="mx-2" />
              <input
                className="outline-none bg-transparent px-2"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex justify-end items-center">
              <label className="text-gray-500">Sort by</label>
              <select className="mx-2 font-semibold"
                name="sortType"
                value={sortType}
                onChange={handleSortChange}
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="bg-white border-b">
              <th scope="col" className="px-6 py-3">
                Customer name
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Phone number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((company, index) => (
              <tr key={index}
              className={
                index % 2 === 0
                  ? "bg-white border-b"
                  : "bg-gray-50 border-b"
              }
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {company.customerName}
                </td>
                <td className="px-6 py-4">{company.company}</td>
                
                <td className="px-6 py-4">{company.phoneNumber}</td>
                <td className="px-6 py-4">{company.email}</td>
                <td className="px-6 py-4">{company.country}</td>
                <td className="px-6 py-4">
                  <a
                    className={`font-medium ${
                      company.activeStatus ? "text-green-600 bg-green-300" : "text-red-600 bg-red-300"
                    } p-1 border rounded-md`}
                  >
                    {company.activeStatus ? "Active" : "Inactive"}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end m-4">
          <nav className="text-gray-600">
            <ul className="inline-flex">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`cursor-pointer px-3 py-2 rounded-md ${
                    currentPage === index + 1
                      ? "bg-blue-800 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Table;
