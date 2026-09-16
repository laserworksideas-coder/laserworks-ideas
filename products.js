const categories = [
  "CHRISTENING",
  "WEDDING",
  "BIRTHDAY",
  "EDUCATIONAL",
  "SEASONAL",
  "CORPORATE",
  "PERSONALISED GIFTS",
  "ENGRAVING MUGS",
  "FOAMBOARDS",
  "INVITATIONS",
  "CLOTHING",
  "BALLOONS AND CANDY CAKES"
];


const subcategories = {

  "EDUCATIONAL": [
    "BACK TO SCHOOL",
    "END OF SCHOOL",
    "SEASONAL"
  ],

  "SEASONAL": [
    "CHRISTMAS",
    "EASTER",
    "VALENTINE'S",
    "MOTHER'S DAY",
    "FATHER'S DAY"
  ],

  "PERSONALISED GIFTS": [
    "TEACHERS",
    "SCHOOLS",
    "OTHERS"
  ]

};


const products = [

  /* =========================
     CHRISTENING
  ========================= */

  {
    category: "CHRISTENING",
    subcategory: "Hangers",
    name: "Baptism Hangers",
    description: "Personalised hanger for a special christening.",
    price: "ASK FOR QUOTATION",
    images: ["product-10.jpg"]
  },

  {
    category: "CHRISTENING",
    subcategory: "Wish Books",
    name: "Wish Book",
    description: "Personalised wish book for beautiful memories.",
    price: "ASK FOR QUOTATION",
    images: ["product-11.jpg"]
  },

  {
    category: "CHRISTENING",
    subcategory: "Baptism Accessories",
    name: "Baptism Dream Catcher Set",
    description: "Personalised christening accessories and decorations.",
    price: "ASK FOR QUOTATION",
    images: ["product-4.jpg"]
  },

  {
    category: "CHRISTENING",
    subcategory: "Frames",
    name: "Wishes Frame",
    description: "Beautiful personalised frame for wishes.",
    price: "ASK FOR QUOTATION",
    images: ["product-9.jpg"]
  },


  /* =========================
     WEDDING
  ========================= */

  {
    category: "WEDDING",
    subcategory: "Hangers",
    name: "Groom & Bride Hanger",
    description: "Personalised hanger for the groom and bride.",
    price: "ASK FOR QUOTATION",
    images: ["product-1.jpg"]
  },

  {
    category: "WEDDING",
    subcategory: "Wedding Signs",
    name: "Wedding Signs",
    description: "Personalised signs for weddings and special occasions.",
    price: "ASK FOR QUOTATION",
    images: ["product-15.jpg"]
  },

  {
    category: "WEDDING",
    subcategory: "Wedding Favours",
    name: "Wedding Favour Boxes",
    description: "Personalised boxes for weddings and special events.",
    price: "ASK FOR QUOTATION",
    images: ["product-16.jpg"]
  },


  /* =========================
     BIRTHDAY
  ========================= */

  {
    category: "BIRTHDAY",
    subcategory: "Birthday",
    name: "Birthday Creation",
    description: "Personalised handmade creation for birthdays.",
    price: "ASK FOR QUOTATION",
    images: ["product-26.jpg"]
  },


  /* =========================
     EDUCATIONAL
  ========================= */

  {
    category: "EDUCATIONAL",
    subcategory: "BACK TO SCHOOL",
    name: "Back to School",
    description: "Personalised creations for the new school year.",
    price: "ASK FOR QUOTATION",
    images: []
  },

  {
    category: "EDUCATIONAL",
    subcategory: "END OF SCHOOL",
    name: "End of School",
    description: "Personalised gifts and creations for the end of school.",
    price: "ASK FOR QUOTATION",
    images: []
  },

  {
    category: "EDUCATIONAL",
    subcategory: "SEASONAL",
    name: "Educational Seasonal",
    description: "Creative personalised products for school celebrations.",
    price: "ASK FOR QUOTATION",
    images: []
  },


  /* =========================
     SEASONAL
  ========================= */

  {
    category: "SEASONAL",
    subcategory: "CHRISTMAS",
    name: "Christmas",
    description: "Personalised Christmas creations and gifts.",
    price: "ASK FOR QUOTATION",
    images: []
  },

  {
    category: "SEASONAL",
    subcategory: "EASTER",
    name: "Easter",
    description: "Personalised Easter creations and gifts.",
    price: "ASK FOR QUOTATION",
    images: []
  },

  {
    category: "SEASONAL",
    subcategory: "VALENTINE'S",
    name: "Valentine's",
    description: "Personalised gifts and creations for Valentine's Day.",
    price: "ASK FOR QUOTATION",
    images: []
  },

  {
    category: "SEASONAL",
    subcategory: "MOTHER'S DAY",
    name: "Mother's Day",
    description: "Personalised gifts and creations for Mother's Day.",
    price: "ASK FOR QUOTATION",
    images: []
  },

  {
    category: "SEASONAL",
    subcategory: "FATHER'S DAY",
    name: "Father's Day",
    description: "Personalised gifts and creations for Father's Day.",
    price: "ASK FOR QUOTATION",
    images: []
  },


  /* =========================
     CORPORATE
  ========================= */

  {
    category: "CORPORATE",
    subcategory: "Corporate Gifts",
    name: "Corporate Gift Boxes",
    description: "Customised gifts and products for businesses.",
    price: "ASK FOR QUOTATION",
    images: ["product-17.jpg"]
  },


  /* =========================
     PERSONALISED GIFTS
  ========================= */

  {
    category: "PERSONALISED GIFTS",
    subcategory: "TEACHERS",
    name: "Teacher Gift",
    description: "Personalised gifts created especially for teachers.",
    price: "ASK FOR QUOTATION",
    images: []
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "SCHOOLS",
    name: "School Gift",
    description: "Personalised gifts and creations for schools.",
    price: "ASK FOR QUOTATION",
    images: []
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "OTHERS",
    name: "Personalised Gift",
    description: "Unique handmade personalised gift.",
    price: "ASK FOR QUOTATION",
    images: ["product-6.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "OTHERS",
    name: "Personalised Keychain",
    description: "Cute handmade personalised keychain.",
    price: "ASK FOR QUOTATION",
    images: ["product-7.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "OTHERS",
    name: "Personalised Keychain",
    description: "Handmade keychain personalised for you.",
    price: "ASK FOR QUOTATION",
    images: ["product-8.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "OTHERS",
    name: "Acrylic Song Frame",
    description: "Personalised acrylic frame featuring your favourite song.",
    price: "ASK FOR QUOTATION",
    images: ["product-12.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "OTHERS",
    name: "Mother's Day Photo Holder",
    description: "A beautiful personalised photo holder.",
    price: "ASK FOR QUOTATION",
    images: ["product-2.jpg"]
  },

  {
    category: "PERSONALISED GIFTS",
    subcategory: "OTHERS",
    name: "Mother's Day Decorative Frame",
    description: "Personalised decorative frame.",
    price: "ASK FOR QUOTATION",
    images: ["product-3.jpg"]
  },


  /* =========================
     ENGRAVING MUGS
  ========================= */

  {
    category: "ENGRAVING MUGS",
    subcategory: "Mugs",
    name: "Engraved Mugs",
    description: "Personalised engraved mugs.",
    price: "ASK FOR QUOTATION",
    images: []
  },


  /* =========================
     FOAMBOARDS
  ========================= */

  {
    category: "FOAMBOARDS",
    subcategory: "Foamboards",
    name: "Custom Foamboards",
    description: "Custom printed and personalised foamboards.",
    price: "ASK FOR QUOTATION",
    images: []
  },


  /* =========================
     INVITATIONS
  ========================= */

  {
    category: "INVITATIONS",
    subcategory: "Invitations",
    name: "Personalised Invitations",
    description: "Custom-designed invitations for your special occasion.",
    price: "ASK FOR QUOTATION",
    images: []
  },


  /* =========================
     CLOTHING
  ========================= */

  {
    category: "CLOTHING",
    subcategory: "Personalised Clothing",
    name: "Personalised Clothing",
    description: "Custom personalised clothing printing.",
    price: "ASK FOR QUOTATION",
    images: []
  },


  /* =========================
     BALLOONS AND CANDY CAKES
  ========================= */

  {
    category: "BALLOONS AND CANDY CAKES",
    subcategory: "Balloons",
    name: "Personalised Balloons",
    description: "Beautiful personalised balloons for special occasions.",
    price: "ASK FOR QUOTATION",
    images: []
  },

  {
    category: "BALLOONS AND CANDY CAKES",
    subcategory: "Candy Cakes",
    name: "Candy Cakes",
    description: "Creative candy cakes and personalised gifts.",
    price: "ASK FOR QUOTATION",
    images: []
  }

];
