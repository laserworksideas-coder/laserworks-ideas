const categories = [
  "CHRISTENING",
  "WEDDING",
  "SEASONAL",
  "BIRTHDAY & PARTIES",
  "PERSONALISED GIFTS",
  "SCHOOL & TEACHER GIFTS",
  "CORPORATE GIFTS",
  "HOME & DECOR",
  "LASER ENGRAVING",
  "INVITATIONS",
  "BALLOONS & CANDY CAKES",
  "CLOTHING & TOWELS"
];

const subcategories = {

  "CHRISTENING": [
    "HANGERS",
    "WISH BOOKS",
    "WISH FRAMES",
    "BAPTISM BOXES",
    "BAPTISM DECORATIONS",
    "BAPTISM ACCESSORIES",
    "CANDLES & CANDLE DECORATION",
    "PERSONALISED CHRISTENING GIFTS"
  ],

  "WEDDING": [
    "BRIDE & GROOM HANGERS",
    "WEDDING SIGNS",
    "WEDDING BOXES",
    "WEDDING FAVOURS",
    "WEDDING DECORATIONS",
    "WEDDING GUEST BOOKS",
    "WEDDING GIFTS"
  ],

  "SEASONAL": [
    "CHRISTMAS",
    "EASTER",
    "VALENTINE'S DAY",
    "MOTHER'S DAY",
    "FATHER'S DAY",
    "HALLOWEEN",
    "OTHER SEASONAL"
  ],

  "BIRTHDAY & PARTIES": [
    "BIRTHDAY DECORATIONS",
    "NAME & AGE SIGNS",
    "CAKE TOPPERS",
    "PARTY FAVOURS",
    "BIRTHDAY BOXES",
    "PHOTO FRAMES",
    "PERSONALISED BIRTHDAY GIFTS"
  ],

  "PERSONALISED GIFTS": [
    "NAMES & MONOGRAMS",
    "KEYCHAINS",
    "PHOTO FRAMES",
    "ACRYLIC FRAMES",
    "GIFT BOXES",
    "HOME DECOR GIFTS",
    "OTHER PERSONALISED GIFTS"
  ],

  "SCHOOL & TEACHER GIFTS": [
    "TEACHER GIFTS",
    "SCHOOL GIFTS",
    "BACK TO SCHOOL",
    "END OF SCHOOL",
    "CLASS GIFTS",
    "SCHOOL EVENT GIFTS"
  ],

  "CORPORATE GIFTS": [
    "CORPORATE BOXES",
    "CORPORATE GIFTS",
    "ENGRAVED PRODUCTS",
    "COMPANY LOGO GIFTS",
    "BUSINESS SIGNS",
    "EVENT & PROMOTIONAL GIFTS"
  ],

  "HOME & DECOR": [
    "WALL DECOR",
    "NAME SIGNS",
    "DOOR SIGNS",
    "PHOTO FRAMES",
    "HOME ACCESSORIES",
    "TABLE DECORATION",
    "CUSTOM DECORATIONS"
  ],

  "LASER ENGRAVING": [
    "WOOD ENGRAVING",
    "ACRYLIC ENGRAVING",
    "GLASS ENGRAVING",
    "METAL ENGRAVING",
    "MUGS",
    "FLASKS & GIFTS",
    "CUSTOM ENGRAVING"
  ],

  "INVITATIONS": [
    "CHRISTENING INVITATIONS",
    "WEDDING INVITATIONS",
    "BIRTHDAY INVITATIONS",
    "PARTY INVITATIONS",
    "SCHOOL INVITATIONS",
    "CUSTOM INVITATIONS"
  ],

  "BALLOONS & CANDY CAKES": [
    "BUBBLE BALLOONS",
    "BALLOON GIFTS",
    "BALLOON BOXES",
    "CANDY CAKES",
    "CANDY BOUQUETS",
    "PERSONALISED BALLOON GIFTS"
  ],

  "CLOTHING & TOWELS": [
    "T-SHIRTS",
    "HOODIES",
    "BABY CLOTHING",
    "PERSONALISED CLOTHING",
    "TOWELS",
    "BABY TOWELS",
    "EMBROIDERED TOWELS",
    "CUSTOM CLOTHING & TEXTILES"
  ]
};


/* =========================================================
   FEATURED PRODUCTS
   Only 4 photos will appear on the category preview.
   We can change the photos later without changing anything else.
   ========================================================= */

