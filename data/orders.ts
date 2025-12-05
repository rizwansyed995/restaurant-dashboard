export type OrderStatus = "NEW" | "ACCEPTED" | "READY" | "COMPLETED";

export interface Order {
  id: string;
  platform: "zomato" | "swiggy" | "inhouse";
  platformLogo: string;
  createdAt: string; // ISO timestamp
  items: string[];
  status: OrderStatus;
  otp?: string;
  countdown?: string;
  brandColor: string;
}

export const orders: Order[] = [
  {
    id: "1235",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: "2025-12-05T18:20:00Z",
    items: [
      "1x Coffee Almond Shake",
      "1x Grilled Paneer with Peri Peri Sauce",
      "1x Garlic Bread",
      "+3 more"
    ],
    status: "NEW",
    countdown: "00:25",
    brandColor: "#E23744"
  },

  {
    id: "3235",
    platform: "swiggy",
    platformLogo: "/logos/swiggy.png",
    createdAt: "2025-12-05T18:15:00Z",
    items: [
      "2x Classic Cold Coffee",
      "1x Corn Cheese Sandwich"
    ],
    status: "ACCEPTED",
    otp: "2845",
    brandColor: "#FC8019"
  },

  {
    id: "2235",
    platform: "inhouse",
    platformLogo: "/logos/inhouse.png",
    createdAt: "2025-12-05T18:00:00Z",
    items: [
      "1x Penne Alfredo Pasta",
      "1x Belgian Chocolate Shake"
    ],
    status: "READY",
    brandColor: "#111827"
  },

  {
    id: "9876",
    platform: "zomato",
    platformLogo: "/logos/zomato.png",
    createdAt: "2025-12-05T17:50:00Z",
    items: [
      "1x Hazelnut Cold Coffee",
      "1x Paneer Tikka Sandwich"
    ],
    status: "COMPLETED",
    brandColor: "#E23744"
  }
];
