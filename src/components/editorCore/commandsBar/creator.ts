import { ICommandBarItemProps } from 'office-ui-fabric-react';
import { keys } from 'src/components/editorCore/commandsBar/keys';
import { commandsBarI18n } from 'src/i18n/components/editorCore/commandsBar';

const createItem = (key: string, icon?: string, items?: ICommandBarItemProps[]): ICommandBarItemProps => ({
  key,
  text: commandsBarI18n.label[key],
  iconOnly: !!icon,
  iconProps: (() => (icon ? { iconName: icon } : undefined))(),
  ariaLabel: commandsBarI18n.aria[key],
  subMenuProps: (() => (items ? { items } : undefined))(),
  tooltipHostProps: {},
  onClick: (_, item) => {
    console.log(item);
  },
});

function left(): ICommandBarItemProps[] {
  return [
    createItem(keys.save, 'Save'),
    createItem(keys.undo, 'Undo'),
    createItem(keys.redo, 'Redo'),

    createItem(keys.fontSizeBody, '', [
      createItem(keys.fontSizeH1),
      createItem(keys.fontSizeH2),
      createItem(keys.fontSizeH3),
      createItem(keys.fontSizeH4),
    ]),

    createItem(keys.fontFamilyDefault, '', [
      createItem(keys.fontFamilyNotoSansSC),
      createItem(keys.fontFamilyNotoSerifSC),
      createItem(keys.fontFamilySlabo),
      createItem(keys.fontFamilyUbuntuMono),
    ]),

    createItem(keys.fontBold, 'SemiboldWeight'),
    createItem(keys.fontItalic, 'italic'),
    createItem(keys.fontUnderLine, 'UnderLine'),
    createItem(keys.fontStrike, 'Strikethrough'),
    createItem(keys.fontTextColor, 'FontColor'),
    createItem(keys.fontBackGroundColor, 'BackgroundColor'),
    createItem(keys.fontLink, 'Link'),
    createItem(keys.fontClearFormat, 'ClearFormatting'),

    createItem(keys.alignLeft, 'AlignLeft', [
      createItem(keys.alignLeft, 'AlignLeft'),
      createItem(keys.alignCenter, 'AlignCenter'),
      createItem(keys.alignRight, 'AlignRight'),
      createItem(keys.alignJustify, 'AlignJustify'),
    ]),

    createItem(keys.indent, 'IncreaseIndent', [
      createItem(keys.indent, 'IncreaseIndent'),
      createItem(keys.outIndent, 'DecreaseIndent'),
    ]),

    createItem(keys.ol, 'BulletedList', [createItem(keys.ol, 'BulletedList'), createItem(keys.ul, 'NumberedList')]),

    createItem(keys.taskList, 'TaskList'),

    createItem(keys.quote, 'RightDoubleQuote'),
    createItem(keys.sub, 'Subscript'),
    createItem(keys.sup, 'Superscript'),
    createItem(keys.code, 'Code'),
    createItem(keys.hr, 'Remove'),
    createItem(keys.table, 'Table'),
    createItem(keys.image, 'FileImage'),
    createItem(keys.column, 'DoubleColumn'),
    createItem(keys.toc, 'Org'),
    createItem(keys.math, 'NumberField'),
  ];
}

function right(): ICommandBarItemProps[] {
  return [createItem(keys.search, 'Search'), createItem(keys.help, 'Help')];
}

export { left, right };
