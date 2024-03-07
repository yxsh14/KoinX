export interface TrendingCoin {
	id: string
	symbol: string
	img: string
	price_change_percentage_24h: number
	graph: string
}

export const getTrendingCoins = async () => {
	const response = await fetch(
		'https://api.coingecko.com/api/v3/search/trending',
	)
	const data = await response.json()

	const trendingCoins: TrendingCoin[] = data.coins.map((token: any) => ({
		id: token.item.id,
		symbol: token.item.symbol,
		img: token.item.thumb,
		price_change_percentage_24h:
			Math.round(token.item.data.price_change_percentage_24h.inr * 100) / 100,
		graph: token.item.data.sparkline,
	}))

	return trendingCoins
}
