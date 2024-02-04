const track = document.getElementById("image-track");

window.onmousedown = e => {
	track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
	if (track.dataset.mouseDownAt === "0") return;

	const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
		  maxDelta = window.innerWidth / 2;

	const percentage = (mouseDelta / maxDelta) * -100,
		  nextPercentage = Math.min(Math.max(parseFloat(track.dataset.prevPercentage) + percentage, -100), 0);
	
	track.dataset.percentage = nextPercentage;

	track.animate({
		transform: `translate(${nextPercentage}%, -50%)`
	}, { duration: 2000, fill: "forwards" })

	for (const img of track.getElementsByClassName("image")) {
		img.animate({
			objectPosition: `${nextPercentage + 100}% center`
		}, { duration: 2000, fill: "forwards" })
	}
}

window.onmouseup = () => {
	track.dataset.mouseDownAt = "0";
	track.dataset.prevPercentage = track.dataset.percentage;
}

window.addEventListener("keydown", scrollFunc);

function scrollFunc (e) {
	if (e.keyCode === 39) {
		console.log("anjink");
	} else if (e.keyCode === 37) {
		console.log("anjing");
	}
}