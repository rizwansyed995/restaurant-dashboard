export type DietaryType = "veg" | "non-veg";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  dietary: DietaryType;
  imageColor: string;
}

export const CATEGORIES = [
  { id: "indian-mains", label: "Indian Mains", icon: "I", color: "text-orange-600 bg-orange-100 dark:bg-orange-900/30" },
  { id: "indian-appetizers", label: "Indian Appetizers", icon: "I", color: "text-amber-600 bg-amber-100 dark:bg-amber-900/30" },
  { id: "small-plates", label: "Small Plates", icon: "S", color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30" },
  { id: "raw-fresh", label: "Raw & Fresh", icon: "R", color: "text-green-600 bg-green-100 dark:bg-green-900/30" },
  { id: "dimsums", label: "Dimsums", icon: "D", color: "text-pink-600 bg-pink-100 dark:bg-pink-900/30" },
  { id: "asian-mains", label: "Asian Mains", icon: "A", color: "text-purple-600 bg-purple-100 dark:bg-purple-900/30" },
  { id: "rice-noodles", label: "Rice & Noodles", icon: "S", color: "text-cyan-600 bg-cyan-100 dark:bg-cyan-900/30" },
  { id: "pizza", label: "Pizza All Type", icon: "P", color: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30" },
  { id: "pasta", label: "Pasta", icon: "P", color: "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30" },
  { id: "sandwiches", label: "Sandwiches & Burgers", icon: "S", color: "text-teal-600 bg-teal-100 dark:bg-teal-900/30" },
];

export const MENU_ITEMS: MenuItem[] = [
  // Indian Mains
  { id: "1", name: "Dal Dhabha", price: 560, category: "indian-mains", dietary: "veg", imageColor: "bg-yellow-200" },
  { id: "2", name: "Signature Dal Makhani", price: 60, category: "indian-mains", dietary: "veg", imageColor: "bg-orange-200" },
  { id: "3", name: "Mili Juli Sabziaan", price: 60, category: "indian-mains", dietary: "veg", imageColor: "bg-green-200" },
  { id: "4", name: "Khadai Paneer", price: 60, category: "indian-mains", dietary: "veg", imageColor: "bg-red-200" },
  { id: "5", name: "Paneer Makhani", price: 60, category: "indian-mains", dietary: "veg", imageColor: "bg-orange-300" },
  { id: "6", name: "Signature Butter Chicken", price: 60, category: "indian-mains", dietary: "non-veg", imageColor: "bg-orange-400" },
  { id: "7", name: "Dum Ka Murgh", price: 60, category: "indian-mains", dietary: "non-veg", imageColor: "bg-amber-200" },
  { id: "8", name: "Chicken Tikka Masala", price: 60, category: "indian-mains", dietary: "non-veg", imageColor: "bg-red-300" },
  // Other Categories
  { id: "9", name: "Paneer Tikka", price: 320, category: "indian-appetizers", dietary: "veg", imageColor: "bg-yellow-300" },
  { id: "10", name: "Chicken 65", price: 450, category: "indian-appetizers", dietary: "non-veg", imageColor: "bg-red-400" },
  { id: "11", name: "Spring Rolls", price: 250, category: "small-plates", dietary: "veg", imageColor: "bg-green-300" },
];