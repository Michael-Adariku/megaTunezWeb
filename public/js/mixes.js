

function _(id){
	return document.getElementById(id);
}
function audioApp(){
	var audio = new Audio();
	var audio_folder = "/media/mixes/";
	var audio_ext = ".mp3";
	var audio_index = 1;
	var is_playing = false;
	var playingtrack;
	var trackbox = _("mixes");
	var tracks = {
	    "track1":["mixes 1", "1"],
		"track2":["mixes 2", "2"],
		"track3":["mixes 3", "3"]
	};
	for(var track in tracks){
		var tb = document.createElement("div");
		var pb = document.createElement("button");
		var tn = document.createElement("div");
		var buyBtn = document.createElement('button');
		 // Create anchor element.
		 var a = document.createElement('a'); 
		 // Create the text node for anchor element.
		 var link = document.createTextNode("Subscribe");
		 // Append the text node to anchor element.
		 a.appendChild(link); 
		 // Set the title.
		 a.title = "cick to subscribe"; 
		 // Set the href property.
		 a.href = "/"; 
		 // Append the anchor element to the body.
		//  document.body.appendChild(a);
		buyBtn.appendChild(a)

		 
		tb.className = "trackbar";
		pb.className = "playbutton";
		tn.className = "trackname";
		buyBtn.className= 'buybutton'
		tn.innerHTML = audio_index+". "+tracks[track][0];
		pb.id = tracks[track][1];
		pb.addEventListener("click", switchTrack);
		tb.appendChild(pb);
		tb.appendChild(tn);
		tb.appendChild(buyBtn)
		trackbox.appendChild(tb);
		audio_index++;
	}
	audio.addEventListener("ended",function(){
	    _(playingtrack).style.background = "url(/img/icons/play.png)";
		playingtrack = "";
		is_playing = false;
	});
	function switchTrack(event){
		if(is_playing){
		    if(playingtrack != event.target.id){
			    is_playing = true;
				_(playingtrack).style.background = "url(/img/icons/play.png)";
			    event.target.style.background = "url(/img/icons/pause.png)";
			    audio.src = audio_folder+event.target.id+audio_ext;
	            audio.play();
			} else {
			    audio.pause();
			    is_playing = false;
				event.target.style.background = "url(/img/icons/play.png)";
			}
		} else {
			is_playing = true;
			event.target.style.background = "url(/img/icons/pause.png)";
			if(playingtrack != event.target.id){
				audio.src = audio_folder+event.target.id+audio_ext;
			}
	        audio.play();
		}
		playingtrack = event.target.id;
	}
}
window.addEventListener("load", audioApp);

  
