function beautybox(pictures, params, crossParams) {

	document.querySelector('head').innerHTML += `<link href="https://fonts.googleapis.com/css2?family=Sen&display=swap" rel="stylesheet">`;

	class beautyboxContainer {
		constructor() {}

		//creates container for images
		appendContainer() {
			let beautyboxContainer = document.createElement('div');
			beautyboxContainer.classList.add('beautybox-container');

			//add custom styles
			$(beautyboxContainer).css('animationDuration', params.animationDuration + 's');
			$(beautyboxContainer).css('animationName', params.animationNameEntrance || "fadeIn");

			$('body').append(beautyboxContainer);

			//determing the type of closure
			if(params.closing === "tap" || params.closing == null) {
				$(document).on('click', (e)=>{
					if(e.target && e.target.classList.contains('beautybox-container')) {
						this.removeContainer();
					}
				});
			} else if(params.closing === "cross") {
				let cross = new beautyboxClose
				cross.appendClose();
			} else if(params.closing === "all") {
				$(document).on('click', (e)=>{
					if(e.target && e.target.classList.contains('beautybox-container')) {
						this.removeContainer();
					}
				});

				let cross = new beautyboxClose;
				cross.appendClose()
			}

		}

		//removes container of images
		removeContainer() {
			let beautyboxContainer = document.querySelector('.beautybox-container');
			beautyboxContainer.classList.add('beautybox-container-removed');
			$(beautyboxContainer).css('animationName', params.animationNameExit || "fadeOut");
			setTimeout(() => {
				beautyboxContainer.remove()
			}, params.animationDuration * 1000);
		}
	}

	class beautyboxClose {
		constructor() {}

		//creates cross for closing
		appendClose() {
			let beautyboxCross = document.createElement('div');
			$(beautyboxCross).attr('class', 'beautybox-close')
			$('.beautybox-container').append(beautyboxCross);
			
			$(beautyboxCross).text('×');

			$(beautyboxCross).on('mouseover', ()=>{
				$(beautyboxCross).css('cursor','pointer');
			});

			$(beautyboxCross).on('click', ()=>{
				container.removeContainer();
			});

		}
	}

	function beautyboxCarousel(images, current){
		//add block with carousel
		let carousel = document.createElement('div');
		carousel.classList.add('beautybox-carousel');
		$('.beautybox-container').append(carousel);

		//add all pictures in carousel
		images.forEach(img => {
			let clonedItem = $(img).clone();
			clonedItem.appendTo(carousel);
		});

		let carouselItems = carousel.querySelectorAll('img');

		if(params.counter) {
			setCounter(0, carouselItems.length);
		}

		carouselItems.forEach((item, i)=>{
			item.classList.add('beautybox-slide');
			carouselItems[current].classList.add('beautybox-slide-active');
		});

		//switching of images
		if(params.switching == 'click' || params.switching == null) {
			carouselItems.forEach((item, i)=>{
				$(item).on('click', ()=>{
					if(i < carouselItems.length-1) {
						$(item).attr('class', 'beautybox-slide');
						$(item).css('animationDuration', '0.7s');

						$(carouselItems[i+1]).attr('class', 'beautybox-slide-active');
						$(carouselItems[i+1]).css('animation-name', params.slideEntrance);
						$(carouselItems[i+1]).css('animation-duration', params.slideEntranceDuration + 's');
					} else {
						$(item).attr('class', 'beautybox-slide');
						$(item).css('animationDuration', '0.7s');

						$(carouselItems[0]).attr('class', 'beautybox-slide-active');
						$(carouselItems[0]).css('animation-name', params.slideEntrance);
						$(carouselItems[0]).css('animation-duration', params.slideEntranceDuration + 's');
					}
					if(params.counter) {
						setCounter(n, carouselItems.length);
					}
				});
			});	
		} else if(params.switching == 'arrows') {
			//create switching arrows

			let arrowPrev = params.arrowPrev || `
				 <div class="beautybox-svg-wrapper">
					<?xml version="1.0" ?><svg id="blue_copy" style="enable-background:new 0 0 100 100;" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_4_copy"><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7   C27.852,25.902,29.798,24.778,31.356,25.677z"/><path d="M69.981,47.977l-38.625-22.3c-0.233-0.134-0.474-0.21-0.716-0.259l37.341,21.559c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-0.349,0.201-0.716,0.288-1.078,0.301c0.656,0.938,1.961,1.343,3.078,0.699l38.625-22.3   C71.538,51.124,71.538,48.876,69.981,47.977z"/><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7C27.852,25.902,29.798,24.778,31.356,25.677z" style="fill:none;stroke:#000000;stroke-miterlimit:10;"/></g></svg>
				</div>
			`,
				arrowNext = params.arrowNext || `
				<div class="beautybox-svg-wrapper">
					<?xml version="1.0" ?><svg id="blue_copy" style="enable-background:new 0 0 100 100;" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_4_copy"><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7   C27.852,25.902,29.798,24.778,31.356,25.677z"/><path d="M69.981,47.977l-38.625-22.3c-0.233-0.134-0.474-0.21-0.716-0.259l37.341,21.559c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-0.349,0.201-0.716,0.288-1.078,0.301c0.656,0.938,1.961,1.343,3.078,0.699l38.625-22.3   C71.538,51.124,71.538,48.876,69.981,47.977z"/><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7C27.852,25.902,29.798,24.778,31.356,25.677z" style="fill:none;stroke:#000000;stroke-miterlimit:10;"/></g></svg>
				</div>
			`;

			//previous
			$('.beautybox-container').prepend('<div class="beautybox-arrow-prev"></div>');
			$('.beautybox-arrow-prev').html(`${arrowPrev}`);

			//next
			$('.beautybox-container').append('<div class="beautybox-arrow-next"></div>');
			$('.beautybox-arrow-next').html(`${arrowNext}`);

			let n = 0;
			$('.beautybox-arrow-prev').on('click', ()=>{
				if(n >= 1) {
					$(carouselItems[n]).attr('class', 'beautybox-slide');
					$(carouselItems[n]).css('animationDuration', '0.7s');

					$(carouselItems[n-1]).attr('class', 'beautybox-slide-active');
					$(carouselItems[n-1]).css('animation-name', params.slideEntrance);
					$(carouselItems[n-1]).css('animation-duration', params.slideEntranceDuration + 's');
					n--;
				} else {
					if(params.infinite) {
						n = carouselItems.length-1;
						$(carouselItems[0]).attr('class', 'beautybox-slide');
						$(carouselItems[0]).css('animationDuration', '0.7s');

						$(carouselItems[n]).attr('class', 'beautybox-slide-active');
						$(carouselItems[n]).css('animation-name', params.slideEntrance);
						$(carouselItems[n]).css('animation-duration', params.slideEntranceDuration + 's');
					}
				}
				if(params.counter) {
					setCounter(n, carouselItems.length);
				}
			});

			$('.beautybox-arrow-next').on('click', ()=>{
				if(n < carouselItems.length-1) {
					$(carouselItems[n]).attr('class', 'beautybox-slide');
					$(carouselItems[n]).css('animationDuration', '0.7s');

					$(carouselItems[n+1]).attr('class', 'beautybox-slide-active');
					$(carouselItems[n+1]).css('animation-name', params.slideEntrance);
					$(carouselItems[n+1]).css('animation-duration', params.slideEntranceDuration + 's');
					n++;
				} else {
					if(params.infinite) {
						n = 0;
						$(carouselItems[carouselItems.length-1]).attr('class', 'beautybox-slide');
						$(carouselItems[carouselItems.length-1]).css('animationDuration', '0.7s');

						$(carouselItems[n]).attr('class', 'beautybox-slide-active');
						$(carouselItems[n]).css('animation-name', params.slideEntrance);
						$(carouselItems[n]).css('animation-duration', params.slideEntranceDuration + 's');
					}
				}

				if(params.counter) {
					setCounter(n, carouselItems.length);
				}
			});
		} 

		function setCounter(current, max) {
			if($('.beautybox-counter').length < 1) {
				let counterBlock = document.createElement('div');
				$(counterBlock).attr('class', 'beautybox-counter');
				$('.beautybox-container').append(counterBlock);
				$(counterBlock).text(`${current+1} / ${max}`);
			} else {
				$('.beautybox-counter').text(`${current+1} / ${max}`);
			}

		}		

	}


	let container = new beautyboxContainer;

	pictures.forEach((img, i) => {
		$(img).on('mouseover', ()=>{
			$(img).css('cursor', 'pointer');
		});

  		img.addEventListener('click', ()=>{
  			if($('.beautybox-container').length < 1) {
				container.appendContainer(); 
				beautyboxCarousel(pictures, i);
			};
		});

	});

	if(params.closing === 'esc' || params.closing === 'all') {
		$(document).on('keydown', e => {

			if(e.which == 27 && $('.beautybox-container')) {
				container.removeContainer();
			};

		});
	}

};






