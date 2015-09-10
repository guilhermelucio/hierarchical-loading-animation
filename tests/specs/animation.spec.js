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
		
		// Setup an interval at animations
		Animation.setInterval(800);

		prepareTests({
			box: {
				quantity: 10
			}
		});
		
		// Setup the elements variable at the Class HierarchicalLoadingAnimation to get the .box divs
		Animation.locateElements();
		
		// As we defined a number at the function addBoxElement, we expect that the value of elements available at the screen, to be the same we've defined
		expect(Animation.getArrayElements().length).toBe(10);
		
		// Removing the .box elements of the screen, because it's recommended to undo the changes made at the dom
		removeBoxElements();

	});

	it("Checking if the box elements are receiving the class .show correctly", function (){

		prepareTests({
			box: {
				quantity: 10
			}
		});

		Animation.locateElements();

		Animation.runAnimation();

		expect(document.querySelectorAll('.show').length).toBe(10);

		removeBoxElements();

	});

	function prepareTests (data) {
		createWrapperElement();
		addItem(data.box.quantity);
	}

	function findWrapper () {
		return document.querySelector('.boxes');
	}

	function createWrapperElement () {
		var boxes = document.createElement("div");
		boxes.classList.add("boxes");
		document.body.appendChild(boxes);
	}

	function createItem (parent) {
		var box = document.createElement("div");
		box.classList.add("show");
		box.classList.add("box");
		parent.appendChild(box);
	}

	function removeBoxElements () {
		var wrapper = document.querySelector('body');
		wrapper.innerHTML = '';
	}

	function addItem (limit) {
		var wrapper = findWrapper();

		for (var i=0; i < 10; i++) {
			createItem(wrapper);
		}
	}
});