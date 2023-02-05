import { useEffect, useState } from 'react'
import PortfolioList from '../PortfolioList/PortfolioList'
import './portfolio.scss'
import {
  featuredPorfolio,
  webPortfolio,
  mobilePortfolio,
  desingnPortfolio,
  contentPortfolio
} from '../../data'

export default function Portfolio () {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])
  const list = [
    { id: 'featured', title: 'Featured' },
    { id: 'web', title: 'Web App' },
    { id: 'mobile', title: 'Mobile App' },
    { id: 'desing', title: 'Desing' },
    { id: 'content', title: 'Content' }
  ]

  useEffect(() => {
    switch (selected) {
      case 'feactured':
        setData(featuredPorfolio)
        break
      case 'web':
        setData(webPortfolio)
        break
      case 'mobile':
        setData(mobilePortfolio)
        break
      case 'desing':
        setData(desingnPortfolio)
        break
      case 'content':
        setData(contentPortfolio)
        break
      default:
        setData(featuredPorfolio)
    }
  }, [selected])
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map(d => (
          <div className='item'>
            <img
              src={d.img}
              alt=''
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
