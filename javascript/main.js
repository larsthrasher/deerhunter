
	//Gets div image and replaces with I frame.  Process repeated with each album page.
 	const openVideoMicro = () => {
		const videoIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/QNO_D6TikFI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

		document.getElementById("videoContainerMicro").innerHTML = videoIframe;
	}

	const openVideoCrypto = () => {
		const videoIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/0EuzC_eOdAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

		document.getElementById("videoContainerCrypto").innerHTML = videoIframe;
	}

	const openVideoHalcyon = () => {
		const videoIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/sJ3LeJMjgsk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

		document.getElementById("videoContainerHalcyon").innerHTML = videoIframe;
	}

	const openVideoMono = () => {
		const videoIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/A0ik0aoMbFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

		document.getElementById("videoContainerMono").innerHTML = videoIframe;
	}

	const openVideoFade = () => {
		const videoIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/UCVWrqxyt3Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

		document.getElementById("videoContainerFade").innerHTML = videoIframe;
	}

	const openVideoDis = () => {
		const videoIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/zG2TgCuMcjM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	
		document.getElementById("videoContainerDis").innerHTML = videoIframe;
	}

		const openVideoTour = () => {
		const videoIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/-hX829SeQHA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	
		document.getElementById("videoContainerTour").innerHTML = videoIframe;
	}

//Sets index beginning
	var slideIndex = 0; 
//function to access photos, based on index
let showDivs = (n)=> {
	let x = document.getElementsByClassName("mySlides")
	if(n > x.length - 1){
		slideIndex = 0;
	}
	if (n < 0){
		slideIndex = x.length - 1;
	}
	let i = 0;
	while(i < x.length){
		x[i].style.display = "none";
		i++;
		}
	x[slideIndex].style.display = "block";
}
// call function 
let plusDivs = (n)=> {
	showDivs(slideIndex += n);
}
showDivs(slideIndex);

  


