import React from 'react'
import './App.css';
import CardsItem from './components/CardsItem';

export default function App() {

  const cardsList = [
    {
      id: 1,
      title: 'Data Scientist',
      description:
        'Data scientists gather and analyze large sets of structured and unstructured data',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
      className: 'card-1',
    },
    {
      id: 2,
      title: 'IOT Developer',
      description:
        'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
      className: 'card-2',
    },
    {
      id: 3,
      title: 'VR Developer',
      description:
        'A VR developer creates completely new digital environments that people can see.',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
      className: 'card-3',
    },
    {
      id: 4,
      title: 'ML Engineer',
      description:
        'Machine learning engineers feed data into models defined by data scientists.',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
      className: 'card-4',
    },
  ]

  return (
    <div className='cards-app-container'>
      <div className='cards-list-container'>
        <h1 className='heading'>Learn 4.0 Technologies</h1>
        <p className='description'>
          Get trained by alumni of IITs and top companies like Amazon, Microsoft,
          Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved
          in Product Development.
        </p>
        <ul className='cards-list'>
          {
            cardsList.map(data => (
              <CardsItem 
                title={data.title} 
                description={data.description} 
                imgUrl={data.imgUrl}
                className={data.className}
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}


/*const Name=['anil', 'sidhu', 'rizwi', 'moassir']
  return (
    <div className='App'>
      <h1>Handle Array with Lists</h1>
      {
        Name.map((data)=>
          <h1>{data}</h1>
        )
      }
    </div>
  )*/