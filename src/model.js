import image from "./assets/turkey.jpg";
import {
  ImageBlock,
  TextBlock,
  TextColumnsBlock,
  TitleBlock
} from "./classes/blocks";

const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

export const model = [
  new TitleBlock("Test Title", {
    tag: "h2",
    styles: "padding: 1rem; background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(105,246,157,1) 0%, rgba(0,212,255,1) 100%); color: #fff; text-align: center; text-shadow: 2px 2px 5px black;"
  }),
  new ImageBlock(image, {
    styles: "padding 2rem 0;",
    alt: "my image",
    imageStyles: "width: 100%;"
  }),
  new TextColumnsBlock(["1 text", "2 text", "3 text", "4 text",], {
    styles: "padding: 1rem; background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(60,222,213,1) 78%);"
  }),
  new TextBlock(text, {
    styles: "padding: 1rem; background: linear-gradient(180deg, rgba(89,223,224,1) 0%, rgba(99,239,240,1) 51%, rgba(255,255,255,1) 100%); text-align: center;"
  }),
];
