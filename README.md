# streaming_dot_pode
video serie viewer prototype

Easily configurable html-javascript prototype to publish web-series.

## USAGE
Add your video files in Resources/ and modify Resources/episodes.json to matche there pathes and names.

Example : 
```json
{
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
		}
    ...
	]
}

```
