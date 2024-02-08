import GenerateSitemap from "react-router-sitemap-maker";
import Routes from "../src/ruotes";

const sitemapData = await GenerateSitemap(Routes(), {
	baseUrl: "https://digesolutions.com",
	hashrouting: false,
	changeFrequency: "weekly"
});

sitemapData.toFile("./dist/sitemap.xml");