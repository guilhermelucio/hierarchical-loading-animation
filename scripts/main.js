var hierarchicalLoadingAnimation = function () {

	var Animation = this;

	/*
		Here we have the properties that will be gotten and the runAnimation function runs
	*/
	var properties = {
		selector: '.box',
		interval: 500
	}

	/*
		Array of elements that contain the class specified at the variable "properties"
		Theses elements will receive the animation effect
	*/
	var elements = [];

	/*
		Entry point of the Class hierarchicalLoadingAnimation is the function below
		This function is responsible for getting a list of elements and run the animate function
		The first thing I want to get is a list of elements where I'm going to apply the effect
	*/
	Animation.animate = function () {
		
		/*
			The function below is responsible for find all elements at the page and saving them
			in an array variable "elements", a private variable used throughout the script
		*/
		Animation.locateElements();


		/*
			Animation function is just responsible for getting a list of elements and applying 
			the animation, caring that the interval value will be respect between the animations
		*/
		Animation.runAnimation();
	};

	Animation.locateElements = function (data) {
		/* 
			Return array with elements, based on a class passed by parameter or a default class box
		*/
		element = document.querySelectorAll(properties.selector);
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
		
		/*
			eachElement is a prototype of the root element Object, it's defined at the end of the document
			it's possible to pass a callback function to the prototype function, which will execute considering
			the callback function and the properties of the animation, coming from the private variable "properties"
		*/
		element.eachElement(function(e){
			if (typeof e === 'object') 
				e.classList.add("show");
		}, properties);
	
	};

	Animation.runReverseAnimation = function () {

		element.eachElement(function(e){
			if (typeof e === 'object')
				e.classList.remove("show");
		},properties);

	}
	
	// Calling the main function 
	Animation.animate();

};

window.onload = function (e) {
	var animate = new hierarchicalLoadingAnimation();
};

Object.prototype.eachElement = function (callback, properties) {
	var elements = this;
	var counter = 0;
	
	(function animate (counter) {
		setTimeout(function () {
			callback(element[counter]);
			counter++;

			if (counter < element.length) {
				animate(counter);
			}
				
		},properties.interval);
	})(0);
}