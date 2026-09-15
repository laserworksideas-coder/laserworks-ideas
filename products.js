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
    images: [
      "product-10.jpg"
    ]
  },

  {
    category: "CHRISTENING",
    subcategory: "Wish Books",
    name: "Wish Book",
    description: "Personalised wish book for beautiful memories.",
    price: "Ask for quotation",
    images: [
      "product-11.jpg"
    ]
  },

  {
    category: "CHRISTENING",
    subcategory: "Baptism Accessories",
    name: "Baptism Dream Catcher Set",
    description: "Personalised christening accessories and decorations.",
    price: "Ask for quotation",
    images: [
      "product-4.jpg"
    ]
  },

  {
    category: "CHRISTENING",
    subcategory: "Frames",
    name: "Wishes Frame",
    description: "Beautiful personalised frame for wishes.",
    price: "Ask for quotation",
    images: [
      "product-9.jpg"
    ]
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
    images: [
      "product-1.jpg"
    ]
  },

  {
    category: "WEDDING",
    subcategory: "Wedding Signs",
    name: "Wedding Signs",
    description: "Personalised signs for weddings and special occasions.",
    price: "Ask for quotation",
    images: [
      "product-15.jpg"
    ]
  },

  {
    category: "WEDDING",
    subcategory: "Wedding Favours",
    name: "Wedding Favour Boxes",
    description: "Personalised boxes for weddings and special events.",
    price: "Ask for quotation",
    images: [
      "product-16.jpg"
    ]
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
    images: [
      "product-2.jpg"
    ]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Frames",
    name: "Mother's Day Decorative Frame",
    description: "Personalised decorative frame.",
    price: "Ask for quotation",
    images: [
      "product-3.jpg"
    ]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Name Decorations",
    name: "Personalised Name Decoration",
    description: "Beautiful decoration personalised with a name.",
    price: "Ask for quotation",
    images: [
      "product-6.jpg"
    ]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Keychains",
    name: "Personalised Keychain",
    description: "Cute handmade personalised keychain.",
    price: "Ask for quotation",
    images: [
      "product-7.jpg"
    ]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Keychains",
    name: "Personalised Keychain",
    description: "Handmade keychain personalised for you.",
    price: "Ask for quotation",
    images: [
      "product-8.jpg"
    ]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "Acrylic Frames",
    name: "Acrylic Song Frame",
    description: "Personalised acrylic frame featuring your favourite song.",
    price: "Ask for quotation",
    images: [
      "product-12.jpg"
    ]
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
    images: [
      "product-13.jpg"
    ]
  },

  {
    category: "BOXES",
    subcategory: "Wine Boxes",
    name: "Wine Box",
    description: "Elegant personalised wine box.",
    price: "Ask for quotation",
    images: [
      "product-14.jpg"
    ]
  },

  {
    category: "BOXES",
    subcategory: "Choice Boxes",
    name: "Choice Boxes",
    description: "Unique personalised boxes for special occasions.",
    price: "Ask for quotation",
    images: [
      "product-5.jpg"
    ]
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
    images: [
      "product-17.jpg"
    ]
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
    images: [
      "product-18.jpg"
    ]
  },

  {
    category: "CUSTOMISED CUT OUTS",
    subcategory: "Laser Cut Outs",
    name: "Customised Cut Outs",
    description: "Personalised laser cut-outs for decorations.",
    price: "Ask for quotation",
    images: [
      "product-19.jpg"
    ]
  },

  {
    category: "CUSTOMISED CUT OUTS",
    subcategory: "Laser Cut Outs",
    name: "Customised Cut Outs",
    description: "Unique custom-made cut-outs.",
    price: "Ask for quotation",
    images: [
      "product-20.jpg"
    ]
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
