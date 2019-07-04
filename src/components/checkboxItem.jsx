import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

export class PrefectureItem extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const {
      name,
      seq,
      selectedPrefList,
      changeSelectedPrefecture
    } = this.props;

    let index = -1;
    if(selectedPrefList !== undefined){
    for (let i = 0; i < selectedPrefList.length; i++) {
      const { seq, name } = selectedPrefList[i];
      if (this.props.seq == seq && this.props.name == name) {
        index = i;
            }
      }
    }

    return (
      <div className="prefecture-item__label">
        <Checkbox
          className="prefecture-item__checkbox"
          label={name}
          data-seq={seq}
          data-name={name}
          data-icon={"hoge"}
          labelPosition="right"
          onCheck={changeSelectedPrefecture}
          checked={index != -1}
        />
      </div>
    );
  };    
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  };
}
