const categories = [
  "WEDDING",
  "CHRISTENING & NEWBORNS",
  "BIRTHDAY & PARTIES",
  "SEASONAL",
  "SCHOOL & TEACHER GIFTS",
  "CORPORATE GIFTS",
  "PERSONALISED GIFTS",
  "NAMES, MONOGRAMS & TOPPERS",
  "LASER ENGRAVING",
  "INVITATIONS & DESIGN",
  "BALLOONS, SOAPS & CANDY CAKES",
  "CLOTHING & TOWELS"
];

const subcategories = {
  "CHRISTENING & NEWBORNS": ["HANGERS","WISH BOOKS","WISHES FRAMES","CHRISTENING BOXES","CHRISTENING TABLE DECOR","CHRISTENING ACCESSORIES","CHRISTENING INVITATIONS","NEWBORN BOXES","BABY NAME DECORATIONS","BABY TOWELS","NEWBORN CAKE TOPPERS","CHRISTENING SOAPS"],
  "NAMES, MONOGRAMS & TOPPERS": ["NAMES","MONOGRAMS","CAKE TOPPERS","FLOWER TOPPERS","NAME & AGE TOPPERS","CUSTOMISED TOPPERS","TABLE DECOR","CUSTOMISED DECORATIONS"],
  "WEDDING": ["HANGERS","WISH BOOKS","WEDDING SIGNS","WEDDING BOXES","WEDDING TABLE DECOR","WEDDING ACCESSORIES","WEDDING GIFTS","WEDDING INVITATIONS"],
  "BIRTHDAY & PARTIES": ["BIRTHDAY GIFTS","PHOTO FRAMES","CANDY CAKES","BIRTHDAY INVITATIONS","PARTY FAVOURS","PARTY DECORATIONS"],
  "SEASONAL": ["CHRISTMAS","EASTER","VALENTINE'S DAY","MOTHER'S DAY","FATHER'S DAY","WOMEN'S DAY","HALLOWEEN","NEW YEAR","OTHER SEASONAL GIFTS"],
  "PERSONALISED GIFTS": ["KEYCHAINS","PHOTO FRAMES","PERSONALISED BOXES","ENGRAVED GIFTS","PIGGY BANKS","PENCIL CASES","SCHOOL GIFTS","DOOR HANGERS","MAGNETS","COASTERS","CUSTOMISED GIFTS"],
  "SCHOOL & TEACHER GIFTS": ["BACK TO SCHOOL","END OF SCHOOL","TEACHER GIFTS","EDUCATIONAL GIFTS","SCHOOL ACCESSORIES","CHRISTMAS GIFTS","EASTER GIFTS"],
  "CORPORATE GIFTS": ["CORPORATE BOXES","WINE BOXES","COASTERS","NAME TAGS","CORPORATE SIGNS","LOGO ENGRAVING","CORPORATE GIFTS","PROMOTIONAL GIFTS","CORPORATE EVENT GIFTS"],
  "LASER ENGRAVING": ["MUGS","THUMBLERS","WOOD ENGRAVING","ACRYLIC ENGRAVING","LEATHER ENGRAVING","GLASS ENGRAVING","METAL ENGRAVING WITH COLOUR COATING","CUSTOM ENGRAVING"],
  "INVITATIONS & DESIGN": ["CHRISTENING INVITATIONS","WEDDING INVITATIONS","BIRTHDAY INVITATIONS","PARTY INVITATIONS","SCHOOL INVITATIONS","SEASONAL INVITATIONS","LOGO DESIGN","FLYER DESIGN","BUSINESS CARD DESIGN","INVITATION DESIGN","BROCHURE DESIGN","POSTER DESIGN","MENU DESIGN","SOCIAL MEDIA DESIGN","LABELS & STICKERS","PACKAGING DESIGN","CUSTOM GRAPHIC DESIGN"],
  "BALLOONS, SOAPS & CANDY CAKES": ["BUBBLE BALLOONS","PERSONALISED SOAPS","CANDY CAKES","CANDY BOUQUETS","PERSONALISED BALLOON GIFTS"],
  "CLOTHING & TOWELS": ["T-SHIRTS","HOODIES","HATS","PERSONALISED CLOTHING","TOWELS","BABY TOWELS","EMBROIDERED TOWELS","CUSTOM CLOTHING & TEXTILES"]
};

