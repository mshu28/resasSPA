import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as populationAction from '../actions/populationAction';
import * as getPrefectureList from '../actions/prefectureAction';
import { PrefectureItem } from '../components/checkboxItem';
import Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';
import "../App.css";
HighchartsMore(Highcharts);

class App extends Component{
  constructor(props) {
    super(props);
    this.changeSelectedPrefecture = this.changeSelectedPrefecture.bind(this);
    this.state = {
      selectedPrefList: [],
      chartOptions: initialChartOptions,
    }
  }
  componentDidMount() {
    this.props.getPrefectureList.getPrefectureList();
  }
  listToMatrix(list, elementsPerSubArray){
    var matrix = [],
      i,
      k;

    for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
        k++;
        matrix[k] = [];
      }

      matrix[k].push(list[i]);
    }

    return matrix;
  };

  changeSelectedPrefecture(e) {
    const { seq, name } = e.target.dataset;
    const item = {
      seq: seq,
      name: name,
    };
    let index = -1;

    for (let i = 0; i < this.state.selectedPrefList.length; i++) {
      const { seq, name } = this.state.selectedPrefList[i];
      if (item.seq == seq && item.name == name) {
        index = i;
      }
    }

    if (e.target.checked) {
      if (index == -1) {
        this.setState({
          selectedPrefList: [...this.state.selectedPrefList, item],
        });
      }
    } else if (index >= 0) {
      this.setState({
        selectedPrefList: this.state.selectedPrefList.filter(
          (item, i) => i !== index
        ),
      });
    }
  };
 

  render(){
    const dataList = this.props.prefectureList;
    if(dataList !== null) {
      const prefList = this.listToMatrix(dataList, 4);
    return(
      <div className="App">
        <div>
            <h1>
                都道府県
            </h1>
        </div>
        <div>
          {prefList.map((itemList, index) => (
            <div key={index} className="row">
            {itemList.map(item => (
                <PrefectureItem 
                  key={item.prefCode}
                  seq={item.prefCode}
                  name={item.prefName}
                  selectedPref={this.state.selectedPrefList}
                  changeSelectedPrefecture={this.changeSelectedPrefecture}
                />
              ))}
            </div>
          ))}
        </div>
        <HighchartsReact
        highcharts={Highcharts}
        constructorType={'chart'}
        options={this.state.chartOptions}
      />
      </div>
      );
    }else {
      return(
        <div>
          {"loading..."}
        </div>
      )
    }
  }
}

  function setChartOptions(state){
    const chartOptions = state.chartOptions;
    chartOptions.series = [
      {
        data: state.props[
          [data.year, data.value]
        ]
      }
    ]


  }

const initialChartOptions = {
  title: {
    text: "人口推移",
  },
  xAxis: {
    title: {
      text: "人口数",
    }
  },
  yAxis: {
    title: {
      text: "年度",
    }
  },
  series: [
    {
      data: [[100, 200], [200, 300], [300, 400]],
    },
  ]
}

function mapStateToProps(state) {
  return {
    prefectureList: state.prefectureReducer.result,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPrefectureList: bindActionCreators(getPrefectureList, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);