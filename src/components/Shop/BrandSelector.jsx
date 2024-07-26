import React, { useContext, useState } from "react";
import data from "../../Data/data";
import FilterContext from "../../Context/FilterContext";

const BrandSelector = () => {
  const brands = [];
  {
    data.productData.map((val) =>
      val.products.map((item) => {
        if (!brands.includes(item.brand)) {
          brands.push(item.brand);
        }
      })
    );
  }

  const [searchTerm, setSearchTerm] = useState("");
  const { selectedBrands, setSelectedBrands } = useContext(FilterContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleBrand = (brand) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((item) => item !== brand)
        : [...prevSelected, brand]
    );
  };

  const filteredBrands = brands
    .filter((brand) => brand.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (selectedBrands.includes(a) && !selectedBrands.includes(b)) {
        return -1;
      }
      if (!selectedBrands.includes(a) && selectedBrands.includes(b)) {
        return 1;
      }
      return a.localeCompare(b);
    });

  return (
    <div className="text-sm xs1:text-lg">
      <input
        type="text"
        placeholder="Search brands"
        value={searchTerm}
        onChange={handleSearch}
        className="border-2 border-slate-300 my-2 p-2 w-full"
      />
      <div className="h-48 overflow-y-scroll">
        {filteredBrands.map((brand) => (
          <div key={brand} className="mb-1">
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleToggleBrand(brand)}
              />{" "}
              {brand}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSelector;
