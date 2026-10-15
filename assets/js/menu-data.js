/**
 * LUX CENTRAL - OFFICIAL MENU DATABASE
 * Extracted directly from authentic printed menu board (PDF Page 6)
 * and authentic bakery & espresso bar displays (PDF Pages 1, 3, 4, 7, 8, 9, 10, 11).
 * 
 * 4402 N Central Ave, Phoenix, AZ 85012 | Call Counter: +1 (602) 327-1396
 */

const LUX_MENU_ITEMS = [
  // ==========================================
  // CATEGORY 1: SCRATCH BAKERY & PASTRIES
  // ==========================================
  {
    id: "bakery-scone-confetti",
    name: "Glazed Berry Confetti Scone",
    category: "bakery",
    categoryLabel: "Scratch Bakery & Pastries",
    price: 4.75,
    image: "assets/images/scone-berry-sprinkle.jpg",
    tags: ["House-Baked", "Pastry Chef Special", "Vegetarian"],
    culinarySummary: {
      howItsMade: "Slow-cut cold European butter worked by hand into organic pastry flour, folded with wild Oregon blueberries, gently baked to golden tender flakiness, and dipped in warm vanilla royal icing with celebration sprinkles.",
      flavorProfile: "Delicate buttery crumb with pockets of tart burst berries, sweet vanilla bean glaze, and a nostalgic crisp crunch.",
      ingredients: ["Cultured creamery butter", "Organic unbleached flour", "Wild mountain blueberries", "Pure vanilla bean glaze", "Artisan confetti sugar"]
    },
    featured: true
  },
  {
    id: "bakery-thumbprint-tart",
    name: "Strawberry Jam Shortbread Thumbprint",
    category: "bakery",
    categoryLabel: "Scratch Bakery & Pastries",
    price: 4.25,
    image: "assets/images/thumbprint-jam-cookie.jpg",
    tags: ["House-Baked", "Vegetarian", "Signature Item"],
    culinarySummary: {
      howItsMade: "Rich French sable shortbread dough rolled by hand, indented with care, baked until pale golden at the fluted crust, and generously filled with house-simmered strawberry-raspberry pectin-free preserves.",
      flavorProfile: "Melt-in-your-mouth tender butter cookie with bright, glossy fruit tang and delicate caramelized edges.",
      ingredients: ["Grade-AA churned butter", "Powdered sugar", "Vanilla bean paste", "House-made ripe strawberry conserve", "Fleur de sel"]
    },
    featured: true
  },
  {
    id: "bakery-morning-quiche",
    name: "Artisanal Farmhouse Quiche Slice",
    category: "bakery",
    categoryLabel: "Scratch Bakery & Pastries",
    price: 8.50,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["House-Baked", "Farm-Fresh", "Vegetarian"],
    culinarySummary: {
      howItsMade: "Deep-dish blind-baked butter crust filled with rich custard of local Hickman's farm eggs, heavy cream, caramelized sweet leeks, roasted forest mushrooms, and cave-aged Gruyère cheese.",
      flavorProfile: "Velvety, savory custard wrapped in an intensely flaky, golden-brown pastry crust with nutty, earthy notes.",
      ingredients: ["Local pasture eggs", "Alpine Gruyère cheese", "Caramelized leeks", "Cremini mushrooms", "Heavy cream", "Flaky butter crust"]
    },
    featured: true
  },
  {
    id: "bakery-chocolate-croissant",
    name: "Pain au Chocolat & Almond Croissant",
    category: "bakery",
    categoryLabel: "Scratch Bakery & Pastries",
    price: 5.25,
    image: "assets/images/bakery-counter-spread.jpg",
    tags: ["House-Baked", "French Laminated", "Vegetarian"],
    culinarySummary: {
      howItsMade: "Traditional 72-hour laminated French pastry rolled around two batons of 64% Valrhona dark chocolate, proofed overnight, baked crisp, and finished with toasted almond slivers and powdered sugar.",
      flavorProfile: "Ultra-crisp honeycomb exterior giving way to buttery, billowy layers and bittersweet melted chocolate.",
      ingredients: ["European style butter", "72-hour fermented dough", "Valrhona 64% dark chocolate", "Toasted California almonds", "Powdered sugar"]
    },
    featured: false
  },
  {
    id: "bakery-blueberry-muffin",
    name: "Wild Blueberry Streusel Muffin",
    category: "bakery",
    categoryLabel: "Scratch Bakery & Pastries",
    price: 4.50,
    image: "assets/images/bakery-counter-spread.jpg",
    tags: ["House-Baked", "Vegetarian"],
    culinarySummary: {
      howItsMade: "Buttermilk sour cream batter studded with double the normal ratio of sweet fresh blueberries, topped with coarse cinnamon butter streusel.",
      flavorProfile: "Tender, moist bakery crown with sweet-tart berry explosions and a crunchy cinnamon-brown-sugar crumble.",
      ingredients: ["Fresh wild blueberries", "Cultured sour cream", "Cinnamon brown sugar streusel", "Pure vanilla extract", "Unbleached flour"]
    },
    featured: false
  },
  {
    id: "bakery-strawberry-doughnut",
    name: "Strawberry Glazed Brioche Doughnut",
    category: "bakery",
    categoryLabel: "Scratch Bakery & Pastries",
    price: 4.25,
    image: "assets/images/bakery-counter-spread.jpg",
    tags: ["House-Baked", "Vegetarian"],
    culinarySummary: {
      howItsMade: "Light-as-air 24-hour fermented brioche dough fried in non-GMO sunflower oil, dipped warm in a reduction glaze of fresh strawberries and pure cane sugar.",
      flavorProfile: "Cloud-like chew with bright floral strawberry aroma and a crisp glossy sugar shell.",
      ingredients: ["Brioche yeast dough", "Fresh strawberry reduction glaze", "Farm butter", "Rainbow pearls", "Pure cane sugar"]
    },
    featured: false
  },
  {
    id: "bakery-chocolate-chunk-cookie",
    name: "Sea Salt Brown Butter Chocolate Chunk Cookie",
    category: "bakery",
    categoryLabel: "Scratch Bakery & Pastries",
    price: 3.75,
    image: "assets/images/bakery-counter-spread.jpg",
    tags: ["House-Baked", "Vegetarian", "Best-Seller"],
    culinarySummary: {
      howItsMade: "Nutty browned European butter folded with dark brown sugar, roasted vanilla, and generous hand-chopped slabs of bittersweet dark chocolate, rested for 36 hours before baking.",
      flavorProfile: "Crisp caramelized edge, chewy gooey center, rich toffee notes finished with crunchy Maldon sea salt crystals.",
      ingredients: ["Browned butter", "Belgian dark chocolate chunks", "Dark brown sugar", "Maldon sea salt flakes", "Madagascar vanilla"]
    },
    featured: false
  },
  {
    id: "bakery-pecan-snowball",
    name: "Powdered Pecan Snowball Cookies (3-Pack)",
    category: "bakery",
    categoryLabel: "Scratch Bakery & Pastries",
    price: 4.50,
    image: "assets/images/bakery-counter-spread.jpg",
    tags: ["House-Baked", "Vegetarian", "Nut-Rich"],
    culinarySummary: {
      howItsMade: "Roasted Arizona pecans finely ground and kneaded into creamed sweet butter and flour, baked tender, and rolled twice in confectioner's sugar while still warm.",
      flavorProfile: "Fragile, melt-away texture rich in toasted nut oils and sweet powdered sugar cloud.",
      ingredients: ["Arizona roasted pecans", "Sweet churned butter", "Confectioners sugar", "Pure vanilla extract", "Fine sea salt"]
    },
    featured: false
  },
  {
    id: "bakery-cinnamon-swirl-loaf",
    name: "Caramelized Cinnamon Swirl Loaf",
    category: "bakery",
    categoryLabel: "Scratch Bakery & Pastries",
    price: 5.00,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["House-Baked", "Vegetarian"],
    culinarySummary: {
      howItsMade: "Dense, moist quick loaf swirled with ribbons of roasted Saigon cinnamon, dark brown sugar, and toasted walnut crumble, drizzled with vanilla glaze.",
      flavorProfile: "Warm, fragrant cinnamon spice with deeply caramelized bottom crust and tender spiced crumb.",
      ingredients: ["Saigon cinnamon", "Buttermilk", "Dark brown sugar", "California walnuts", "Vanilla bean glaze"]
    },
    featured: false
  },

  // ==========================================
  // CATEGORY 2: ESPRESSO & CRAFT BREWS
  // ==========================================
  {
    id: "coffee-artisan-rosetta-latte",
    name: "Signature Artisan Rosetta Latte",
    category: "espresso",
    categoryLabel: "Espresso & Brews",
    price: 5.75,
    image: "assets/images/artisan-latte-art.jpg",
    tags: ["Barista Craft", "Direct Trade", "House Blend"],
    culinarySummary: {
      howItsMade: "Double shot of Lux's in-house roasted Central Blend extracted at 9 bars of pressure, paired with velvety micro-foamed whole milk (or organic oat) poured free-hand in our signature tulip/rosetta pattern.",
      flavorProfile: "Tasting notes of baker's chocolate, toasted praline, and honey blossom with a silky, creamy mouthfeel.",
      ingredients: ["In-house roasted arabica espresso", "Arizona dairy whole milk (or organic oat/almond)", "Purified balanced brew water"]
    },
    featured: true
  },
  {
    id: "coffee-single-origin-espresso",
    name: "Lux Central Double Espresso",
    category: "espresso",
    categoryLabel: "Espresso & Brews",
    price: 3.75,
    image: "assets/images/espresso-bar-machine.jpg",
    tags: ["Single-Origin", "Direct Trade", "Zero-Sugar"],
    culinarySummary: {
      howItsMade: "Pulled on our custom commercial multi-group Synesso machine. 20g dry dose extracted to 42g liquid over 28 seconds for balanced sweetness and radiant acidity.",
      flavorProfile: "Bright stone fruit, cacao nibs, candied orange peel, and persistent golden crema.",
      ingredients: ["Freshly ground small-batch roasted specialty coffee beans"]
    },
    featured: false
  },
  {
    id: "coffee-cortado-gibraltar",
    name: "Lux Cortado / Gibraltar",
    category: "espresso",
    categoryLabel: "Espresso & Brews",
    price: 4.50,
    image: "assets/images/espresso-bar-machine.jpg",
    tags: ["Barista Favorite", "Direct Trade"],
    culinarySummary: {
      howItsMade: "Double shot of rich espresso cut with an equal volume (2 oz) of lightly textured, warm milk served in a tempered Libbey fluted glass.",
      flavorProfile: "Bold espresso intensity softened with natural milk sweetness and velvety texture.",
      ingredients: ["Fresh espresso double shot", "2 oz steamed microfoam milk"]
    },
    featured: false
  },
  {
    id: "coffee-cold-brew-tap",
    name: "18-Hour Nitro Cold Brew On Tap",
    category: "espresso",
    categoryLabel: "Espresso & Brews",
    price: 5.25,
    image: "assets/images/baristas-craft-roasting.jpg",
    tags: ["House-Steeped", "Zero-Acidity", "Vegan"],
    culinarySummary: {
      howItsMade: "Coarsely ground Ethiopian and Colombian beans steeped in cold triple-filtered water for 18 hours, then charged with food-grade nitrogen for a cascading velvet pour.",
      flavorProfile: "Deep notes of dark cacao, ripe berry compote, ultra-smooth finish with natural sweetness and zero bitterness.",
      ingredients: ["Coarse roasted specialty coffee", "Triple-filtered cold mountain water", "Nitrogen draft infusion"]
    },
    featured: false
  },
  {
    id: "coffee-vanilla-shakerato",
    name: "Iced Vanilla Bean Shakerato",
    category: "espresso",
    categoryLabel: "Espresso & Brews",
    price: 6.25,
    image: "assets/images/baristas-craft-roasting.jpg",
    tags: ["Iced Drink", "House Syrup"],
    culinarySummary: {
      howItsMade: "Freshly pulled double espresso vigorously shaken with real Madagascar vanilla bean syrup, ice cubes, and a splash of sweet cream in a Boston cocktail shaker until frothy.",
      flavorProfile: "Icy, frothy, luxurious mouthfeel with aromatic vanilla orchid sweetness balancing dark roast notes.",
      ingredients: ["Double espresso", "House vanilla bean syrup", "Sweet cream", "Artisan ice cubes"]
    },
    featured: false
  },
  {
    id: "coffee-pourover-kalita",
    name: "Single-Origin Kalita Wave Pour-Over",
    category: "espresso",
    categoryLabel: "Espresso & Brews",
    price: 5.50,
    image: "assets/images/baristas-craft-roasting.jpg",
    tags: ["Pour-Over", "Single-Origin", "Vegan"],
    culinarySummary: {
      howItsMade: "Hand-poured using the flat-bottom Kalita Wave dripper. Pre-infusion bloom followed by measured concentric pours to extract pure floral aromatics.",
      flavorProfile: "Crisp jasmine tea, bergamot citrus, and honeyed apricot with radiant clarity.",
      ingredients: ["Freshly ground rotating micro-lot coffee", "205°F mineral-optimized brew water"]
    },
    featured: false
  },
  {
    id: "coffee-ceremonial-matcha",
    name: "Uji Ceremonial Matcha Latte",
    category: "espresso",
    categoryLabel: "Espresso & Brews",
    price: 6.25,
    image: "assets/images/artisan-latte-art.jpg",
    tags: ["Organic", "Antioxidant-Rich", "Vegan Option"],
    culinarySummary: {
      howItsMade: "First-harvest organic green tea leaves stone-ground in Uji, Kyoto. Whisked traditionally with bamboo chasen at 175°F and paired with steamed oat milk and agave nectar.",
      flavorProfile: "Vibrant emerald green color, velvety umami sweetness, clean vegetal notes, and sustained calm energy.",
      ingredients: ["First-harvest Uji ceremonial matcha", "Organic oat milk", "Touch of blue agave"]
    },
    featured: false
  },

  // ==========================================
  // CATEGORY 3: BREAKFAST & LUNCH KITCHEN
  // (From Official Central Lux Board - PDF Page 6)
  // ==========================================
  {
    id: "kitchen-dutch-pancake-sweet",
    name: "Dutch Pancake Sweet with Berries & Chantilly",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 12.50,
    image: "assets/images/scone-berry-sprinkle.jpg",
    tags: ["House-Baked", "Customer Favorite", "Vegetarian"],
    culinarySummary: {
      howItsMade: "Baked to order in an individual smoking-hot cast iron skillet. The egg-rich batter billows and rises tall in our high-temp oven, forming crispy golden ridges and a custardy tender center. Finished with fresh seasonal berries, powdered sugar, and house-made whipped Chantilly cream.",
      flavorProfile: "Crispy caramelized edges, warm custardy middle, bright berry sweetness, and airy vanilla cream.",
      ingredients: ["Farm eggs", "Whole milk", "Unbleached flour", "Whipped Chantilly cream", "Seasonal blackberries & strawberries", "Powdered sugar"]
    },
    featured: true
  },
  {
    id: "kitchen-dutch-pancake-savory",
    name: "Dutch Pancake Savory with Farm Vegetables",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 12.50,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["House-Baked", "Farm-Fresh", "Vegetarian"],
    culinarySummary: {
      howItsMade: "Cast-iron baked Dutch baby skillet baked with aromatic fresh herbs, caramelized zucchini, blistered farm tomatoes, roasted bell peppers, and melted Alpine fontina cheese.",
      flavorProfile: "Fluffy soufflé texture with roasted vegetable sweetness, herbaceous thyme, and savory cheese crust.",
      ingredients: ["Farm eggs", "Local market vegetables", "Fontina cheese", "Fresh thyme & oregano", "Whipped herb butter"]
    },
    featured: false
  },
  {
    id: "kitchen-moms-biscuits-gravy",
    name: "Mom's Buttermilk Biscuits & Country Gravy",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 10.00,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["House-Baked", "Comfort Classic", "Scratch Kitchen"],
    culinarySummary: {
      howItsMade: "Two towering scratch buttermilk biscuits split and smothered with slow-simmered country sausage cream gravy (or spicy chorizo gravy) cracked with black peppercorns. (Add two fried eggs for +$3.50).",
      flavorProfile: "Ultra-flaky golden butter layers paired with creamy, savory, peppery sausage richness.",
      ingredients: ["Scratch buttermilk biscuits", "House pork sausage or chorizo gravy", "Cracked black peppercorns", "Fresh parsley"]
    },
    featured: true
  },
  {
    id: "kitchen-farmers-market-scramble",
    name: "Farmer's Market Three Egg Scramble & Toast",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 12.50,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["Farm-Fresh", "Vegetarian", "Healthy Choice"],
    culinarySummary: {
      howItsMade: "Three local pasture eggs softly scrambled with morning-picked baby greens, heirloom tomatoes, zucchini ribbons, and sweet peppers. Served with house-baked levain or ciabatta toast and whipped butter.",
      flavorProfile: "Tender, silky curd with garden-fresh crunch and crusty sourdough goodness.",
      ingredients: ["3 Local farm eggs", "Market greens", "Heirloom tomatoes", "House levain toast", "Whipped sea salt butter"]
    },
    featured: false
  },
  {
    id: "kitchen-two-eggs-bacon-hash",
    name: "Two Eggs Any Style with Bacon & Toast",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 12.50,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["Breakfast Classic", "Protein-Rich"],
    culinarySummary: {
      howItsMade: "Two fresh eggs cooked to your preference (sunny, over easy, or scrambled), served with thick-cut applewood smoked bacon (or grilled tomato), house-baked levain toast, and rosemary veggie hash.",
      flavorProfile: "Rich savory breakfast perfection with crisp smoky bacon and golden buttered sourdough.",
      ingredients: ["2 Fresh farm eggs", "Applewood smoked bacon", "House levain toast", "Rosemary hash potatoes"]
    },
    featured: false
  },
  {
    id: "kitchen-egg-bacon-sandwich",
    name: "Egg & Bacon Breakfast Sandwich",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 7.50,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["Morning Favorite", "Grab-and-Go"],
    culinarySummary: {
      howItsMade: "Fried farm egg, thick-cut applewood bacon, vine-ripened farm tomato, and melted sharp aged cheddar on a toasted artisan English muffin.",
      flavorProfile: "Savory, sharp, smoky, with juicy tomato acidity and melted cheddar chew.",
      ingredients: ["Fried farm egg", "Applewood bacon", "Sharp cheddar", "Vine tomato", "Toasted English muffin"]
    },
    featured: false
  },
  {
    id: "kitchen-vegetarian-egg-bake",
    name: "Vegetarian Farm Egg Bake",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 10.50,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["Vegetarian", "Gluten-Free", "House-Baked"],
    culinarySummary: {
      howItsMade: "Crustless frittata baked slowly with whipped farm eggs, baby spinach, caramelized onions, roasted sweet peppers, and creamy goat cheese. (Add two strips bacon +$3.50).",
      flavorProfile: "Light, airy, creamy texture with herbaceous garden flavors and tangy goat cheese pockets.",
      ingredients: ["Farm eggs", "Baby spinach", "Caramelized sweet onions", "Chévre goat cheese", "Bell peppers"]
    },
    featured: false
  },
  {
    id: "kitchen-steak-cheese-sandwich",
    name: "Steak & Cheese Sandwich with Pickled Peppers",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 17.00,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["Chef Special", "Hearty Lunch", "House-Smoked"],
    culinarySummary: {
      howItsMade: "Tender seared flank steak strips, melted aged provolone and fontina cheese, house-pickled sweet-hot peppers on a toasted garlic-brushed artisan baguette. Served with crisp mixed greens salad.",
      flavorProfile: "Juicy charred beef savor, melted gooey cheese, and bright, tangy pepper snap on a crusty roll.",
      ingredients: ["Seared steak strips", "Melted fontina & provolone", "House pickled peppers", "Artisan baguette", "Mixed greens salad"]
    },
    featured: true
  },
  {
    id: "kitchen-bacon-cheeseburger",
    name: "Lux Bacon Cheeseburger on English Muffin",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 14.00,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["Signature Burger", "Chef Favorite"],
    culinarySummary: {
      howItsMade: "Fresh 8oz house-ground beef patty seared on cast iron to juicy perfection, topped with aged cheddar, crisp applewood bacon, fresh greens, farm tomato, and sliced red onion on a toasted artisan English muffin.",
      flavorProfile: "Deeply savory caramelized beef crust, smoky bacon, sharp melted cheese, and toasted muffin crunch.",
      ingredients: ["8oz House beef patty", "Aged sharp cheddar", "Applewood bacon", "English muffin", "Farm tomato & onion"]
    },
    featured: false
  },
  {
    id: "kitchen-grilled-chicken-sandwich",
    name: "Grilled Chicken & Gruyère Sandwich",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 13.50,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["Lunch Favorite", "Farm-Fresh"],
    culinarySummary: {
      howItsMade: "Herb-marinated grilled chicken breast, tart crisp apple slices, baby arugula, melted Gruyère cheese, and house honey mustard dressing on grilled sourdough.",
      flavorProfile: "Juicy roasted poultry paired with nutty melted cheese, crisp sweet apple, and peppery arugula.",
      ingredients: ["Marinated chicken breast", "Melted Gruyère", "Crisp sliced apple", "Wild arugula", "Honey mustard dressing"]
    },
    featured: false
  },
  {
    id: "kitchen-grilled-cheese-supreme",
    name: "Grilled Cheese Supreme with Soup",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 15.50,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["Ultimate Comfort", "Scratch Kitchen"],
    culinarySummary: {
      howItsMade: "Sourdough griddled with butter, layered with melted cheddar, fontina, roasted pulled chicken, ripe tomato, applewood bacon, sliced jalapeño, and fresh avocado. Accompanied by a cup of hot tomato bisque.",
      flavorProfile: "Decadent gooey cheese pull, spicy pepper warmth, smoky bacon, and rich avocado creaminess.",
      ingredients: ["Aged cheddar & fontina", "Roasted chicken", "Applewood bacon", "Fresh avocado", "Jalapeño", "Sourdough"]
    },
    featured: false
  },
  {
    id: "kitchen-mac-jalapeno-bacon",
    name: "Lux Mac 'n Cheese with Jalapeño & Bacon",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 12.50,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["House Special", "Comfort Food"],
    culinarySummary: {
      howItsMade: "Cavatappi pasta tossed in our velvet three-cheese cream sauce (aged cheddar, Gruyère, and fontina), baked with crispy applewood bacon crumbles and roasted jalapeño peppers.",
      flavorProfile: "Creamy, rich, bubbling cheese with a smoky kick and spicy pepper finish.",
      ingredients: ["Cavatappi pasta", "Three-cheese béchamel", "Crispy bacon", "Roasted jalapeños", "Herbed panko crust"]
    },
    featured: false
  },
  {
    id: "kitchen-spinach-strawberry-salad",
    name: "Spinach Strawberry & Candied Walnut Salad",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 12.00,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["Vegetarian", "Gluten-Free", "Fresh & Crisp"],
    culinarySummary: {
      howItsMade: "Tender baby spinach tossed with freshly sliced local strawberries, shaved red onion, crumbled Greek feta cheese, and house-candied walnuts in aged balsamic vinaigrette.",
      flavorProfile: "Crisp, sweet, tangy, and nutty with velvety feta creaminess.",
      ingredients: ["Baby spinach", "Sweet strawberries", "Greek feta", "Candied walnuts", "Red onion", "Aged balsamic vinaigrette"]
    },
    featured: false
  },
  {
    id: "kitchen-avocado-toast-salsa",
    name: "Smashed Avocado Toast with House Salsa",
    category: "kitchen",
    categoryLabel: "Breakfast & Lunch Kitchen",
    price: 6.50,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["Vegan", "Healthy Choice", "House-Baked"],
    culinarySummary: {
      howItsMade: "Thick slice of toasted house-baked levain sourdough smeared generously with ripe smashed Haas avocado, extra virgin olive oil, flaky sea salt, and served with our fire-roasted table salsa.",
      flavorProfile: "Crusty artisan bread, silky buttery avocado, and bright zesty roasted tomato salsa.",
      ingredients: ["House levain sourdough", "Haas avocado", "Fire-roasted salsa", "Maldon sea salt", "EVOO"]
    },
    featured: false
  },

  // ==========================================
  // CATEGORY 4: EVENING COCKTAILS & BITES
  // (PDF Page 3 Bar & PDF Page 6 Dinner Provisions)
  // ==========================================
  {
    id: "cocktail-espresso-martini",
    name: "The Central Avenue Espresso Martini",
    category: "cocktails",
    categoryLabel: "Evening Cocktails & Bites",
    price: 14.00,
    image: "assets/images/evening-cocktail-bar.jpg",
    tags: ["Cocktail Special", "Signature Drink", "Nightcap"],
    culinarySummary: {
      howItsMade: "Freshly pulled hot double shot of Lux Central espresso, Tito's handmade vodka, Mr. Black cold brew liqueur, and dark demerara syrup hard-shaken over ice and strained into a chilled coupe with three roasted coffee beans.",
      flavorProfile: "Lush velvety crema foam, deep roasted espresso intensity, subtle dark chocolate sweetness, and smooth spirit warmth.",
      ingredients: ["Fresh Lux espresso", "Tito's handmade vodka", "Mr. Black coffee liqueur", "Demerara syrup", "Whole coffee beans"]
    },
    featured: true
  },
  {
    id: "cocktail-desert-old-fashioned",
    name: "Smoked Desert Rye Old Fashioned",
    category: "cocktails",
    categoryLabel: "Evening Cocktails & Bites",
    price: 15.00,
    image: "assets/images/evening-cocktail-bar.jpg",
    tags: ["Craft Spirit", "Smoked In-House"],
    culinarySummary: {
      howItsMade: "Small-batch Arizona rye whiskey stirred with raw cane demerara syrup, Angostura and blood orange bitters, poured over a hand-carved crystal ice sphere and infused with fragrant mesquite wood smoke.",
      flavorProfile: "Warm spicy rye backbone, complex aromatic bitters, caramelized citrus zest, and lingering desert campfire smoke.",
      ingredients: ["Arizona craft rye whiskey", "Raw demerara syrup", "Blood orange bitters", "Smoked mesquite wood", "Luxardo cherry"]
    },
    featured: false
  },
  {
    id: "cocktail-prickly-pear-mezcalita",
    name: "Sonoran Prickly Pear Mezcalita",
    category: "cocktails",
    categoryLabel: "Evening Cocktails & Bites",
    price: 14.00,
    image: "assets/images/evening-cocktail-bar.jpg",
    tags: ["Southwest Native", "Artisanal Mezcal"],
    culinarySummary: {
      howItsMade: "Artisanal Oaxacan espadín mezcal shaken with vibrant organic Sonoran prickly pear puree, fresh-squeezed Persian lime juice, and agave nectar, rimmed with black volcanic salt.",
      flavorProfile: "Smoky earthiness balanced by electric neon-magenta fruit sweetness and sharp citrus tang.",
      ingredients: ["Espadín mezcal", "Sonoran prickly pear puree", "Fresh lime juice", "Organic agave", "Black volcanic salt"]
    },
    featured: false
  },
  {
    id: "cocktail-ny-strip-dinner",
    name: "Prime NY Strip Steak with Mashed Potatoes",
    category: "cocktails",
    categoryLabel: "Evening Cocktails & Bites",
    price: 28.00,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["Dinner Provision", "Prime Cut", "Hearty"],
    culinarySummary: {
      howItsMade: "10oz hand-cut USDA Prime NY Strip steak pan-basted with garlic, rosemary, and European butter. Served with roasted garlic Yukon Gold mashed potatoes and charred broccoli florets.",
      flavorProfile: "Rich, juicy, savory caramelized crust with melt-in-mouth tenderness and herb butter decadence.",
      ingredients: ["10oz USDA Prime NY strip", "Yukon Gold potatoes", "Charred broccoli", "Garlic herb butter"]
    },
    featured: false
  },
  {
    id: "cocktail-chicken-parm-risotto",
    name: "Grilled Chicken Parmesan Risotto",
    category: "cocktails",
    categoryLabel: "Evening Cocktails & Bites",
    price: 16.50,
    image: "assets/images/morning-pastry-quiche-display.jpg",
    tags: ["Dinner Provision", "Scratch Kitchen"],
    culinarySummary: {
      howItsMade: "Golden pan-roasted chicken breast served over a slow-stirred Arborio rice risotto infused with 24-month Parmigiano-Reggiano, white wine, and finished with sweet-tangy pickled cherry peppers.",
      flavorProfile: "Creamy, decadent, comforting cheese risotto with bright pickled pepper pop and succulent roasted chicken.",
      ingredients: ["Roasted chicken breast", "Arborio rice", "24-mo Parmigiano-Reggiano", "White wine", "Pickled peppers"]
    },
    featured: false
  },
  {
    id: "cocktail-artisan-charcuterie",
    name: "Midtown Artisan Charcuterie & Cheese Board",
    category: "cocktails",
    categoryLabel: "Evening Cocktails & Bites",
    price: 18.00,
    image: "assets/images/evening-cocktail-bar.jpg",
    tags: ["Shareable Board", "Local Selection"],
    culinarySummary: {
      howItsMade: "Rotating selection of Arizona goat cheeses, aged cheddar, sliced prosciutto di Parma, house-marinated olives, sweet fig preserve, pickled sweet peppers, and warm sliced levain toast.",
      flavorProfile: "Savory, nutty, creamy, salty, and sweet harmonious pairings made for evening conversation.",
      ingredients: ["Artisan goat & cow cheeses", "Prosciutto di Parma", "Fig preserves", "House pickled peppers", "Fresh warm levain toast"]
    },
    featured: false
  }
];

// Helper functions for easy filtering and access
function getFeaturedItems() {
  return LUX_MENU_ITEMS.filter(item => item.featured);
}

function getItemsByCategory(category) {
  if (!category || category === 'all') return LUX_MENU_ITEMS;
  return LUX_MENU_ITEMS.filter(item => item.category === category);
}

function getItemById(id) {
  return LUX_MENU_ITEMS.find(item => item.id === id);
}
