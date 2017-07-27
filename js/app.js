class App {
	constructor() {
		this.switchToHello = this.switchToHello.bind(this);
		this.switchToWork = this.switchToWork.bind(this);
		this.switchToNotWork = this.switchToNotWork.bind(this);

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
	}
	switchToHello() {
		this.helloPanel.classList.remove('inactive');
		this.workPanel.classList.add('inactive');
		this.notWorkPanel.classList.add('inactive');
	}
	switchToWork() {
		this.workPanel.classList.remove('inactive');
		this.helloPanel.classList.add('inactive');
		this.notWorkPanel.classList.add('inactive');
	}
	switchToNotWork() {
		this.notWorkPanel.classList.remove('inactive');
		this.helloPanel.classList.add('inactive');
		this.workPanel.classList.add('inactive');
	}
}