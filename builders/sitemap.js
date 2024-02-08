import GenerateSitemap from "react-router-sitemap-maker";
import MyRoutes from "../src/components/MyRoutes";

const sitemapData = await GenerateSitemap(MyRoutes(), {
	baseUrl: "https://digesolutions.com",
	hashrouting: false,
	changeFrequency: "weekly"
});

sitemapData.toFile("./dist/sitemap.xml");