/* streaming.pode :: code created by L10RE - github : https://github.com/lililayer */
const episodes_list = document.getElementById('episode_list');
const video_player = document.getElementById('video_player');
var video_sources = []
let currentVideoIndex = 0;

// json file with episodes data :
const episodes_json = './Resources/episodes.json'

// MAIN FUNCTION
function Load() {
    console.log("LOADING...");
    fetch(episodes_json)
        .then(response => response.json())
        .then(data => {
            // PARAMS
            params = data["params"];
            et_bg_color = params["episodes_table-bg_color"]
		    et_margin_left = params["episodes_table-margin_left"]
		    et_margin_right = params["episodes_table-margin_right"]
		    et_margin_top = params["episodes_table-margin_top"]
		    eb_padding = params["episode_box-padding"]
		    eb_border_color = params["episode_box-border_color"]
		    eb_width = params["episode_box-width"]
		    eb_height = params["episode_box-height"]
		    eb_bg_color = params["episode_box-bg_color"]
		    eb_font_color = params["episode_box-font_color"]
		    eb_font_policy = params["episode_box-font_policy"]
		    eb_text_align = params["episode_box-text_align"]
		    eb_font_size = params["episode_box-font_size"]
            // START CONTENT
            content = "<table style=\"background-color:"+et_bg_color+";margin-left:"+et_margin_left+";margin-right:"+et_margin_right+";margin-top:"+et_margin_top+";display:block;overflow:scroll;\"><tr>"
            // GET ALL EPISODES
            data["episodes"].forEach(episode => 
            {
                video_sources.push(episode.path);
                content += "<td style=\"padding:"+eb_padding+"\"><button type=\"button\" style=\"border-color:"+eb_border_color+";width:"+eb_width+";height:"+eb_height+";background-color:"+eb_bg_color+";\">"
                content += "<h4 style=\"font-size:"+eb_font_size+";color:"+eb_font_color+";font-family:"+eb_font_policy+";text-align:"+eb_text_align+";padding-bottom:0px;padding-top:0px;margin-top:0px;\">" + episode.tag + "</h4>"
                content += "<p style=\"font-size:"+eb_font_size+";padding-bottom:0px;padding-top:0px;color:"+eb_font_color+";font-family:"+eb_font_policy+";\">" + episode._name + "</p>"
                content += "</button></td>"
            });
        })
        .then(() => {
            content += "</tr></table>"
            // INSERT IN HTML
            episodes_list.insertAdjacentHTML('beforeend', content);
            // ADD EPISODES SELECTION
            console.log(video_sources);
            buttons = Array.from(episodes_list.getElementsByTagName('button'));
            for (let i = 0; i < buttons.length; i++) {
                console.log(i);
                buttons[i].onclick = function() {
                    video_player.src=video_sources[i];
                    console.log(i);
                    currentVideoIndex = i;
                    video_player.load();
                };
            };
        });
    return 0;
}

// AUTO PLAY
video_player.addEventListener('ended', function() {
    currentVideoIndex++;
    if (currentVideoIndex < video_sources.length) {
        video_player.src = video_sources[currentVideoIndex];
        video_player.play();
    }    
});

Load();
