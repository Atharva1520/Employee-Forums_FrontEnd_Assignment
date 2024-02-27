import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faHeart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [bookData, setBookData] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const searchBook = () => {
    let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`;

    if (category) {
      apiUrl += `&subject=${category}`;
    }

    if (publishedDate) {
      apiUrl += `&publishedDate=${publishedDate}`;
    }

    axios
      .get(apiUrl)
      .then((res) => {
        setBookData(res.data.items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    searchBook();
  }, [search, category, publishedDate]);

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="bg-black h-screen text-white">
      <header className="py-4 mx-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex">
          <FontAwesomeIcon icon={faBook} size="2xl" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 px-4 py-2 rounded-md w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 flex-shrink-0">
          <select
            className="bg-gray-800 px-4 py-2 rounded-md w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Fiction">Fiction</option>
            <option value="Nonfiction">Nonfiction</option>
          </select>
        </div>
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 flex-shrink-0">
          <input
            type="date"
            placeholder="Published Date"
            className="bg-gray-800 px-4 py-2 rounded-md w-full"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </div>
      </header>

      {bookData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {bookData.map((book, index) => (
            <Card key={index} book={book} />
          ))}
        </div>
      ) : (
        search.length === 0 && (
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-white font-extrabold text-3xl">
              Search to Know About the Book
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default Home;
