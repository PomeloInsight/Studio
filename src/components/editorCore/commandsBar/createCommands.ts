import { ICommandBarItemProps } from 'office-ui-fabric-react';
import { commandKeys } from 'src/components/editorCore/commandsBar/commandKeys';
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
    createItem(commandKeys.save, 'Save'),
    createItem(commandKeys.undo, 'Undo'),
    createItem(commandKeys.redo, 'Redo'),

    createItem(commandKeys.fontSizeBody, '', [
      createItem(commandKeys.fontSizeH1),
      createItem(commandKeys.fontSizeH2),
      createItem(commandKeys.fontSizeH3),
      createItem(commandKeys.fontSizeH4),
    ]),

    createItem(commandKeys.fontFamilyDefault, '', [
      createItem(commandKeys.fontFamilyNotoSansSC),
      createItem(commandKeys.fontFamilyNotoSerifSC),
      createItem(commandKeys.fontFamilySlabo),
      createItem(commandKeys.fontFamilyUbuntuMono),
    ]),

    createItem(commandKeys.fontBold, 'SemiboldWeight'),
    createItem(commandKeys.fontItalic, 'italic'),
    createItem(commandKeys.fontUnderLine, 'UnderLine'),
    createItem(commandKeys.fontStrike, 'Strikethrough'),
    createItem(commandKeys.fontTextColor, 'FontColor'),
    createItem(commandKeys.fontBackGroundColor, 'BackgroundColor'),
    createItem(commandKeys.fontLink, 'Link'),
    createItem(commandKeys.fontClearFormat, 'ClearFormatting'),

    createItem(commandKeys.alignLeft, 'AlignLeft', [
      createItem(commandKeys.alignLeft, 'AlignLeft'),
      createItem(commandKeys.alignCenter, 'AlignCenter'),
      createItem(commandKeys.alignRight, 'AlignRight'),
      createItem(commandKeys.alignJustify, 'AlignJustify'),
    ]),

    createItem(commandKeys.indent, 'IncreaseIndent', [
      createItem(commandKeys.indent, 'IncreaseIndent'),
      createItem(commandKeys.outIndent, 'DecreaseIndent'),
    ]),

    createItem(commandKeys.ol, 'BulletedList', [
      createItem(commandKeys.ol, 'BulletedList'),
      createItem(commandKeys.ul, 'NumberedList'),
    ]),

    createItem(commandKeys.taskList, 'TaskList'),

    createItem(commandKeys.quote, 'RightDoubleQuote'),
    createItem(commandKeys.sub, 'Subscript'),
    createItem(commandKeys.sup, 'Superscript'),
    createItem(commandKeys.code, 'Code'),
    createItem(commandKeys.hr, 'Remove'),
    createItem(commandKeys.table, 'Table'),
    createItem(commandKeys.image, 'FileImage'),
    createItem(commandKeys.column, 'DoubleColumn'),
    createItem(commandKeys.toc, 'Org'),
    createItem(commandKeys.math, 'NumberField'),
  ];
}

function right(): ICommandBarItemProps[] {
  return [createItem(commandKeys.search, 'Search'), createItem(commandKeys.help, 'Help')];
}

export { left, right };
