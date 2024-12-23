import { IProduct } from "@/models/product";
import { IParameters } from "../api";

export const handleViewMore = (currentParams: IParameters): IParameters => {
  return {
    ...currentParams,
    _start: (currentParams?._start ?? 0) + (currentParams?._limit ?? 20),
  };
};

export const filterData = (
  params: IParameters,
  products: IProduct[]
): IProduct[] => {
  const { name, theme, tier, time, prices, price, category } = params;

  let filteredProducts = [...products];

  if (name) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (theme) {
    filteredProducts = filteredProducts.filter(
      (product) => product.theme.toLowerCase() === theme
    );
  }

  if (tier) {
    filteredProducts = filteredProducts.filter(
      (product) => product.tier.toLowerCase() === tier
    );
  }

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category
    );
  }

  if (prices && prices.length === 2) {
    const [minPrice, maxPrice] = prices;
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  }

  if (price === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (price === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (time) {
    const currentTime = Date.now();
    switch (time) {
      case "1":
        filteredProducts = filteredProducts.filter(
          (product) =>
            currentTime - product.createdAt <= 1 * 24 * 60 * 60 * 1000
        );
        break;
      case "7":
        filteredProducts = filteredProducts.filter(
          (product) =>
            currentTime - product.createdAt <= 7 * 24 * 60 * 60 * 1000
        );
        break;
      case "30":
        filteredProducts = filteredProducts.filter(
          (product) =>
            currentTime - product.createdAt <= 30 * 24 * 60 * 60 * 1000
        );
        break;
      case "90":
        filteredProducts = filteredProducts.filter(
          (product) =>
            currentTime - product.createdAt <= 90 * 24 * 60 * 60 * 1000
        );
        break;
      case "latest":
        filteredProducts.sort((a, b) => b.createdAt - a.createdAt);
        break;
      default:
        break;
    }
  }

  return filteredProducts;
};
