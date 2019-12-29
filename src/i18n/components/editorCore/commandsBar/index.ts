import { en } from 'src/i18n/components/editorCore/commandsBar/en';
import { zhCN } from 'src/i18n/components/editorCore/commandsBar/zh-CN';
import { pack } from 'src/i18n/pack';

const check = () => zhCN;

const commandsBarI18n = pack<ReturnType<typeof check>>(zhCN, en);
export { commandsBarI18n };
