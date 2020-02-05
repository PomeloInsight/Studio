import { i18n } from 'src/global/ts/i18n';

const en = {
  aria: {
    moreBlockActions: 'more block actions',
    deleteBlock: 'Delete Block',
    duplicateBlock: 'Duplicate Block',
    commentBlock: 'Comment Block',
    convertTo: 'Convert To',
  },
  label: {
    delete: 'Delete',
    duplicate: 'Duplicate',
    comment: 'Comment',
    convertTo: 'Convert To',
  },
};

const zhCN = {
  aria: {
    moreBlockActions: '更多块操作',
    deleteBlock: '删除当前块',
    duplicateBlock: '复制当前块',
    commentBlock: '对当前块添加评论',
    convertTo: '转换为',
  },
  label: {
    delete: '删除',
    duplicate: '复制',
    comment: '评论',
    convertTo: '转换为',
  },
};

export const paperI18n = i18n.PACK<typeof zhCN>({ [i18n.ZH_CN]: zhCN, [i18n.EN]: en });
