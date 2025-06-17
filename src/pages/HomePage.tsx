import type React from "react"
import BrowseByCategory from "../components/BrowseByCategory"
import FeaturedNews from "../components/FeaturedNews"
import Hero from "../components/Hero"

import Workshop from "../components/Workshop";

const HomePage: React.FC = () => {
    return (
        <div>
            <Hero />
            <FeaturedNews />
            <Workshop />
            <BrowseByCategory/>

        </div>
    )
}

export default HomePage
