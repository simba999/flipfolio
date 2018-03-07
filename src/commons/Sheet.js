import React from "react";
import {
  ActionSheet,
  ActionSheetButton,
} from 'react-onsenui';

const Sheet = ({
  isOpenSheet,
  closeSheet,
  lists,
}) => (
  <ActionSheet
    isOpen={isOpenSheet}
    animation="default"
    onCancel={() => closeSheet()}
    isCancelable={true}
  >
  {
    lists.map((list) => (
      <ActionSheetButton
        {...list.props}
        key={list.title}
      >
        {list.title}
      </ActionSheetButton>
    ))
  }
  </ActionSheet>
);

export default Sheet;
