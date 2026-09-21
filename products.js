const categories = [
  "WEDDING",
  "CHRISTENING & NEWBORNS",
  "BIRTHDAY & PARTIES",
  "SEASONAL",
  "SCHOOL & TEACHER GIFTS",
  "CORPORATE GIFTS",
  "PERSONALISED GIFTS",
  "NAMES, MONOGRAMS & TOPPERS",
  "CUSTOMISED FIGURES, CUT OUTS & LASER ENGRAVING",
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
  "CUSTOMISED FIGURES, CUT OUTS & LASER ENGRAVING": ["CUSTOMISED FIGURES","CUSTOMISED CUT OUTS","MUGS","THUMBLERS","WOOD ENGRAVING","ACRYLIC ENGRAVING","LEATHER ENGRAVING","GLASS ENGRAVING","METAL ENGRAVING WITH COLOUR COATING","CUSTOM ENGRAVING"],
  "INVITATIONS & DESIGN": ["CHRISTENING INVITATIONS","WEDDING INVITATIONS","BIRTHDAY INVITATIONS","PARTY INVITATIONS","SCHOOL INVITATIONS","SEASONAL INVITATIONS","LOGO DESIGN","FLYER DESIGN","BUSINESS CARD DESIGN","INVITATION DESIGN","BROCHURE DESIGN","POSTER DESIGN","MENU DESIGN","SOCIAL MEDIA DESIGN","LABELS & STICKERS","PACKAGING DESIGN","CUSTOM GRAPHIC DESIGN"],
  "BALLOONS, SOAPS & CANDY CAKES": ["BUBBLE BALLOONS","PERSONALISED SOAPS","CANDY CAKES","CANDY BOUQUETS","PERSONALISED BALLOON GIFTS"],
  "CLOTHING & TOWELS": ["T-SHIRTS","HOODIES","HATS","PERSONALISED CLOTHING","TOWELS","BABY TOWELS","EMBROIDERED TOWELS","CUSTOM CLOTHING & TEXTILES"]
};

const featuredProducts = {};

const mainCategoryPhotos = {
  "WEDDING": "WEDDING (10).jpg",
  "CHRISTENING & NEWBORNS": "CHRISTENING (2).jpg",
  "BIRTHDAY & PARTIES": "BIRTHDAY (6).jpg",
  "SEASONAL": "seasonal.jpg",
  "SCHOOL & TEACHER GIFTS": "SCHOOL (11).jpg",
  "CORPORATE GIFTS": "CORPORATE (10).jpg",
  "PERSONALISED GIFTS": "",
  "NAMES, MONOGRAMS & TOPPERS": "TOPPERS (2).jpg",
  "CUSTOMISED FIGURES, CUT OUTS & LASER ENGRAVING": "engraving.jpg",
  "INVITATIONS & DESIGN": "invitation.jpg",
  "BALLOONS, SOAPS & CANDY CAKES": "ballons (10).jpg",
  "CLOTHING & TOWELS": ""
};


