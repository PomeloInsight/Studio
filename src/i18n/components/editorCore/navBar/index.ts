import { en } from 'src/i18n/components/editorCore/navBar/en';
import { zhCN } from 'src/i18n/components/editorCore/navBar/zh-CN';
import { pack } from 'src/i18n/pack';

const check = () => zhCN;

const navBarI18n = pack<ReturnType<typeof check>>(zhCN, en);
export { navBarI18n };
