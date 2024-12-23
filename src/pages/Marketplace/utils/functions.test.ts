import { IProduct } from "@/models/product";
import { IParameters } from "../api";
import { filterData, handleViewMore } from "./functions";

describe("Handle View More", () => {
  it("Should be return true if correct data", () => {
    const initialValues = { _start: 0, _limit: 20 };

    const result = handleViewMore(initialValues);
    expect(result).toEqual({ _start: 20, _limit: 20 });
  });

  it("Should be return false if correct data", () => {
    const initialValues = { _start: 0, _limit: 20 };

    const result = handleViewMore(initialValues);
    expect(result).not.toEqual({ _start: 40, _limit: 20 });
  });
});

const mockProducts: IProduct[] = [
  {
    id: 40,
    title: "Masked Guardian",
    category: "Hat",
    price: 58.85,
    isFavorite: false,
    createdAt: 1647793668000,
    theme: "Colorful",
    tier: "Premium",
    imageId: 20,
    author: {
      firstName: "Anatollo",
      lastName: "Myrie",
      email: "amyrief@google.cn",
      gender: "Male",
      avatar: "https://robohash.org/etharumqui.png?size=100x100&set=set1",
      onlineStatus: "online",
    },
  },
  {
    id: 41,
    title: "Crystal Crown",
    category: "Hat",
    price: 85.5,
    isFavorite: true,
    createdAt: 1647794000000,
    theme: "Elegant",
    tier: "Standard",
    imageId: 21,
    author: {
      firstName: "Bella",
      lastName: "Smith",
      email: "bella@example.com",
      gender: "Female",
      avatar: "https://robohash.org/something.png?size=100x100&set=set1",
      onlineStatus: "offline",
    },
  },
  {
    id: 42,
    title: "Golden Helm",
    category: "Armor",
    price: 120.99,
    isFavorite: false,
    createdAt: 1647880000000,
    theme: "Royal",
    tier: "Premium",
    imageId: 22,
    author: {
      firstName: "Charles",
      lastName: "Doe",
      email: "charles@example.com",
      gender: "Male",
      avatar: "https://robohash.org/unique.png?size=100x100&set=set1",
      onlineStatus: "online",
    },
  },
  {
    id: 43,
    title: "Shadow Cloak",
    category: "Armor",
    price: 45.25,
    isFavorite: true,
    createdAt: 1648000000000,
    theme: "Dark",
    tier: "Standard",
    imageId: 23,
    author: {
      firstName: "Dana",
      lastName: "Williams",
      email: "dana@example.com",
      gender: "Female",
      avatar: "https://robohash.org/different.png?size=100x100&set=set1",
      onlineStatus: "online",
    },
  },
];

describe("filterData", () => {
  it('should filter by theme "Colorful"', () => {
    const params: IParameters = { theme: "colorful" };
    const result = filterData(params, mockProducts);
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Masked Guardian");
  });

  it('should filter by tier "Premium"', () => {
    const params: IParameters = { tier: "premium" };
    const result = filterData(params, mockProducts);
    expect(result).toHaveLength(2);
    expect(
      result.every((product) => product.tier.toLowerCase() === "premium")
    ).toBe(true);
  });

  it("should filter by price range [50, 100]", () => {
    const params: IParameters = { prices: [50, 100] };
    const result = filterData(params, mockProducts);
    expect(result).toHaveLength(2);
    expect(
      result.every((product) => product.price >= 50 && product.price <= 100)
    ).toBe(true);
  });

  it("should sort by price in ascending order", () => {
    const params: IParameters = { price: "asc" };
    const result = filterData(params, mockProducts);
    expect(result.map((p) => p.price)).toEqual([45.25, 58.85, 85.5, 120.99]);
  });

  it("should sort by price in descending order", () => {
    const params: IParameters = { price: "desc" };
    const result = filterData(params, mockProducts);
    expect(result.map((p) => p.price)).toEqual([120.99, 85.5, 58.85, 45.25]);
  });
});
