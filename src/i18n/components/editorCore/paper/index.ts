import { en } from 'src/i18n/components/editorCore/paper/en';
import { zhCN } from 'src/i18n/components/editorCore/paper/zh-CN';
import { pack } from 'src/i18n/pack';

const check = () => zhCN;

const paperI18n = pack<ReturnType<typeof check>>(zhCN, en);
export { paperI18n };
