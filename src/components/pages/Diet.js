import React from 'react'
import Header from '../Boilerplate/Header'
import Footer from '../Boilerplate/Footer'
import Blog from '../Boilerplate/Blog'



const content=[['http://s3.amazonaws.com/img.mynetdiary.com/blog/low-carb-diet.jpg',
"The Dukan Diet",
[
["Breakfast:",
"1. 1tbsp peanut butter",
"2. 1 wholemeal bagel",
"3. Small banana, sliced"],
["Lunch:",
"1. 1 large baked potato",
"2. 1 medium can of tuna",
"3. 1tbsp heaped reduced-fat mayonnaise",
"4. 2tbsp sweetcorn",
"5. Mixed salad"],
["Dinner:",
"1. 4 turkey meatballs",
"2. 125g homemade or bought tomato sauce",
"3. Wholemeal spaghetti (75g dry weight)",
"4. Green salad"]
]],
['https://cdn.shopify.com/s/files/1/1488/7742/articles/MEA-theAtkinsDiet-featureImage_1440x.progressive.jpg?v=1545156643',
"The Atkins Diet",
[
["Breakfast:",
"1. 1 egg",
"2. 1 thick slice wholemeal toast",
"3. 100g mushrooms",
"4. 1tsp oil"],
["Lunch:",
"1. 1 large wholemeal wrap",
"2. 2tbsp reduced-fat hummus",
"3. 100g roasted vegetables",
"4. Handful of rocket",
"5. Handful of mixed nuts and raisins"],
["Dinner:",
"1. 4 turkey meatballs",
"2. 125g homemade or bought tomato sauce",
"3. Wholemeal spaghetti (75g dry weight)",
"4. Green salad"]
]],
['https://www.naturalpathmed.com/wp-content/uploads/2017/11/blog-food-3.jpg',
"The HCG Diet",
[
["Breakfast:",
"1. 3 handfuls no-added-sugar muesli",
"2. 100ml semi-skimmed milk",
"3. Banana"],
["Lunch:",
"1. 15cm-long piece of baguette",
"2. 2tbsp passata",
"3. ½ pepper, chopped",
"4. 2 sliced mushrooms",
"5. 3tbsp reduced-fat grated cheese",
"6. 1tbsp sweetcorn",
"7. Mixed salad"],
["Dinner:",
"1. 1 lean beef fillet steak, grilled",
"2. 1 large baked potato",
"3. 80g baby sweetcorn",
"4. 80g mangetout"]
]],
['https://thefederal.com/file/2019/11/healthy-products-for-paleo-diet-picture-id1162439553-696x444.jpg',
"The Paleo Diet",
[
["Breakfast:",
"1. 40g oats",
"2. 150ml plant-based drink (eg almond drink)",
"3. 1tbsp chia seeds",
"4. 80g raspberries (or frozen mixed berries)",
"5. 1tbsp almond butter"],
["Lunch:",
"1. 120g chicken tikka",
"2. Tomato and red onion slices",
"3. Handful of baby spinach",
"4. 1tsp reduced-fat mayonnaise"],
["Dinner:",
"1. 1 cooked salmon fillet",
"2. 75g wholewheat pasta (dry weight)",
"3. 2tbsp peas",
"4. 60g broccoli",
"5. 60g green beans",
"6. 1tbsp medium-fat soft cheese",
"7. 1tbsp milk",
"8. Chilli and chives to taste"]
]],
['https://cdn.shopify.com/s/files/1/0152/8361/7892/articles/Vegan_diet_1024x.jpg?v=1552956936',
"The Vegan Diet",
[
["Breakfast:",
"1. ½ avocado",
"2. 1 egg, poached",
"3. 1 thick slice of seeded toast"],
["Lunch:",
"1. ½ carton chilled or canned shop-bought tomato soup",
"2. 2 thick slices wholemeal bread",
"3. 2 tbsp grated mozzarella",
"4. 2 sliced mushrooms"],
["Dinner:",
"1. 1 chicken breast",
"2. ½ pepper",
"3. 1 small onion",
"4. 2 tsp oil for frying",
"5. fajita seasoning to taste",
"6. 2 medium wholemeal tortilla wraps",
"7. 1tbsp shop-bought salsa"]
]],
['https://i.pinimg.com/564x/9c/a8/ff/9ca8ffce9e5903564e9f85012d260dd2.jpg',
"The Ultra Low Diet",
[
["Breakfast:",
"1. Large handful of kale or spinach",
"2. 1 small banana",
"3. 2tbsp oats",
"4. 150ml (or to taste) plant-based drink (eg almond)",
"5. 1tbsp almond butter"],
["Lunch:",
"1. 1 large egg",
"2. 1tbsp reduced-fat mayonnaise",
"3. Handful of baby spinach",
"4. 1 large wholemeal bap",
"5. Cherry tomatoes",
"6. Cucumber sticks"],
["Dinner:",
"1. 1 cod fillet",
"2. 1 carrot",
"3. ½ pepper",
"4. A few mangetout, cut into thin strips",
"5. 1tsp reduced-salt soy sauce",
"6. 1tsp sesame oil",
"7. Ginger, chopped",
"8. Chilli, sliced",
"9. 60g wholegrain rice (dry weight)",
"10. Scoop of frozen yogurt (for dessert)"]
]],


]



export default function Cart() {
    return (
        <div>
            <Header/>
            {content.map((e)=>{return <Blog img={e[0]} heading={e[1]} content={e[2]} />})}
            <Footer/>
        </div>
    )
}