let params = {
	animationNameEntrance: "fadeIn", //all animations
	animationNameExit: "fadeOut", //all animations
	slideEntrance: "bounceIn", //all animations
	animationDuration: 1,
	slideEntranceDuration: 1,
	switching: 'arrows', //click, arrows
	closing: "tap", //tap, cross, esc, all
	arrowPrev: `
		<div class="beautybox-svg-wrapper">
			<?xml version="1.0" ?><svg id="blue_copy" style="enable-background:new 0 0 100 100;" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_4_copy"><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7   C27.852,25.902,29.798,24.778,31.356,25.677z"/><path d="M69.981,47.977l-38.625-22.3c-0.233-0.134-0.474-0.21-0.716-0.259l37.341,21.559c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-0.349,0.201-0.716,0.288-1.078,0.301c0.656,0.938,1.961,1.343,3.078,0.699l38.625-22.3   C71.538,51.124,71.538,48.876,69.981,47.977z"/><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7C27.852,25.902,29.798,24.778,31.356,25.677z" style="fill:none;stroke:#000000;stroke-miterlimit:10;"/></g></svg>
		</div>
	`,
	arrowNext: `
		<div class="beautybox-svg-wrapper">
			<?xml version="1.0" ?><svg id="blue_copy" style="enable-background:new 0 0 100 100;" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_4_copy"><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7   C27.852,25.902,29.798,24.778,31.356,25.677z"/><path d="M69.981,47.977l-38.625-22.3c-0.233-0.134-0.474-0.21-0.716-0.259l37.341,21.559c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-0.349,0.201-0.716,0.288-1.078,0.301c0.656,0.938,1.961,1.343,3.078,0.699l38.625-22.3   C71.538,51.124,71.538,48.876,69.981,47.977z"/><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7C27.852,25.902,29.798,24.778,31.356,25.677z" style="fill:none;stroke:#000000;stroke-miterlimit:10;"/></g></svg>
		</div>
	`,
	counter: false,
	infinite: true
};




beautybox(document.querySelectorAll('.gallery-item'), params);