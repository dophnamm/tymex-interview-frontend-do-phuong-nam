import { Category, SelectOption } from "@/models/advancedSearch";
import { resources } from "@/providers";

export const navItems = [
  {
    id: "home",
    path: resources.home,
    label: "Home",
  },
  {
    id: "aboutUs",
    path: resources.aboutUs,
    label: "About US",
  },
  {
    id: "ourTeams",
    path: resources.ourTeams,
    label: "Our Teams",
  },
  {
    id: "marketplace",
    path: resources.marketplace,
    label: "Marketplace",
  },
  {
    id: "roadmap",
    path: resources.roadmap,
    label: "Roadmap",
  },
  {
    id: "whitepaper",
    path: resources.whitepaper,
    label: "Whitepaper",
  },
];

export const categories: Category[] = [
  {
    id: "",
    name: "All",
    value: "",
  },
  {
    id: "accessory",
    name: "Accessory",
    value: "accessory",
  },
  {
    id: "epic",
    name: "Epic",
    value: "epic",
  },
  {
    id: "hat",
    name: "Hat",
    value: "hat",
  },
  {
    id: "legendary",
    name: "Legendary",
    value: "legendary",
  },
  {
    id: "lower Body",
    name: "Lower Body",
    value: "lower body",
  },
  {
    id: "mythic",
    name: "Mythic",
    value: "mythic",
  },
  {
    id: "shoes",
    name: "Shoes",
    value: "shoes",
  },
  {
    id: "rare",
    name: "Rare",
    value: "rare",
  },
  {
    id: "upper Body",
    name: "Upper Body",
    value: "upper body",
  },
];

export const tiers: SelectOption[] = [
  {
    id: "all",
    label: "All",
    value: "",
  },
  {
    id: "basic",
    label: "Basic",
    value: "basic",
  },
  {
    id: "deluxe",
    label: "Deluxe",
    value: "deluxe",
  },
  {
    id: "Premium",
    label: "Premium",
    value: "premium",
  },
];

export const theme: SelectOption[] = [
  {
    id: "all",
    label: "All",
    value: "",
  },
  {
    id: "colorful",
    label: "Colorful",
    value: "colorful",
  },
  {
    id: "dark",
    label: "Dark",
    value: "dark",
  },
  {
    id: "halloween",
    label: "Halloween",
    value: "halloween",
  },
  {
    id: "light",
    label: "Light",
    value: "light",
  },
];

export const time: SelectOption[] = [
  {
    id: "latest",
    label: "Latest",
    value: "",
  },
  {
    id: "1",
    label: "1 Day",
    value: "1",
  },
  {
    id: "7",
    label: "7 Days",
    value: "7",
  },
  {
    id: "30",
    label: "30 Days",
    value: "30",
  },
  {
    id: "90",
    label: "90 Days",
    value: "90",
  },
];

export const price: SelectOption[] = [
  {
    id: "all",
    label: "All",
    value: "",
  },
  {
    id: "lowToHigh",
    label: "Low to high",
    value: "asc",
  },
  {
    id: "hightToLow",
    label: "High to low",
    value: "desc",
  },
];
