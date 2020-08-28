/* eslint-disable promise/always-return */
import React from 'react';
import { Product } from '../../interface/product';
import styles from './ListItem.module.css';

interface Props {
  data: Product;
}

export default class ListItem extends React.Component<
  Props,
  Record<string, unknown>
> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  toFixedPrice = (price: number) => {
    const money = price / 100.0;
    return money.toFixed(1);
  };

  render() {
    const { data } = this.props;
    return (
      <div className={styles.main}>
        <img alt="" src={data.author.avatar} className={styles.image} />
        <div className={styles.right}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.author}>
            <span className={styles.authorName}>{data.author.name}</span>
            <span className={styles.authorIntro}>{data.author.intro}</span>
          </div>
          <div className={styles.unit}>{data.unit}</div>
          <div className={styles.sale}>
            <div className={styles.price}>
              {`￥${this.toFixedPrice(data.price.sale)}`}
            </div>
            <div className={styles.order}>订阅</div>
          </div>
        </div>
      </div>
    );
  }
}
