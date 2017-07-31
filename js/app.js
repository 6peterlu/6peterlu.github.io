class App {
	constructor() {
		this.switchToHello = this.switchToHello.bind(this);
		this.switchToWork = this.switchToWork.bind(this);
		this.switchToNotWork = this.switchToNotWork.bind(this);
		this.checkKeyboardInput = this.checkKeyboardInput.bind(this);
		this.workSpanMouseover = this.workSpanMouseover.bind(this);
		this.workSpanMouseout = this.workSpanMouseout.bind(this);
		this.notWorkSpanMouseover = this.notWorkSpanMouseover.bind(this);
		this.notWorkSpanMouseout = this.notWorkSpanMouseout.bind(this);
		this.expandContent = this.toggleContent.bind(this);

		this.helloButton = document.querySelector("#tab-hello");
		this.workButton = document.querySelector("#tab-work");
		this.notWorkButton = document.querySelector("#tab-not-work");
		this.helloPanel = document.querySelector("#panel-hello");
		this.workPanel = document.querySelector("#panel-work");
		this.notWorkPanel = document.querySelector("#panel-not-work");

		const helloButton = document.querySelector("#tab-hello");
		helloButton.addEventListener("click", this.switchToHello);
		const workButton = document.querySelector("#tab-work");
		workButton.addEventListener("click", this.switchToWork);
		const notWorkButton = document.querySelector("#tab-not-work");
		notWorkButton.addEventListener("click", this.switchToNotWork);

		const workSpan = document.querySelector("#span-work");
		workSpan.addEventListener("mouseenter", this.workSpanMouseover);
		workSpan.addEventListener("mouseout", this.workSpanMouseout);

		const notWorkSpan = document.querySelector("#span-not-work");
		notWorkSpan.addEventListener("mouseenter", this.notWorkSpanMouseover);
		notWorkSpan.addEventListener("mouseout", this.notWorkSpanMouseout);

		const expandPanels = document.querySelectorAll("#expand-panel");
		console.log(expandPanels);
		for (const expandPanel of expandPanels) {
			console.log(expandPanel);
			expandPanel.addEventListener("click", this.toggleContent);
		}

		document.addEventListener('keypress', this.checkKeyboardInput);
	}
	switchToHello() {
		this.helloPanel.classList.remove('inactive');
		this.helloButton.classList.add('tab-hello-active');
		this.workPanel.classList.add('inactive');
		this.workButton.classList.remove('tab-work-active');
		this.notWorkPanel.classList.add('inactive');
		this.notWorkButton.classList.remove('tab-not-work-active');
	}
	switchToWork() {
		this.workPanel.classList.remove('inactive');
		this.workButton.classList.add('tab-work-active');
		this.helloPanel.classList.add('inactive');
		this.helloButton.classList.remove('tab-hello-active');
		this.notWorkPanel.classList.add('inactive');
		this.notWorkButton.classList.remove('tab-not-work-active');
	}
	switchToNotWork() {
		this.notWorkPanel.classList.remove('inactive');
		this.notWorkButton.classList.add('tab-not-work-active');
		this.helloPanel.classList.add('inactive');
		this.helloButton.classList.remove('tab-hello-active');
		this.workPanel.classList.add('inactive');
		this.workButton.classList.remove('tab-work-active');
	}
	checkKeyboardInput(event) {
		switch(event.key) {
			case "1": this.switchToHello(); break;
			case "2": this.switchToWork(); break;
			case "3": this.switchToNotWork(); break;
		}
	}
	workSpanMouseover() {
		this.workButton.classList.add('tab-work-active');
	}
	workSpanMouseout() {
		this.workButton.classList.remove('tab-work-active');
	}
	notWorkSpanMouseover() {
		this.notWorkButton.classList.add('tab-not-work-active');
	}
	notWorkSpanMouseout() {
		this.notWorkButton.classList.remove('tab-not-work-active');
	}
	toggleContent(event) {
		console.log("clicked");
		if(event.target.id === "expand-panel-title") {
			event.currentTarget.querySelector("#expand-panel-body").classList.toggle("inactive");
			event.currentTarget.querySelector("#expand-panel-title").classList.toggle("expand-panel-title-active");
			event.currentTarget.querySelector("#expand-panel-title").classList.toggle("expand-panel-title-inactive");
		}
	}
}