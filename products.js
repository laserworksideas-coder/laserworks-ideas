```javascript
const categories = [
  "CHRISTENING",
  "WEDDING",
  "SEASONAL ITEMS",
  "PERSONALISED GIFTS",
  "BOXES",
  "CORPORATE GIFTS",
  "CUSTOMISED CUT OUTS",
  "DECOR",
  "OTHER GIFTS",
  "INVITATIONS"
];


const products = [

  // =========================
  // CHRISTENING
  // =========================

  {
    category: "CHRISTENING",
    subcategory: "Hangers",
    name: "Baptism Hangers",
    description: "Personalised hanger for a special christening.",
    price: "Ask for quotation",
    images: ["product-10.jpg"]
  },

  {
    category: "CHRISTENING",
    subcategory: "Wish Books",
    name: "Wish Book",
    description: "Personalised wish book for beautiful memories.",
    price: "Ask for quotation",
    images: ["product-11.jpg"]
  },

  {
    category: "CHRISTENING",
    subcategory: "Baptism Accessories",
    name: "Baptism Dream Catcher Set",
    description: "Personalised christening accessories and decorations.",
    price: "Ask for quotation",
    images: ["product-4.jpg"]
  },

  {
    category: "CHRISTENING",
    subcategory: "Frames",
    name: "Wishes Frame",
    description: "Beautiful personalised frame for wishes.",
    price: "Ask for quotation",
    images: ["product-9.jpg"]
  },


  // =========================
  // WEDDING
  // =========================

  {
    category: "WEDDING",
    subcategory: "Hangers",
    name: "Groom & Bride Hanger",
    description: "Personalised hanger for the groom and bride.",
    price: "Ask for quotation",
    images: ["product-1.jpg"]
  },

  {
    category: "WEDDING",
    subcategory: "Wedding Signs",
    name: "Wedding Signs",
    description: "Personalised signs for weddings and special occasions.",
    price: "Ask for quotation",
    images: ["product-15.jpg"]
  },

  {
    category: "WEDDING",
    subcategory: "Wedding Favours",
    name: "Wedding Favour Boxes",
    description: "Personalised boxes for weddings and special events.",
    price: "Ask for quotation",
    images: ["product-16.jpg"]
  },


  // =========================
  // SEASONAL ITEMS
  // =========================

  {
    category: "SEASONAL ITEMS",
    subcategory: "Seasonal Gifts",
    name: "Seasonal Gift",
    description: "Special handmade creations for every season.",
    price: "Ask for quotation",
    images: []
  },


  // =========================
  // PERSONALISED GIFTS
  // =========================

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Photo Gifts",
    name: "Mother's Day Photo Holder",
    description: "A beautiful personalised photo holder.",
    price: "Ask for quotation",
    images: ["product-2.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Frames",
    name: "Mother's Day Decorative Frame",
    description: "Personalised decorative frame.",
    price: "Ask for quotation",
    images: ["product-3.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Name Decorations",
    name: "Personalised Name Decoration",
    description: "Beautiful decoration personalised with a name.",
    price: "Ask for quotation",
    images: ["product-6.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Keychains",
    name: "Personalised Keychain",
    description: "Cute handmade personalised keychain.",
    price: "Ask for quotation",
    images: ["product-7.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Keychains",
    name: "Personalised Keychain",
    description: "Handmade keychain personalised for you.",
    price: "Ask for quotation",
    images: ["product-8.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Acrylic Frames",
    name: "Acrylic Song Frame",
    description: "Personalised acrylic frame featuring your favourite song.",
    price: "Ask for quotation",
    images: ["product-12.jpg"]
  },

  // New
  {
    category: "PERSONALISED GIFTS",
    subcategory: "Keychains",
    name: "Personalised Keyrings",
    description: "Personalised keyrings in different designs.",
    price: "Ask for quotation",
    images: ["product-25.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Keychains",
    name: "Personalised Keyrings",
    description: "Custom keyrings made for gifts and special occasions.",
    price: "Ask for quotation",
    images: ["product-28.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Keychains",
    name: "Personalised Keyrings",
    description: "Custom-made personalised keyring.",
    price: "Ask for quotation",
    images: ["product-29.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Keychains",
    name: "Personalised Keyrings",
    description: "Unique personalised keyring design.",
    price: "Ask for quotation",
    images: ["product-30.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Keychains",
    name: "Personalised Keyrings",
    description: "Handmade personalised keyring.",
    price: "Ask for quotation",
    images: ["product-31.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Keychains",
    name: "Personalised Keyrings",
    description: "Custom personalised keyring.",
    price: "Ask for quotation",
    images: ["product-32.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Koumparas",
    name: "Personalised Koumparas",
    description: "Personalised money box for special occasions.",
    price: "Ask for quotation",
    images: ["product-27.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Newborn Gifts",
    name: "Newborn Gift",
    description: "Personalised creation for a newborn baby.",
    price: "Ask for quotation",
    images: ["product-29.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Newborn Gifts",
    name: "Newborn Gift",
    description: "Beautiful personalised newborn gift.",
    price: "Ask for quotation",
    images: ["product-30.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Newborn Gifts",
    name: "Newborn Gift",
    description: "Custom-made gift for a newborn.",
    price: "Ask for quotation",
    images: ["product-31.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Pencil Cases",
    name: "Personalised Pencil Case",
    description: "Personalised pencil case for school and everyday use.",
    price: "Ask for quotation",
    images: ["product-33.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Magnets",
    name: "Personalised Magnets",
    description: "Personalised magnets for gifts and special occasions.",
    price: "Ask for quotation",
    images: ["product-34.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Door Hangers",
    name: "Personalised Door Hanger",
    description: "Custom-made personalised door hanger.",
    price: "Ask for quotation",
    images: ["product-35.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Keychains",
    name: "Personalised Keyrings",
    description: "Custom-made personalised keyrings.",
    price: "Ask for quotation",
    images: ["product-37.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Photo Frames",
    name: "Personalised Photo Frame",
    description: "Personalised photo frame for a special memory.",
    price: "Ask for quotation",
    images: ["product-38.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Educational",
    name: "Educational Creation",
    description: "Personalised educational creation for children.",
    price: "Ask for quotation",
    images: ["product-39.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Newborn Gifts",
    name: "Newborn Gift",
    description: "Personalised gift for a newborn baby.",
    price: "Ask for quotation",
    images: ["product-40.jpg"]
  },


  // =========================
  // BOXES
  // =========================

  {
    category: "BOXES",
    subcategory: "Tea Boxes",
    name: "Tea Box",
    description: "Beautiful handmade tea box, perfect for gifting.",
    price: "Ask for quotation",
    images: ["product-13.jpg"]
  },

  {
    category: "BOXES",
    subcategory: "Wine Boxes",
    name: "Wine Box",
    description: "Elegant personalised wine box.",
    price: "Ask for quotation",
    images: ["product-14.jpg"]
  },

  {
    category: "BOXES",
    subcategory: "Choice Boxes",
    name: "Choice Boxes",
    description: "Unique personalised boxes for special occasions.",
    price: "Ask for quotation",
    images: ["product-5.jpg"]
  },

  {
    category: "BOXES",
    subcategory: "Gift Boxes",
    name: "Personalised Gift Box",
    description: "Personalised box created for gifting and special occasions.",
    price: "Ask for quotation",
    images: ["product-21.jpg"]
  },

  {
    category: "BOXES",
    subcategory: "Gift Boxes",
    name: "Personalised Gift Box",
    description: "Custom-made box for a unique gift.",
    price: "Ask for quotation",
    images: ["product-41.jpg"]
  },


  // =========================
  // CORPORATE GIFTS
  // =========================

  {
    category: "CORPORATE GIFTS",
    subcategory: "Gift Boxes",
    name: "Corporate Gift Boxes",
    description: "Customised gift boxes for businesses.",
    price: "Ask for quotation",
    images: ["product-17.jpg"]
  },


  // =========================
  // CUSTOMISED CUT OUTS
  // =========================

  {
    category: "CUSTOMISED CUT OUTS",
    subcategory: "Laser Cut Outs",
    name: "Customised Cut Outs",
    description: "Custom-made laser cut-outs designed to your needs.",
    price: "Ask for quotation",
    images: ["product-18.jpg"]
  },

  {
    category: "CUSTOMISED CUT OUTS",
    subcategory: "Laser Cut Outs",
    name: "Customised Cut Outs",
    description: "Personalised laser cut-outs for decorations.",
    price: "Ask for quotation",
    images: ["product-19.jpg"]
  },

  {
    category: "CUSTOMISED CUT OUTS",
    subcategory: "Laser Cut Outs",
    name: "Customised Cut Outs",
    description: "Unique custom-made cut-outs.",
    price: "Ask for quotation",
    images: ["product-20.jpg"]
  },


  // =========================
  // DECOR
  // =========================

  {
    category: "DECOR",
    subcategory: "Decorations",
    name: "Decorative Creation",
    description: "Handmade wooden and acrylic decoration.",
    price: "Ask for quotation",
    images: []
  },

  {
    category: "DECOR",
    subcategory: "Cake Toppers",
    name: "Personalised Cake Topper",
    description: "Custom cake topper for birthdays, weddings and special occasions.",
    price: "Ask for quotation",
    images: ["product-26.jpg"]
  },

  {
    category: "DECOR",
    subcategory: "Foamboard",
    name: "Custom Foamboard",
    description: "Custom-designed foamboard creation for events and displays.",
    price: "Ask for quotation",
    images: ["product-22.jpg"]
  },


  // =========================
  // OTHER GIFTS
  // =========================

  {
    category: "OTHER GIFTS",
    subcategory: "Gift Ideas",
    name: "Personalised Gift",
    description: "Unique handmade gift for every occasion.",
    price: "Ask for quotation",
    images: []
  },

  {
    category: "OTHER GIFTS",
    subcategory: "Clothing",
    name: "Personalised Clothing",
    description: "Customised clothing created for special occasions, businesses and gifts.",
    price: "Ask for quotation",
    images: ["product-23.jpg"]
  },

  {
    category: "OTHER GIFTS",
    subcategory: "Clothing",
    name: "Personalised Clothing",
    description: "Custom printed clothing for individuals, events and businesses.",
    price: "Ask for quotation",
    images: ["product-24.jpg"]
  },


  // =========================
  // INVITATIONS
  // =========================

  {
    category: "INVITATIONS",
    subcategory: "Invitations",
    name: "Personalised Invitation",
    description: "Custom-designed invitation for your special occasion.",
    price: "Ask for quotation",
    images: []
  }

];
```

**Σημείωση:** Έβαλα τα `product-25` και `product-28` ως keyrings και τα `29–31` ως newborn, επειδή μου τα έγραψες με επικάλυψη (`25–32 keyrings` και `29–31 newborns`). Άρα αυτά τα 3 τα έχω προσωρινά ως **Newborn**, όχι διπλά. Αν οι φωτογραφίες 29–31 είναι τελικά keyrings, το αλλάζουμε αμέσως.
