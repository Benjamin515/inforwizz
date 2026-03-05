export interface Product {
  name: string;
  category: string;
  subcategory: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  subcategories: ProductSubcategory[];
}

export interface ProductSubcategory {
  name: string;
  items: string[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "computing",
    name: "Computing",
    icon: "💻",
    subcategories: [
      {
        name: "Laptops",
        items: [
          "Ultrabooks",
          "Gaming Laptops",
          "Business Laptops",
          "2-in-1 Convertibles",
          "Chromebooks",
          "Mobile Workstations",
          "Student Laptops",
          "Refurbished Laptops",
        ],
      },
      {
        name: "Desktop Computers",
        items: [
          "Gaming Desktops",
          "All-in-One PCs",
          "Mini PCs",
          "Workstations",
          "Custom Build PCs",
        ],
      },
      {
        name: "Computer Components - Processors",
        items: ["Intel CPUs", "AMD CPUs"],
      },
      {
        name: "Computer Components - Graphics Cards",
        items: ["NVIDIA GPUs", "AMD GPUs"],
      },
      {
        name: "Computer Components - Motherboards",
        items: ["ATX", "Micro-ATX", "Mini-ITX"],
      },
      {
        name: "Computer Components - Memory",
        items: ["DDR4 RAM", "DDR5 RAM", "Laptop RAM"],
      },
      {
        name: "Computer Components - Storage",
        items: ["SATA SSD", "NVMe SSD", "HDD", "External HDD", "External SSD"],
      },
      {
        name: "Computer Components - Cooling",
        items: ["Air Coolers", "Liquid Coolers", "Thermal Paste"],
      },
      {
        name: "Computer Components - Power Supplies",
        items: ["Modular PSU", "Non-Modular PSU"],
      },
      {
        name: "Computer Components - Cases",
        items: ["Mid Tower", "Full Tower", "Mini ITX Cases"],
      },
      {
        name: "Monitors",
        items: [
          "Gaming Monitors",
          "4K Monitors",
          "Ultrawide Monitors",
          "Curved Monitors",
          "Portable Monitors",
          "Professional Color-Accurate Displays",
        ],
      },
      {
        name: "Computer Accessories",
        items: [
          "Keyboards (Mechanical, Wireless)",
          "Mice (Gaming, Ergonomic)",
          "Mouse Pads",
          "Webcams",
          "USB Hubs",
          "Docking Stations",
          "Laptop Stands",
          "Cooling Pads",
        ],
      },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Devices",
    icon: "📱",
    subcategories: [
      {
        name: "Smartphones",
        items: [
          "Flagship Phones",
          "Mid-range Phones",
          "Budget Phones",
          "Foldable Phones",
          "Rugged Phones",
        ],
      },
      {
        name: "Tablets",
        items: ["Android Tablets", "iPads", "Windows Tablets", "Drawing Tablets"],
      },
      {
        name: "Smartwatches & Wearables",
        items: [
          "Fitness Trackers",
          "Smartwatches",
          "Kids Smartwatches",
          "GPS Watches",
        ],
      },
      {
        name: "Mobile Accessories",
        items: [
          "Phone Cases",
          "Screen Protectors",
          "Chargers",
          "Wireless Chargers",
          "Power Banks",
          "Car Mounts",
          "Cables (USB-C, Lightning, Micro USB)",
          "Selfie Sticks",
        ],
      },
    ],
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: "🎮",
    subcategories: [
      {
        name: "Consoles",
        items: ["PlayStation", "Xbox", "Nintendo", "Retro Consoles"],
      },
      {
        name: "Console Accessories",
        items: ["Controllers", "Charging Docks", "Headsets", "Storage Expansions"],
      },
      {
        name: "PC Gaming",
        items: [
          "Gaming Keyboards",
          "Gaming Mice",
          "Gaming Headsets",
          "Gaming Chairs",
          "RGB Accessories",
          "Capture Cards",
        ],
      },
      {
        name: "VR & AR",
        items: ["VR Headsets", "VR Controllers", "VR Accessories"],
      },
    ],
  },
  {
    id: "tv-entertainment",
    name: "TV & Home Entertainment",
    icon: "📺",
    subcategories: [
      {
        name: "Televisions",
        items: [
          "LED TVs",
          "OLED TVs",
          "QLED TVs",
          "4K TVs",
          "8K TVs",
          "Smart TVs",
        ],
      },
      {
        name: "Audio Systems",
        items: [
          "Soundbars",
          "Home Theater Systems",
          "AV Receivers",
          "Subwoofers",
          "Bookshelf Speakers",
          "Floorstanding Speakers",
        ],
      },
      {
        name: "Streaming Devices",
        items: ["TV Streaming Sticks", "Media Players"],
      },
      {
        name: "Projectors",
        items: [
          "Home Theater Projectors",
          "Portable Projectors",
          "Projector Screens",
        ],
      },
    ],
  },
  {
    id: "audio",
    name: "Audio",
    icon: "🎧",
    subcategories: [
      {
        name: "Headphones",
        items: [
          "Over-Ear",
          "On-Ear",
          "In-Ear",
          "Noise Cancelling",
          "Studio Headphones",
        ],
      },
      {
        name: "Earbuds",
        items: ["True Wireless Earbuds", "Wired Earbuds", "Sports Earbuds"],
      },
      {
        name: "Microphones",
        items: [
          "USB Microphones",
          "XLR Microphones",
          "Lavalier Mics",
          "Podcasting Kits",
        ],
      },
      {
        name: "Portable Audio",
        items: ["Bluetooth Speakers", "Party Speakers", "Smart Speakers"],
      },
    ],
  },
  {
    id: "smart-home",
    name: "Smart Home",
    icon: "🏠",
    subcategories: [
      {
        name: "Smart Lighting",
        items: ["Smart Bulbs", "Light Strips", "Smart Switches"],
      },
      {
        name: "Smart Security",
        items: [
          "Security Cameras",
          "Video Doorbells",
          "Smart Locks",
          "Alarm Systems",
        ],
      },
      {
        name: "Smart Assistants",
        items: ["Smart Displays", "Smart Hubs"],
      },
      {
        name: "Smart Appliances",
        items: [
          "Robot Vacuums",
          "Smart Thermostats",
          "Smart Plugs",
          "Air Purifiers",
        ],
      },
    ],
  },
  {
    id: "office",
    name: "Office Equipment",
    icon: "🖨️",
    subcategories: [
      {
        name: "Office Equipment",
        items: [
          "Printers (Inkjet, Laser)",
          "Scanners",
          "Label Printers",
          "Paper Shredders",
          "Projectors (Business)",
          "Conference Cameras",
          "VoIP Phones",
        ],
      },
    ],
  },
  {
    id: "cameras",
    name: "Cameras & Photography",
    icon: "📷",
    subcategories: [
      {
        name: "Cameras",
        items: [
          "DSLR",
          "Mirrorless",
          "Action Cameras",
          "Compact Cameras",
          "Instant Cameras",
        ],
      },
      {
        name: "Lenses",
        items: ["Prime Lenses", "Zoom Lenses", "Telephoto Lenses"],
      },
      {
        name: "Camera Accessories",
        items: [
          "Tripods",
          "Gimbals",
          "Memory Cards",
          "Camera Bags",
          "Lighting Kits",
        ],
      },
    ],
  },
  {
    id: "automotive",
    name: "Automotive Electronics",
    icon: "🚗",
    subcategories: [
      {
        name: "Automotive Electronics",
        items: [
          "Dash Cameras",
          "Car Stereos",
          "GPS Navigation",
          "Car Chargers",
          "Parking Sensors",
        ],
      },
    ],
  },
  {
    id: "fitness",
    name: "Fitness & Health Tech",
    icon: "🏋️",
    subcategories: [
      {
        name: "Fitness & Health Tech",
        items: [
          "Smart Scales",
          "Fitness Trackers",
          "Massage Guns",
          "Blood Pressure Monitors",
          "Smart Rings",
        ],
      },
    ],
  },
  {
    id: "networking",
    name: "Networking",
    icon: "🔌",
    subcategories: [
      {
        name: "Networking",
        items: [
          "WiFi Routers",
          "Mesh Systems",
          "Network Switches",
          "Modems",
          "Range Extenders",
          "Ethernet Cables",
        ],
      },
    ],
  },
  {
    id: "power",
    name: "Power & Electrical",
    icon: "🔋",
    subcategories: [
      {
        name: "Power & Electrical",
        items: [
          "Surge Protectors",
          "UPS Systems",
          "Extension Cords",
          "Voltage Stabilizers",
          "Inverters",
          "Portable Power Stations",
        ],
      },
    ],
  },
  {
    id: "emerging",
    name: "Emerging Tech",
    icon: "🧠",
    subcategories: [
      {
        name: "Emerging Tech",
        items: [
          "3D Printers",
          "Drones",
          "AI Robots",
          "Developer Boards",
          "Raspberry Pi Kits",
        ],
      },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise & B2B",
    icon: "📦",
    subcategories: [
      {
        name: "Enterprise & B2B",
        items: [
          "Servers",
          "Rack Cabinets",
          "NAS Systems",
          "POS Systems",
          "Biometric Systems",
          "ID Card Printers",
        ],
      },
    ],
  },
  {
    id: "lifestyle",
    name: "Lifestyle & Tech Accessories",
    icon: "🎒",
    subcategories: [
      {
        name: "Lifestyle & Tech Accessories",
        items: [
          "Laptop Bags",
          "Tablet Sleeves",
          "Tech Organizers",
          "Blue Light Glasses",
          "Cleaning Kits",
        ],
      },
    ],
  },
];

// Generate all products as a flat array for searching
export const allProducts: Product[] = productCategories.flatMap((category) =>
  category.subcategories.flatMap((subcategory) =>
    subcategory.items.map((item) => ({
      name: item,
      category: category.name,
      subcategory: subcategory.name,
    }))
  )
);
