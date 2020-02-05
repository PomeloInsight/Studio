import { i18n } from 'src/global/ts/i18n';

const en = {
  aria: {
    breadcrumb: 'Document full path information',
    moreLinks: 'View omitted document path information',
    pageName: 'current page name is {pageName}, click the input field to edit page name',
  },
  label: {
    pageName: 'click to edit page name',
    editState: 'last edited at',
  },
};

const zhCN = {
  aria: {
    breadcrumb: '文档的路径信息',
    moreLinks: '查看省略的文档路径信息',
    pageName: '当前页面名称为：{pageName}，点击编辑页面名称',
  },
  label: {
    pageName: '点击编辑文档名称',
    editState: '最后更改于',
  },
};

export const navBarI18n = i18n.PACK<typeof zhCN>({ [i18n.ZH_CN]: zhCN, [i18n.EN]: en });
