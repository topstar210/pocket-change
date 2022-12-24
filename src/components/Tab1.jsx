const Tab1 = () => {
  const maskFlag = false

  return (
    <>
      <div className='relative'>
        <img
          src='/images/back_2.png'
          className='absolute w-full h-full object-cover object-center '
          alt='second section'
        />
        <div className='flex justify-center'>
          {maskFlag && (
            <div className='container relative'>
              <div className='absolute z-40 text-center text-xl md:text-2xl lg:text-4xl xl:text-[40px] w-full'>
                <div className='text-black py-1 sm:py-4 md:py-8 lg:py-10 xl:py-20'>
                  Countdown to start a stake
                </div>
                <div className='flex justify-around md:px-24'>
                  <div>
                    3<p>Days</p>
                  </div>
                  <div>
                    18
                    <p>Hours</p>
                  </div>
                  <div>
                    03
                    <p>Minutes</p>
                  </div>
                  <div>
                    45
                    <p>Seconds</p>
                  </div>
                </div>
              </div>
              <img
                src='/images/mask.png'
                className='w-full relative object-cover object-center z-30'
                alt='countdown'
              />
            </div>
          )}
          {!maskFlag && (
            <div className='container flex flex-wrap xl:flex-row relative h-[800px] xl:h-[574px] z-30 pt-[60px]'>
              <div className='w-full xl:w-1/2 relative mb-[70px] h-[290px] text-center items-center px-10'>
                <div className='h-full bg-[#ffecc350] backdrop-blur-lg rounded-3xl shadow-card relative'>
                  <div className='text-3xl xl:text-4xl text-[#281309] pt-10'>
                    Total Staked Value
                  </div>
                  <div className='text-5xl lg:text-6xl xl:text-7xl text-[#281309] absolute top-1/2 translate-y-[-40px] left-1/2 -translate-x-1/2'>
                    $1,474,320
                  </div>
                  <button className='w-full max-w-max absolute left-1/2 -translate-x-1/2 bottom-[-24px] md:bottom-[-40px] uppercase rounded-full py-3 md:py-5 px-5 md:px-16 text-[#e3d08f] text-xl lg:text-4xl bg-[#281309] border-2 border-[#867854] shadow-xl shadow-[#281309]'>
                    start a stake
                  </button>
                </div>
              </div>
              <div className='w-full xl:w-1/2 relative mb-[70px] h-[290px] text-center items-center px-10'>
                <div className='h-full bg-[#ffecc350] backdrop-blur-lg rounded-3xl shadow-card relative'>
                  <div className='text-3xl xl:text-4xl text-[#281309] pt-10'>
                    Total Earnings
                  </div>
                  <div className='text-5xl lg:text-6xl xl:text-7xl text-[#281309] absolute top-1/2 translate-y-[-40px] left-1/2 -translate-x-1/2 flex justify-around w-full'>
                    <div>0</div>
                    <div>$0.000</div>
                  </div>
                  <div className='text-sm lg:text-md xl:text-xl text-[#281309] mt-24'>
                    Note: Collecting wil reset all stakes to 3.5% daily. <br />
                    Compound will add to stakes while doing the sane.
                  </div>
                  <div className='absolute left-1/2 -translate-x-1/2 bottom-[-24px] md:bottom-[-40px] flex justify-around'>
                    <button className='max-w-max uppercase rounded-full py-3 md:py-5 px-5 md:px-8 text-[#e3d08f] text-xl lg:text-4xl bg-[#281309] border-2 border-[#867854] shadow-xl shadow-[#281309]'>
                      compound
                    </button>
                    <button className='max-w-max ml-2 lg:ml-10 uppercase rounded-full py-3 md:py-5 px-5 md:px-8 text-[#e3d08f] text-xl lg:text-4xl bg-[#281309] border-2 border-[#867854] shadow-xl shadow-[#281309]'>
                      collect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='w-full text-center text-6xl text-[#e3d08f] relative z-30'>
          <div className='mt-16'>Referrals Earned</div>
          <div className='text-7xl py-14'>$1,474,302</div>
          <div className='flex flex-wrap justify-center'>
            <button className='uppercase rounded-full mb-14 py-5 px-16 text-[#e3d08f] text-4xl bg-[#281309] border-2 border-[#867854] shadow-lg shadow-[#281309]-500/50'>
              Stake
            </button>
            <button className='uppercase rounded-full mb-14 py-5 px-16 text-[#e3d08f] text-4xl bg-[#281309] border-2 border-[#867854] shadow-lg shadow-[#281309]-500/50 sm:ml-20'>
              collect
            </button>
          </div>
        </div>
        <div className='w-full text-center relative z-30 pb-20'>
          <div className='text-white text-2xl underline'>
            Copy Referral Link
          </div>
          <div className='text-white text-sm'>
            Earn 10% when someone uses your referral link.
          </div>
        </div>
      </div>
      <div className='div current-stake text-center w-full relative z-30 mt-28'>
        <div className=' relative z-30'>
          <div className='text-6xl text-[#500101] my-5'>Current Stake</div>
          <div className='text-base text-[#500101]'>
            Earn 10% when someone uses your referral link.
          </div>
          <div className='text-2xl text-[#c6a46e] my-20'>
            Nothing to show here.
          </div>
        </div>

        <img
          src='/images/coin.png'
          className='hidden lg:block absolute top-8 animate-wave  -right-24'
          alt='second section'
        />
        <img
          src='/images/hand.png'
          className='hidden lg:block absolute animate-wave-revert top-0 left-10'
          alt='second section'
        />
      </div>
    </>
  )
}

export default Tab1