const categoryPhotos = {
  "WEDDING": [
    "WEDDING (10).jpg",
    "WEDDING (2).jpg",
    "WEDDING (7).jpg",
    "WEDDING (8).jpg",
    "WEDDING (9).jpg",
    "wedding (1).jpg",
    "wedding (2).jpg",
    "wedding (3).jpg"
  ],
  "CHRISTENING & NEWBORNS": [
    "CHRISTENING (1).jpg",
    "CHRISTENING (10).jpg",
    "CHRISTENING (11).jpg",
    "CHRISTENING (12).jpg",
    "CHRISTENING (13).jpg",
    "CHRISTENING (14).jpg",
    "CHRISTENING (15).jpg",
    "CHRISTENING (2).jpg",
    "CHRISTENING (3).jpg",
    "CHRISTENING (4).jpg",
    "CHRISTENING (5).jpg",
    "CHRISTENING (6).jpg",
    "CHRISTENING (7).jpg",
    "CHRISTENING (8).jpg",
    "CHRISTENING (9).jpg",
    "NEWBORNS (1).jpg",
    "NEWBORNS (1).png",
    "NEWBORNS (2).jpg",
    "NEWBORNS (3).jpg",
    "NEWBORNS (4).jpg",
    "NEWBORNS (5).jpg",
    "NEWBORNS (6).jpg",
    "NEWBORNS (7).jpg",
    "NEWBORNS (8).jpg",
    "NEWBORNS (9).jpg"
  ],
  "BIRTHDAY & PARTIES": [
    "BIRTHDAY (2).jpg",
    "BIRTHDAY (3).jpg",
    "BIRTHDAY (33).jpg",
    "BIRTHDAY (36).jpg",
    "BIRTHDAY (37).jpg",
    "BIRTHDAY (38).jpg",
    "BIRTHDAY (39).jpg",
    "BIRTHDAY (5).jpg",
    "BIRTHDAY (6).jpg",
    "birthday (1).jpg",
    "birthday (21).jpg",
    "birthday (22).jpg",
    "birthday (23).jpg",
    "birthday (24).jpg",
    "birthday (25).jpg",
    "birthday (26).jpg",
    "birthday (27).jpg",
    "birthday (28).jpg",
    "birthday (29).jpg",
    "birthday (30).jpg",
    "birthday (31).jpg",
    "birthday (32).jpg",
    "birthday (33).jpg",
    "birthday (34).jpg",
    "birthday (35).jpg",
    "birthday (36).jpg",
    "birthday (37).jpg",
    "birthday (38).jpg",
    "birthday (39).jpg",
    "birthday (40).jpg",
    "birthday (41).jpg",
    "birthday (42).jpg",
    "birthday (43).jpg",
    "birthday (44).jpg",
    "birthday.jpg"
  ],
  "SEASONAL": [
    "seasonal.jpg"
  ],
  "SCHOOL & TEACHER GIFTS": [
    "SCHOOL (11).jpg",
    "SCHOOL (13).jpg",
    "SCHOOL (5).jpg",
    "SCHOOL (9).jpg",
    "school (1).jpg",
    "school (2).jpg",
    "school (3).jpg"
  ],
  "CORPORATE GIFTS": [
    "CORPORATE (10).jpg",
    "CORPORATE (11).jpg",
    "CORPORATE (12).jpg",
    "CORPORATE (13).jpg",
    "CORPORATE (5).jpg",
    "CORPORATE (6).jpg"
  ],
  "PERSONALISED GIFTS": [],
  "NAMES, MONOGRAMS & TOPPERS": [
    "TOPPERS (1).jpg",
    "TOPPERS (10).jpg",
    "TOPPERS (11).jpg",
    "TOPPERS (12).jpg",
    "TOPPERS (13).jpg",
    "TOPPERS (14).jpg",
    "TOPPERS (15).jpg",
    "TOPPERS (16).jpg",
    "TOPPERS (17).jpg",
    "TOPPERS (2).jpg",
    "TOPPERS (3).jpg",
    "TOPPERS (4).jpg",
    "TOPPERS (6).jpg",
    "TOPPERS (7).jpg",
    "TOPPERS (8).jpg",
    "TOPPERS (9).jpg"
  ],
  "CUSTOMISED FIGURES, CUT OUTS & LASER ENGRAVING": [
    "engraving.jpg"
  ],
  "INVITATIONS & DESIGN": [
    "invitation.jpg"
  ],
  "BALLOONS, SOAPS & CANDY CAKES": [
    "ballons (10).jpg",
    "ballons (11).png",
    "ballons (3).jpg",
    "ballons (4).jpg",
    "ballons (5).jpg",
    "ballons (6).jpg",
    "ballons (7).jpg",
    "ballons (8).jpg",
    "ballons (9).jpg",
    "soaps (10).jpg",
    "soaps (11).jpg",
    "soaps (5).jpg",
    "soaps (6).jpg",
    "soaps (7).jpg",
    "soaps (8).jpg",
    "soaps (9).jpg"
  ],
  "CLOTHING & TOWELS": []
}

const products = [];
