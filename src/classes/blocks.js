import {col, css, row} from "../utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error("Method toHTML must be implemented!");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {tag, styles} = this.options;

    return row(col(`
      <${tag}>${this.value}</${tag}>
    `), css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {alt, styles, imageStyles} = this.options;
    const html = `<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}"/>`;

    return row(html, css(styles));
  }
}

export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const html = this.value.map(item => col(`<p>${item}</p>`))
    return row(html.join(" "), css(this.options.styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return row(col(`
    <p>${this.value}</p>
  `), css(this.options.styles));
  }
}
