# Streaming Dot Pode

Easily configurable html-javascript prototype to publish web-series.

Must be executed on a server as streaming.js use fetching.

## USAGE
Add your video files in Resources/ and modify Resources/episodes.json :
- in `episodes` to matche there pathes and names
- in `params` to set episodes table and boxes styles

Example : 
```json
{
	"params":{
		"episodes_table-bg_color":"#000000",
		"episodes_table-margin_left":"20px",
		"episodes_table-margin_right":"20px",
		"episodes_table-margin_top":"0px",
		"episode_box-padding":"5px",
		"episode_box-border_color":"#111",
		"episode_box-width":"100px",
		"episode_box-height":"100px",
		"episode_box-bg_color":"black",
		"episode_box-font_color":"#e8e8e8",
		"episode_box-font_policy":"monospace",
		"episode_box-text_align":"left",
		"episode_box-font_size":"10px"
	},
	"episodes":[
		{
			"tag":"Ep1",
			"_name":"the bane",
			"path":"Resources/video1.mp4"
		},
		{
			"tag":"Ep2",
			"_name":"the cure",
			"path":"/path/to/video2.mov"
		},
		{
			"tag":"Ep3",
			"_name":"the return of the bane",
			"path":"path/to/etcetera..."
		},
		[...]
	]
}
```

# REND
![graphic rendering](https://github.com/lililayer/streaming_dot_pode/blob/main/rend.png?raw=true)