const featuredProducts = {
  "CHRISTENING & NEWBORNS": ["product-4.jpg","product-10.jpg","product-11.jpg","product-9.jpg","product-6.jpg","product-22.jpg","product-40.jpg","product-29.jpg","product-30.jpg","product-31.jpg"],
  "NAMES, MONOGRAMS & TOPPERS": [],
  "WEDDING": ["product-1.jpg","product-15.jpg","product-41.jpg","wedding (1).jpg","wedding (2).jpg","wedding (3).jpg"],
  "BIRTHDAY & PARTIES": ["product-16.jpg","product-18.jpg","product-20.jpg","product-22.jpg","product-26.jpg","product-27.jpg","product-32.jpg","product-35.jpg","birthday.jpg","birthday (1).jpg","birthday (21).jpg","birthday (22).jpg","birthday (23).jpg","birthday (24).jpg","birthday (25).jpg","birthday (26).jpg","birthday (27).jpg","birthday (28).jpg","birthday (29).jpg","birthday (30).jpg","birthday (31).jpg","birthday (32).jpg","birthday (33).jpg","birthday (34).jpg","birthday (35).jpg","birthday (36).jpg","birthday (37).jpg","birthday (38).jpg","birthday (39).jpg","birthday (40).jpg","birthday (41).jpg","birthday (42).jpg","birthday (43).jpg","birthday (44).jpg"],
  "SEASONAL": ["product-5.jpg","product-2.jpg","product-21.jpg","product-3.jpg","product-7.jpg","product-8.jpg","seasonal.jpg"],
  "PERSONALISED GIFTS": ["product-12.jpg","product-41.jpg","product-6.jpg","product-7.jpg","product-8.jpg","product-19.jpg","product-37.jpg"],
  "SCHOOL & TEACHER GIFTS": ["product-25.jpg","product-28.jpg","product-33.jpg","product-34.jpg","product-38.jpg","product-39.jpg","school (1).jpg","school (2).jpg","school (3).jpg","school (4).jpg"],
  "CORPORATE GIFTS": ["product-13.jpg","product-14.jpg","product-17.jpg"],
  "LASER ENGRAVING": ["engraving.jpg"],
  "INVITATIONS & DESIGN": ["invitation.jpg"],
  "BALLOONS, SOAPS & CANDY CAKES": ["ballons (3).jpg","ballons (4).jpg","ballons (5).jpg","ballons (6).jpg","ballons (7).jpg","ballons (8).jpg","ballons (9).jpg","ballons (10).jpg","soaps (5).jpg","soaps (6).jpg","soaps (7).jpg","soaps (8).jpg","soaps (9).jpg","soaps (10).jpg","soaps (11).jpg"],
  "CLOTHING & TOWELS": ["product-23.jpg","product-24.jpg"]
};

const mainCategoryPhotos = {
  "CHRISTENING & NEWBORNS": "",
  "NAMES, MONOGRAMS & TOPPERS": "TOPPERS (17).jpg",
  "WEDDING": "wedding (1).jpg",
  "BIRTHDAY & PARTIES": "BIRTHDAY (6).jpg",
  "SEASONAL": "",
  "PERSONALISED GIFTS": "",
  "SCHOOL & TEACHER GIFTS": "SCHOOL (11).jpg",
  "CORPORATE GIFTS": "",
  "LASER ENGRAVING": "",
  "INVITATIONS & DESIGN": "",
  "BALLOONS, SOAPS & CANDY CAKES": "",
  "CLOTHING & TOWELS": ""
};

const products = [];
