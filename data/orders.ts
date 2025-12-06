// data/orders.ts

export type OrderPlatform = "zomato" | "swiggy" | "inhouse";
export type TableNumber = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

export type OrderStatus =
  "NEW" | "ACCEPTED" | "READY" | "COMPLETED" | "CANCELED";


export interface Order {
  id: string;
  platform: OrderPlatform;
  tableNumber?: TableNumber;
  platformLogo: string;
  createdAt: string;
  items: string[];
  status: OrderStatus;
  otp?: string;
  riderAssigned: boolean;
}


export const orders: Order[] = [
  {
    id: "1001",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now() - 10 * 1000).toISOString(),
    items: ["1x Cold Coffee", "1x Veg Burger", "+2 more"],
    status: "NEW",
    riderAssigned: false
  },
  {
    id: "1002",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: new Date(Date.now() - 35 * 1000).toISOString(),
    items: ["1x Pasta Arrabiata", "1x Garlic Bread"],
    status: "NEW",
    riderAssigned: false
  },
  {
    id: "1003",
    platform: "inhouse",
    tableNumber: "1",
    platformLogo: "/logos/inhouse.jpeg",
    createdAt: new Date(Date.now() - 50 * 1000).toISOString(),
    items: ["2x Cappuccino", "1x Cheese Sandwich"],
    status: "NEW",
    riderAssigned: false
  },
  {
    id: "1004",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now() - 90 * 1000).toISOString(),
    items: ["1x Oreo Shake", "1x Peri Peri Fries"],
    status: "NEW",
    riderAssigned: false
  },
  {
    id: "1005",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    items: ["1x Choco Lava Cake", "1x Alfredo Pasta"],
    status: "NEW",
    riderAssigned: false
  },

  // ACCEPTED
  {
    id: "1006",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now() - 4 * 60 * 1000).toISOString(),
    items: ["1x Classic Latte", "1x Veg Wrap"],
    status: "ACCEPTED",
    otp: "2481",
    riderAssigned: true
  },
  {
    id: "1007",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    items: ["1x Ice Tea", "1x Club Sandwich"],
    status: "ACCEPTED",
    otp: "9834",
    riderAssigned: true
  },
  {
    id: "1008",
    platform: "inhouse",
    tableNumber: "2",
    platformLogo: "/logos/inhouse.jpeg",
    createdAt: new Date(Date.now() - 7 * 60 * 1000).toISOString(),
    items: ["1x Kitkat Shake", "1x White Sauce Pasta"],
    status: "ACCEPTED",
    otp: "5532",
    riderAssigned: true
  },
  {
    id: "1009",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now() - 8 * 60 * 1000).toISOString(),
    items: ["2x Espresso", "1x Grilled Paneer Sandwich"],
    status: "ACCEPTED",
    otp: "1304",
    riderAssigned: true
  },
  {
    id: "1010",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    items: ["1x Iced Mocha", "1x Chicken Burger"],
    status: "ACCEPTED",
    otp: "7782",
    riderAssigned: true
  },

  // READY
  {
    id: "1011",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    items: ["1x Americano", "1x Herb Garlic Bread"],
    status: "READY",
    otp: "5541",
    riderAssigned: true
  },
  {
    id: "1012",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: new Date(Date.now() - 14 * 60 * 1000).toISOString(),
    items: ["1x Frappé", "1x Mushroom Sandwich"],
    status: "READY",
    otp: "9081",
    riderAssigned: true
  },
  {
    id: "1013",
    platform: "inhouse",
    tableNumber: "3",
    platformLogo: "/logos/inhouse.jpeg",
    createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    items: ["1x Hot Chocolate", "1x Cheese Garlic Bun"],
    status: "READY",
    otp: "4412",
    riderAssigned: true
  },
  {
    id: "1014",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: new Date(Date.now() - 18 * 60 * 1000).toISOString(),
    items: ["1x Caramel Latte", "1x Pasta Red Sauce"],
    status: "READY",
    otp: "2984",
    riderAssigned: true
  },
  {
    id: "1015",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
    items: ["1x Ice Americano", "1x Chocolate Donut"],
    status: "READY",
    otp: "7728",
    riderAssigned: true
  },

  // COMPLETED
  {
    id: "1016",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    items: ["1x Iced Latte", "1x Loaded Fries"],
    status: "COMPLETED",
    otp: "1098",
    riderAssigned: true
  },
  {
    id: "1017",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
    items: ["1x Hot Coffee", "1x Egg Sandwich"],
    status: "COMPLETED",
    otp: "8821",
    riderAssigned: true
  },
  {
    id: "1018",
    platform: "inhouse",
    tableNumber: "4",
    platformLogo: "/logos/inhouse.jpeg",
    createdAt: new Date(Date.now() - 50 * 60 * 1000).toISOString(),
    items: ["1x Vanilla Shake", "1x Veg Noodles"],
    status: "COMPLETED",
    otp: "2291",
    riderAssigned: true
  },
  {
    id: "1019",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now() - 65 * 60 * 1000).toISOString(),
    items: ["1x Butterscotch Shake", "1x Cheese Sandwich"],
    status: "COMPLETED",
    otp: "4419",
    riderAssigned: true
  },
  {
    id: "1020",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: new Date(Date.now() - 70 * 60 * 1000).toISOString(),
    items: ["1x Chai Latte", "1x Veg Puff"],
    status: "COMPLETED",
    otp: "7102",
    riderAssigned: true
  },

  // CANCELED
  {
    id: "1021",
    platform: "inhouse",
    tableNumber: "5",
    platformLogo: "/logos/inhouse.jpeg",
    createdAt: new Date(Date.now() - 80 * 60 * 1000).toISOString(),
    items: ["1x KitKat Shake", "1x Nachos Cheese"],
    status: "CANCELED",
    riderAssigned: false
  },
  {
    id: "1022",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
    items: ["1x Cold Coffee", "1x Chicken Wrap"],
    status: "CANCELED",
    riderAssigned: false
  },
  {
    id: "1023",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now() - 100 * 60 * 1000).toISOString(),
    items: ["1x Brownie Shake", "1x Paneer Roll"],
    status: "CANCELED",
    riderAssigned: false
  },
  {
    id: "1024",
    platform: "inhouse",
    tableNumber: "6",
    platformLogo: "/logos/inhouse.jpeg",
    createdAt: new Date(Date.now() - 110 * 60 * 1000).toISOString(),
    items: ["1x Masala Tea", "1x Samosa"],
    status: "CANCELED",
    riderAssigned: false
  },
  {
    id: "1025",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: new Date(Date.now() - 120 * 60 * 1000).toISOString(),
    items: ["1x Lemon Iced Tea", "1x Veg Club Sandwich"],
    status: "CANCELED",
    riderAssigned: false
  },

  // EXTRA NEW
  {
    id: "1026",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now() - 15 * 1000).toISOString(),
    items: ["1x Mango Shake", "1x Aloo Sandwich"],
    status: "NEW",
    riderAssigned: false
  },
  {
    id: "1027",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: new Date(Date.now() - 25 * 1000).toISOString(),
    items: ["1x Mocha", "1x Garlic Toast"],
    status: "NEW",
    riderAssigned: false
  },
  {
    id: "1028",
    platform: "inhouse",
    tableNumber: "7",
    platformLogo: "/logos/inhouse.jpeg",
    createdAt: new Date(Date.now() - 45 * 1000).toISOString(),
    items: ["1x Hot Coffee", "1x Veg Patties"],
    status: "NEW",
    riderAssigned: false
  }
];
