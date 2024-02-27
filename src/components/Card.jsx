import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favs = useSelector((state) => state.fav.favs);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Favorite Books</h1>
      <div className="grid grid-cols-3 gap-4">
        {favs.map((fav) => (
          <div key={fav.id} className="border p-4">
            <h2 className="text-lg font-bold mb-2">{fav.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
