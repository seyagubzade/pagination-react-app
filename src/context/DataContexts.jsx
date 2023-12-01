import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const dataContext = createContext();
const DataProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredData(filtered);
  }, [data, searchText]);

  const handleSearch = (value) => {
    setSearchText(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    // console.log(">>>>>>>>", parseInt(event.target.value, 10));
    setCurrentPage(1);
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const values = {
    data,
    filteredData,
    setFilteredData,
    searchText,
    setSearchText,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    handleSearch,
    handlePageChange,
    handleItemsPerPageChange,
    indexOfLastItem,
    indexOfFirstItem,
    currentItems,
    pageNumbers
  };
  return (
    <dataContext.Provider value={values}>{children}</dataContext.Provider>
  );
};

export default DataProvider;
