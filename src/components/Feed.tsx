import { Box } from "@mui/material";
import Post from "./Post";
export type dish = {
    avatar: string,
    title: string,
    subheader: string,
    imageurl: string,
    description: string
}
const dishes: dish[] = [
    {
        avatar: "A",
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        imageurl: "https://mui.com/static/images/cards/paella.jpg",
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        avatar: "B",
        title: "Grilled Salmon with Dill Sauce",
        subheader: "June 21, 2017",
        imageurl: "https://mui.com/static/images/cards/salmon.jpg",
        description: "A simple yet elegant dish that’s perfect for summer dinners. Serve with steamed vegetables and rice."
    },
    {
        avatar: "C",
        title: "Classic Margherita Pizza",
        subheader: "March 9, 2018",
        imageurl: "https://mui.com/static/images/cards/pizza.jpg",
        description: "Fresh mozzarella, basil, and a perfect tomato sauce make this pizza a timeless classic."
    },
    {
        avatar: "D",
        title: "Beef Stroganoff",
        subheader: "October 5, 2019",
        imageurl: "https://mui.com/static/images/cards/beef.jpg",
        description: "Creamy, savory, and deeply satisfying. Serve over egg noodles or mashed potatoes."
    },
    {
        avatar: "E",
        title: "Thai Green Curry",
        subheader: "April 18, 2020",
        imageurl: "https://mui.com/static/images/cards/thaicurry.jpg",
        description: "A spicy coconut-based curry that’s packed with vegetables and aromatic herbs."
    },
    {
        avatar: "F",
        title: "Roast Chicken and Vegetables",
        subheader: "December 25, 2020",
        imageurl: "https://mui.com/static/images/cards/roastchicken.jpg",
        description: "A holiday favorite, this roast chicken comes with hearty root vegetables and fresh herbs."
    },
    {
        avatar: "G",
        title: "Vegetarian Lasagna",
        subheader: "July 12, 2021",
        imageurl: "https://mui.com/static/images/cards/lasagna.jpg",
        description: "Layers of vegetables, ricotta, and marinara make this a satisfying meatless meal."
    },
    {
        avatar: "H",
        title: "Tandoori Chicken",
        subheader: "August 29, 2021",
        imageurl: "https://mui.com/static/images/cards/tandoori.jpg",
        description: "Spicy, smoky, and deeply flavorful. Best served with naan and cucumber raita."
    },
    {
        avatar: "I",
        title: "Spaghetti Carbonara",
        subheader: "January 10, 2022",
        imageurl: "https://mui.com/static/images/cards/carbonara.jpg",
        description: "A creamy pasta dish made with eggs, cheese, pancetta, and pepper."
    },
    {
        avatar: "J",
        title: "Mediterranean Quinoa Salad",
        subheader: "May 3, 2023",
        imageurl: "https://mui.com/static/images/cards/quinoa.jpg",
        description: "A light and healthy dish packed with vegetables, olives, and feta cheese."
    }
];

const Feed = () => {
    return (
        <Box flex={4} p={2} gap={5} >
            {dishes.map((dish, index) => {
                return <Post key={index} card={dish} />
            })}
        </Box>
    );
}

export default Feed;