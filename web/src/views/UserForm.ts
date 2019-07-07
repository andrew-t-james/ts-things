class UserForm {
  constructor(public parent: Element) {}

  onButtonClick(): void {
    console.log('hi from button click');
  }

  eventsMaps(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover
    };
  }

  onHeaderHover(): void {
    console.log('hi from header');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input/>
        <button>click me</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMaps();
    for (let eventKey in eventsMap) {
      const [eventsName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventsName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}

export default UserForm;
