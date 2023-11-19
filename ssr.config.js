module.exports = {
	template: "./ssr.html",
	maxAge: 60 * 60 * 1000,
	config: {
		basePath: "https://mee6alternatives.com",
		name: "MEE6Alternatives",
		repo: "https://github.com/raxon/mee6alternatives",
		loadSidebar: true,
		loadNavbar: true,
		coverpage: false,
		maxLevel: 5,
		subMaxLevel: 4,
		mergeNavbar: true,
		search: {
			maxAge: 86400000,
			paths: "auto",
			placeholder: "Find bot for you",
			noData: "Not found",
			depth: 4,
			hideOtherSidebarContent: false,
			namespace: "Docsify-Guide",
		},
	},
};
