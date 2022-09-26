
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function do_owo() {
	while (true) {
		var qq = document.querySelectorAll('h1, h2, h3, h4, h5, li, td, span, a,:header,p,td,li,tw,span,input,btn,yt-formatted-string, div, strong, em');

		for (var i = 0; i < qq.length; i++) {
			if (qq[i].children.length > 0) continue;
			var txt = qq[i].innerHTML;
			// use regex to replace all instances of "r" with "w"
			txt = txt.replace(/r/g, "w");
			qq[i].innerHTML = txt;
		}

		await sleep(5000);
	}
}

document.onload = do_owo();