/* eslint-disable promise/always-return */
import React from 'react';
import { getListData } from '../utils/ajax';
import { Product } from '../interface/product';
import ListItem from '../components/list/ListItem';

interface State {
  listData: Array<Product>;
}
export default class Home extends React.Component<
  Record<string, unknown>,
  State
> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      listData: [],
    };
  }

  componentDidMount() {
    this.getListData();
  }

  getListData = () => {
    getListData()
      .then((result) => {
        const { data } = result.data;
        this.setState({
          listData: data,
        });
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };

  render() {
    const { listData } = this.state;
    return (
      <div>
        {listData.map((element, index) => {
          return <ListItem key={index.toString()} data={element} />;
        })}
      </div>
    );
  }
}
