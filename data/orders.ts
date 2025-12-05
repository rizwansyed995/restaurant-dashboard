// data/orders.ts

export type OrderStatus = "NEW" | "ACCEPTED" | "READY" | "COMPLETED" | "CANCELED";

export interface Order {
  id: string;
  platform: "zomato" | "swiggy" | "inhouse";
  platformLogo: string;
  createdAt: string;        // ISO timestamp
  items: string[];
  status: OrderStatus;
  otp?: string;             // only when accepted
  riderAssigned: boolean;   // NEW FIELD
}

export const orders: Order[] = [
  {
    id: "1235",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now()).toISOString(), // 20 sec ago
    items: [
      "1x Coffee Almond Shake",
      "1x Grilled Paneer with Peri Peri Sauce",
      "1x Garlic Bread",
      "+3 more"
    ],
    status: "NEW",
    riderAssigned: false
  },

  {
    id: "3235",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: new Date(Date.now() - 3 * 60 * 1000).toISOString(), // 3 mins ago
    items: [
      "2x Classic Cold Coffee",
      "1x Corn Cheese Sandwich"
    ],
    status: "ACCEPTED",
    otp: "2845",
    riderAssigned: true
  },

  {
    id: "2235",
    platform: "inhouse",
    platformLogo: "/logos/inhouse.jpeg",
    createdAt: new Date(Date.now() - 8 * 60 * 1000).toISOString(), // 8 mins ago
    items: [
      "1x Penne Alfredo Pasta",
      "1x Belgian Chocolate Shake"
    ],
    otp: "2845",
    status: "READY",
    riderAssigned: true
  },

  {
    id: "9876",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now() - 35 * 60 * 1000).toISOString(), // 35 mins ago
    items: [
      "1x Hazelnut Cold Coffee",
      "1x Paneer Tikka Sandwich"
    ],
    otp: "28454",
    status: "COMPLETED",
    riderAssigned: true
  },
  {
    id: "9886",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: new Date(Date.now() - 35 * 60 * 1000).toISOString(), // 35 mins ago
    items: [
      "1x Hazelnut Cold Coffee",
      "1x Paneer Tikka Sandwich"
    ],
    otp: "28454",
    status: "CANCELED",
    riderAssigned: true
  }
];
