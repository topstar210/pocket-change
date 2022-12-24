import react, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Card from './components/Card'

function App () {
  const earingArr = [
    {
      id: 1,
      title: '$0.00',
      description: 'total dividends earned',
      color: '#005972',
      bgColor: 'from-[#3bd4ff] to-[#9be9ff] bg-gradient-to-br'
    },
    {
      id: 2,
      title: '$0.00',
      description: 'initial stake after fees',
      color: '#87630a',
      bgColor: 'from-[#ffae3b] to-[#ffd89b] bg-gradient-to-bl'
    },
    {
      id: 3,
      title: '6.5%',
      description: 'earning daily (%)',
      color: '#c73407',
      bgColor: 'from-[#ff693b] to-[#ffb09b] bg-gradient-to-tr'
    },
    {
      id: 4,
      title: '$0.00',
      description: 'total dividends earned',
      color: '#0a7608',
      bgColor: 'from-[#44e340] to-[#9bff9d] bg-gradient-to-tl'
    }
  ]

  const [tagFlag, setTagFlag] = useState(true)

  return (
    <div className='font-fixedsys overflow-x-hidden'>
      <Navbar />

      <div className='relative w-full justify-center mt-5'>
        <img
          src='/images/background1.png'
          className='absolute z-10 w-full -mt-[45px] h-[1250px] sm:h-[1400px] md:h-[1400px] lg:h-[1030px] xl:h-[1230px] object-cover object-center '
          alt='first section'
        />
        <div className='relative z-10 mx-4'>
          <div className='container flex flex-wrap lg:flex-nowrap mx-auto justify-center lg:justify-around mb-16'>
            <img
              src='/images/gold.png'
              className='w-1/2 lg:w-1/3 mx-24 my-10  mx-auto'
              alt='gold'
            />

            <div className='w-full lg:w-1/2 justify-center lg:pt-[105px]'>
              <img
                src='/images/crown.png'
                className='mx-auto relative z-10'
                alt='crown'
              />
              <div className='relative flex justify-around rounded-full bg-[#281309] w-full mx-auto -mt-3 py-10 md:py-14'>
                <div className='text-[#ff6d00] w-fit text-center'>
                  <div className='uppercase text-xl lg:text-3xl'>tvl</div>
                  <div className='text-3xl lg:text-5xl'>53,151</div>
                </div>
                <div className='text-[#f0e6ab] w-fit text-center'>
                  <div className='uppercase text-xl lg:text-3xl'>tvl</div>
                  <div className='text-3xl lg:text-5xl'>2,151</div>
                </div>
                <div className='absolute border-l border-[#f2e7a7] -mt-2 ml-[62px]'>
                  <img
                    src='/images/shadowline.png'
                    className='h-24'
                    alt='shadow'
                  />
                </div>
              </div>
              <div className='text-center mt-8'>
                <div className='text-4xl text-[#813805] pl-[90px]'>
                  Stake Fee : <span className='lg:ml-10'>6%</span>
                </div>
                <div className='text-4xl text-[#813805]'>
                  Collection Fee : <span className='lg:ml-10'>6%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-center mt-20 lg:mt-0'>
            <button
              onClick={() => setTagFlag(!tagFlag)}
              className={`rounded-full mb-10 py-4 px-24 text-3xl bg-[#28130910] ${
                tagFlag
                  ? ' border-b-[5px] border-[#281309] text-[#a7500e]'
                  : ' text-[#867854]'
              }`}
            >
              Current Stakes & Yield
            </button>
            <button
              onClick={() => setTagFlag(!tagFlag)}
              className={`rounded-full mb-10 py-4 px-10 text-3xl bg-[#28130910] lg:ml-20 ${
                !tagFlag
                  ? ' border-b-[5px] border-[#281309] text-[#a7500e]'
                  : ' text-[#867854]'
              }`}
            >
              Enter Stake
            </button>
          </div>
        </div>
        <div className='relative'>
          <img
            src='/images/back_3.png'
            className='absolute top-0 left-0 w-full h-full object-cover object-bottom '
            alt='second section'
          />
          {tagFlag ? <Tab1 /> : <Tab2 />}

          <div className='div current-stake text-center w-full relative z-30 mt-[280px]'>
            <div className='text-6xl text-[#500101] mt-5 mb-[100px]'>
              Earnings Calculator
            </div>
            <div className='container mx-auto'>
              <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 mb-20 justify-center'>
                  <div className='text-[40px] text-[#ff6000] mb-5'>Staking</div>
                  <div className='flex'>
                    <div className='w-1/2 flex-col justify-center text-[#281309]'>
                      <div className='text-[36px] text-[#ff6000] mb-6'>
                        Stake Amount
                      </div>
                      <div className='text-xl'>maxinum 10,000 BUSD</div>
                      <div className='rotate-90'>{'>'}</div>
                      <div className='text-[40px]'>
                        <input type="number" className='text-center outline-0 w-40 lg:w-72 bg-transparent' placeholder='2000' />
                      </div>
                      <div className='-rotate-90'>{'>'}</div>
                      <div className='text-xl'>minimun 50 BUSD</div>
                    </div>
                    <div className='w-1/2'>
                      <div className='text-[36px] text-[#ff6000]'>
                        Days Staked
                      </div>
                      <div className='w-full flex justify-center items-center'>
                        <div className='w-2/3 relative'>
                          <CircularProgressbar
                            value={66}
                            styles={buildStyles({
                              strokeLinecap: 'butt',
                              // pathColor: `#000`,
                              textColor: '#f88'
                            })}
                          />
                          <input type="number" className='text-center outline-0 text-4xl w-40 bg-transparent absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' placeholder='50' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 mb-20'>
                  <div className='text-[40px] text-[#ff6000] mb-5'>
                    Earnings
                  </div>
                  <div className='flex flex-wrap'>
                    {earingArr.map(item => (
                      <div className='w-1/2 px-8 py-5' key={item.id}>
                        <Card {...item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container mx-4 md:mx-auto flex flex-col md:flex-row items-center relative z-30 py-60 md:py-80'>
            <div className='w-full md:w-1/2 mb-10 md:mb-0 text-center text-4xl md:text-6xl text-[#500101]'>
              EARN 3.3% <br />
              DAILY REWARDS
              <br /> ON POCKET CHANGE
            </div>
            <div className='w-5/6 md:w-1/2 flex items-center justify-center'>
              <button className='relative p-0'>
                <img src='/images/btn_invest.png' alt='' />
                <span className='text-4xl md:text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#281309]'>
                  INVEST
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
