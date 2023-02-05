import './testimonials.scss'

export default function Testimonials () {
  const data = [
    {
      id: 1,
      name: 'Product 1',
      title: 'First Product',
      img: 'https://picsum.photos/221',
      icon: './assets/twitter.png',
      desc: 'High quality and durable for daily use.'
    },
    {
      id: 2,
      name: 'Product 2',
      title: 'Second Product',
      img: 'https://picsum.photos/222',
      icon: './assets/youtube.png',
      desc: 'Stylish and comfortable design perfect for any occasion.',
      featured:true
    },
    {
      id: 3,
      name: 'Product 3',
      title: 'Third Product',
      img: 'https://picsum.photos/223',
      icon: './assets/linkedin.png',
      desc: 'High performance and efficient for heavy usage.'
    }
  ]
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className='container'>
        {data.map(d => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className='top'>
              <img className='left' src='assets/right-arrow.png' alt='' />
              <img className='user' src={d.img} alt='' />
              <img className='right' src={d.icon} alt='' />
            </div>
            <div className='center'>
              {d.desc}
            </div>
            <div className='bottom'>
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
