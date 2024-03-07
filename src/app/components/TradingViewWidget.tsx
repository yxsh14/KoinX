'use client'
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, LegacyRef } from 'react'

function TradingViewWidget() {
	const isRendered = useRef<boolean>(false)
	const container: LegacyRef<HTMLDivElement> | undefined = useRef(null)

	useEffect(() => {
		if (!container.current) return
		if (container.current && !isRendered.current) {
			isRendered.current = true
			const script = document.createElement('script')
			script.src =
				'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
			script.type = 'text/javascript'
			script.async = true
			script.innerHTML = `
			{
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`

			container.current.appendChild(script)
		}
	}, [isRendered])

	return (
		<div
			className='tradingview-widget-container aspect-video'
			ref={container}
			style={{ height: '100%', width: '100%' }}>
			<div
				className='tradingview-widget-container__widget aspect-video '
				style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
		</div>
	)
}

export default memo(TradingViewWidget)
