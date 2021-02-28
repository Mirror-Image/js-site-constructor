import {block} from "../utils";
import {ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from "./blocks";

const typesMap = {
  text: TextBlock,
  title: TitleBlock,
  textColumn: TextColumnsBlock,
  image: ImageBlock,
}

export class Sidebar {
  constructor(selector, callback) {
    this.$el = document.querySelector(selector);
    this.update = callback;

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return [
      block('text'),
      block('title'),
      block('textColumn'),
      block('image'),
    ].join(' ');
  }

  add(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    const BlockConstructor = typesMap[type];
    const newBlock = new BlockConstructor(value, {styles});

    this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';
  }
}
