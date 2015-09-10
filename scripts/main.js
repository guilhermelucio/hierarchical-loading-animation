Object.prototype.eachElement = function (callback) {
	var elements = this;
	var counter = 0;
	
	(function animate (counter) {
		setTimeout(function () {
			callback(element[counter]);
			counter++;

			if (counter < element.length) {
				animate(counter);
			}
				
		},60);
	})(0);
}

var hierarchicalLoadingAnimation = function () {

	var Animation = this;

	/*
		Here we have the properties that will be gotten and the runAnimation function runs
	*/
	var properties = {
		selector: '.box',
		interval: 500
	}

	var elements = [];

	Animation.animate = function () {
		/*
			Entry point of the Class hierarchicalLoadingAnimation
			This function is responsible for getting a list of elements and run the animate function
			The first thing I want to get is a list of elements where I'm going to apply the effect
		*/
		var elements = Animation.locateElements();


		/*
			Animation function is just responsible for getting a list of elements and applying 
			the animation, caring that the interval value will be respect between the animations
		*/
		var animation = Animation.runAnimation();
	};

	Animation.locateElements = function (data) {
		/* 
			Return array with elements, based on a class passed by parameter or a default class box
		*/
		element = document.querySelectorAll(properties.selector);
	};

	Animation.setElementSelector = function (element) {
		/*
			Using a method setter to set the value of a private variable selector
		*/
		properties.element = element;
	};

	Animation.getElementSelector = function () {
		/*
			Using a method getter to get the value of a private variable selector and returning
		*/
		return properties.selector;
	};

	Animation.setInterval = function (interval) {
		/*
			Using a method setter to set the value of a private variable interval
			This variable will be the interval between the animations
		*/
		properties.interval = interval;
	}

	Animation.getInterval = function () {
		/*
			Using a method getter to get the value of a private variable inverval
		*/
		return properties.interval;
	}

	Animation.runAnimation = function () {
		element.eachElement(function(e){
			if (typeof e === 'object') 
				e.classList.add("show");
		});
	};
	Animation.animate();

};

window.onload = function (e) {
	var animate = new hierarchicalLoadingAnimation();
};