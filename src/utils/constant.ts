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
    id: "all",
    name: "All",
    value: "",
  },
  {
    id: "Accessory",
    name: "Accessory",
    value: "accessory",
  },
  {
    id: "Epic",
    name: "Epic",
    value: "epic",
  },
  {
    id: "Hat",
    name: "Hat",
    value: "hat",
  },
  {
    id: "Legendary",
    name: "Legendary",
    value: "legendary",
  },
  {
    id: "Lower Body",
    name: "Lower Body",
    value: "lower body",
  },
  {
    id: "Mythic",
    name: "Mythic",
    value: "mythic",
  },
  {
    id: "Shoes",
    name: "Shoes",
    value: "shoes",
  },
  {
    id: "Rare",
    name: "Rare",
    value: "rare",
  },
  {
    id: "Upper Body",
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
    value: 0,
  },
  {
    id: "hightToLow",
    label: "High to low",
    value: 1,
  },
];
