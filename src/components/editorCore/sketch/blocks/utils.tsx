import { ImageBlockData, ParagraphBlockData } from 'src/components/editorCore/sketch/blocks/definition';


function createTestData() {
  return [
    new ParagraphBlockData(),
    new ParagraphBlockData(),
    new ParagraphBlockData(),
    new ImageBlockData('https://s2.ax1x.com/2020/02/07/1cvaLQ.jpg'),
  ];
}


export { createTestData };
