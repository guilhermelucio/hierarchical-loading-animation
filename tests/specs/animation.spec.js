describe('Hierarchical Loading Animation', function(){
	
	var Animation;

	beforeEach(function(){
		Animation = new HierarchicalLoadingAnimation;
	});

	it('Testing the function that changes the value of the property interval', function(){
		Animation.setInterval(700);
		expect(Animation.getInterval()).toBe(700);
	});

	it('Testing the function that returns the box elements', function() {
		Animation.setInterval(800);

		createBoxesElement();
		addBoxElements(10);
		expect(Animation.locateElements().length).toBe(10);
		removeBoxElements();
	});

	function locateBoxesElement () {
		return document.querySelector('.boxes');
	}

	function createBoxesElement () {
		var boxes = document.createElement("div");
		boxes.classList.add("boxes");
		document.body.appendChild(boxes);
	}

	function createBoxElements (parent) {
		var box = document.createElement("div");
		box.classList.add("show");
		box.classList.add("box");
		parent.appendChild(box);
	}

	function removeBoxElements () {
		var container = locateBoxesElement();
		container.innerHTML('');
	}

	function addBoxElements (limit) {
		var container = locateBoxesElement();

		for (var i=0; i < 10; i++) {
			createBoxElements(container);
		}
	}
});