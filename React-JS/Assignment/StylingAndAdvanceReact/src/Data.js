import logo from "../src/assets/Images/Logo.png"
import img from "../src/assets/Images/hero.png"
import card1 from "../src/assets/Images/card1.png"
import card2 from "../src/assets/Images/card2.png"
import card3 from "../src/assets/Images/card3.png"
import card4 from "../src/assets/Images/card4.png"

import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa"

export const data = {
    nav: [
        {
            imglogo: logo
        },
        {
            link: "Home"
        },
        {
            link: "Shop"
        },
        {
            link: "Product"
        },
        {
            link: "Contact Us"
        },
        {
            icon: FaSearch,
        },
        {
            icon: FaUser,
        },
        {
            icon: FaShoppingBag
        }
    ],

    hero: [
        {
            bgimage: img
        },
        {
            content1: "Listen to"
        },
        {
            content2: "the"
        },
        {
            spancontent: " amazing"
        },
        {
            content3: "music sound."
        }
    ],

    card: [
        {
            heading: "New Arrival",
        },
        {
            card_img: card1,
            card_name: "Shark - Men's cabretta white golf glove ",
            card_price: "$19.00"
        },
        {
            card_img: card2,
            card_name: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
            card_price: "$24.99"
        },
        {
            card_img: card3,
            card_name: "G/FORE - Mens Left Glove Snow 2023 ",
            card_price: "$30.00"
        },
        {
            card_img: card4,
            card_name: "Utility Rover-R Double Strap Bag All Black - 2023",
            card_price: "$209.99"
        }
    ]
}