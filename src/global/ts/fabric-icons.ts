import { registerIcons } from '@uifabric/styling';
import * as fabricIconsMap from 'src/global/ts/fabric-icons.json';

const icons: { [key: string]: string } = {};
fabricIconsMap.glyphs.forEach(icon => {
  icons[icon.name] = String.fromCharCode(parseInt(icon.unicode, 16));
});

function initialFabricIcons() {
  registerIcons({
    fontFace: {
      fontFamily: `"FabricMDL2Icons"`,
    },
    icons,
  });
}

export { initialFabricIcons };