const featuredProducts = {

  "CHRISTENING": [
    "product-4.jpg",
    "product-9.jpg",
    "product-10.jpg",
    "product-11.jpg"
  ],

  "WEDDING": [
    "product-1.jpg",
    "product-15.jpg",
    "product-16.jpg",
    "product-17.jpg"
  ],

  "SEASONAL": [
    "product-2.jpg",
    "product-3.jpg",
    "product-18.jpg",
    "product-19.jpg"
  ],

  "BIRTHDAY & PARTIES": [
    "product-20.jpg",
    "product-21.jpg",
    "product-22.jpg",
    "product-23.jpg"
  ],

  "PERSONALISED GIFTS": [
    "product-6.jpg",
    "product-7.jpg",
    "product-8.jpg",
    "product-12.jpg"
  ],

  "SCHOOL & TEACHER GIFTS": [
    "product-24.jpg",
    "product-25.jpg",
    "product-26.jpg",
    "product-27.jpg"
  ],

  "CORPORATE GIFTS": [
    "product-17.jpg",
    "product-28.jpg",
    "product-29.jpg",
    "product-30.jpg"
  ],

  "HOME & DECOR": [
    "product-31.jpg",
    "product-32.jpg",
    "product-33.jpg",
    "product-34.jpg"
  ],

  "LASER ENGRAVING": [
    "product-35.jpg",
    "product-36.jpg",
    "product-37.jpg",
    "product-38.jpg"
  ],

  "INVITATIONS": [
    "product-39.jpg",
    "product-40.jpg",
    "product-41.jpg",
    "product-42.jpg"
  ],

  "BALLOONS & CANDY CAKES": [
    "product-43.jpg",
    "product-44.jpg",
    "product-45.jpg",
    "product-46.jpg"
  ],

  "CLOTHING & TOWELS": [
    "product-47.jpg",
    "product-48.jpg",
    "product-49.jpg",
    "product-50.jpg"
  ]
};


/* =========================================================
   ALL PRODUCTS
   ========================================================= */

const products = [

  {
    category: "CHRISTENING",
    subcategory: "HANGERS",
    name: "Christening Hanger",
    description: "Personalised hanger for a special christening.",
    price: "ASK FOR QUOTATION",
    images: ["product-10.jpg"]
  },

  {
    category: "CHRISTENING",
    subcategory: "WISH BOOKS",
    name: "Wish Book",
    description: "Personalised wish book for beautiful memories.",
    price: "ASK FOR QUOTATION",
    images: ["product-11.jpg"]
  },

  {
    category: "CHRISTENING",
    subcategory: "BAPTISM ACCESSORIES",
    name: "Christening Accessories",
    description: "Personalised christening accessories and decorations.",
    price: "ASK FOR QUOTATION",
    images: ["product-4.jpg"]
  },

  {
    category: "CHRISTENING",
    subcategory: "WISH FRAMES",
    name: "Wishes Frame",
    description: "Beautiful personalised frame for wishes.",
    price: "ASK FOR QUOTATION",
    images: ["product-9.jpg"]
  },


  {
    category: "WEDDING",
    subcategory: "BRIDE & GROOM HANGERS",
    name: "Groom & Bride Hanger",
    description: "Personalised hanger for the groom and bride.",
    price: "ASK FOR QUOTATION",
    images: ["product-1.jpg"]
  },

  {
    category: "WEDDING",
    subcategory: "WEDDING SIGNS",
    name: "Wedding Signs",
    description: "Personalised signs for weddings and special occasions.",
    price: "ASK FOR QUOTATION",
    images: ["product-15.jpg"]
  },

  {
    category: "WEDDING",
    subcategory: "WEDDING FAVOURS",
    name: "Wedding Favour Boxes",
    description: "Personalised boxes for weddings and special events.",
    price: "ASK FOR QUOTATION",
    images: ["product-16.jpg"]
  },


  {
    category: "PERSONALISED GIFTS",
    subcategory: "KEYCHAINS",
    name: "Personalised Keychain",
    description: "Handmade personalised keychain.",
    price: "ASK FOR QUOTATION",
    images: ["product-7.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "KEYCHAINS",
    name: "Personalised Keychain",
    description: "Cute handmade personalised keychain.",
    price: "ASK FOR QUOTATION",
    images: ["product-8.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "ACRYLIC FRAMES",
    name: "Acrylic Song Frame",
    description: "Personalised acrylic frame featuring your favourite song.",
    price: "ASK FOR QUOTATION",
    images: ["product-12.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "PHOTO FRAMES",
    name: "Personalised Frame",
    description: "Beautiful personalised decorative frame.",
    price: "ASK FOR QUOTATION",
    images: ["product-6.jpg"]
  },


  {
    category: "CORPORATE GIFTS",
    subcategory: "CORPORATE BOXES",
    name: "Corporate Gift Box",
    description: "Customised gifts and products for businesses.",
    price: "ASK FOR QUOTATION",
    images: ["product-17.jpg"]
  }

];
