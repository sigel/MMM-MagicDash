	modules: [
		{
			module: "alert",
		},
		{
			module: "MMM-Sounds2",
			config: {
				startupSound: true,
				alerSound: true,
				defaultDelay: 100,
				quietTimeStart: '23:00',      // 11pm
				quietTimeEnd: '07:00'       // 7am
			}
		},
		{
			module: "clock",
			position: "top_right",
			config: {
				displaySeconds: false
			}
		},
		{
			module: "weather",
			position: "top_left",
			config: {
				type: 'current',
				location: "Denver, US",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "",
				roundTemp: true
			}
		},
		{
			module: "weatherforecast",
			position: "top_left",
			config: {
				location: "Denver, US",
				LocationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "",
				maxNumberOfDays: 5,
				roundTemp: true,
				colored: true,
				fade: false
				}
		},
    {
     module: "MMM-iFrame",
     position: "top_left",
     config: {
        url: ["https://url.to.status/page/"],
        width: "600",
        height: "335",
				updateInterval: 0.5 * 60 * 600000
    	}
    },
		{
			module: "MMM-PlexNowPlaying",
			position: "top_right",
			config: {
				serverProtocol: "https",
				serverAddress: "plex.url.com",
				serverPort: 443,
				xPlexToken: ""
			}
		},
		{
			 module: "MMM-NowPlayingOnSpotify",
 			 position: "top_right",
 			 config: {
   			 clientID: "",
   			 clientSecret: "",
   			 accessToken: "",
   			 refreshToken: "",
 				 updatesEvery: 5
			 }
		},
		{
			module: "MMM-MyCalendar",
			position: "lower_third",
			config: {
				maximumEntries: 7,
				maxTitleLength: 50,
 				colored: true,
				fade: false,
				calendars: [
						{
							url: 'https://calendar.google.com/basic.ics',
							symbol: 'calendar',
							color: '#b11f1f',
						},
					],
				}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "TMZ",
						url: "https://www.tmz.com/rss.xml"
					},
					{
						title: "CNN",
						url: "http://rss.cnn.com/rss/cnn_topstories.rss"
					},
					{
						title: "Complex",
						url: "https://assets.complex.com/feeds/channels/all.xml"
					},
					{
						title: "The Verge",
						url: "https://www.theverge.com/rss/index.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-BackgroundSlideshow",
    			position: "fullscreen_below",
    			config: {
      				imagePaths: ["modules/MMM-BackgroundSlideshow/backgrounds"],
      				transitionImages: true,
							gradient: [ "rgba(0, 0, 0, 0.97) 0%", "rgba(0, 0, 0, .75) 40%", "rgba(0, 0, 0, .75) 80%", "rgba(0, 0, 0, 0.97) 100%" ],
							transitions: ["opacity", "flipX"],
      				randomizeImageOrder: true,
							slideshowSpeed: 60000,
							transitionSpeed: ".25s",
							transitionTimingFunction: "ease-in-out"
    			}
  		},
	]
