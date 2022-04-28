import React from 'react';
import InfiniteScroll from '../index';
type State = {
  data: number[];
  dataUpdated: boolean;
};
export default class WindowInfiniteScrollComponent extends React.Component<  {},  State> {
  state = {
    data: new Array(100).fill(1),
    dataUpdated: true,
  };

  next = () => {
    setTimeout(() => {
      const newData = [...this.state.data, new Array(100).fill(1)];
      this.setState({ data: newData });
    }, 2000);
  };

  setWorkflowUpdatedFalse() {
    this.setState({dataUpdated: false});
  }

  render() {
    return (
      <>
        <InfiniteScroll
          hasMore={true}
          next={this.next}
          loader={<h1>Loading...</h1>}
          dataUpdated={this.state.dataUpdated}
          setDataUpdated={this.setWorkflowUpdatedFalse}
          dataLength={this.state.data.length}
        >
          {this.state.data.map((_, i) => (
            <div
              key={i}
              style={{ height: 30, margin: 4, border: '1px solid hotpink' }}
            >
              #{i + 1} row
            </div>
          ))}
        </InfiniteScroll>
      </>
    );
  }
}
