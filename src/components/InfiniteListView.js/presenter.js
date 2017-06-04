import React, { PureComponent } from 'react'
import RatioImageView from '../RatioImageView/RatioImageView'
import style from './InfiniteListView.css'

const ResultItem = ({ image, title }) =>
  <li className={style.itemContent}>
    <div>
      <a className={style.img} >
        <RatioImageView url={`${image}`} />
      </a>
      <div className={style.title}>
        <span>{title}</span>
      </div>
    </div>
  </li>

const List = ({items}) =>
  <ul>
    {
      items.map((v, i) =>
        <ResultItem key={`items-${i}`} {...v} />)
    }
  </ul>

export class InfiniteListView extends PureComponent {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <List />
      </div>
    )
  }
}
