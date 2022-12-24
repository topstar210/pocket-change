const Tab2 = () => {
  return (
    <>
      <div className='relative'>
        <img
          src='/images/back_2.png'
          className='absolute w-full h-full object-cover object-center '
          alt='second section'
        />
        <div className='flex justify-center'>
          <div className='container flex flex-wrap xl:flex-row relative h-[700px] lg:h-[500px] z-30 pt-[60px]'>
            <div className='w-full relative mb-[70px] h-[500px] lg:h-[290px] text-center items-center px-2 md:px-10'>
              <div className='h-full bg-[#ffecc350] backdrop-blur-lg rounded-3xl shadow-card relative'>
                <div className='w-full flex flex-wrap lg:flex-row'>
                  <div className='w-full lg:w-1/2 text-right px-[50px] py-8'>
                    <div className='text-xl lg:text-3xl'>
                      Your wallet: 0.00 BUSD
                    </div>
                    <div className='text-xl lg:text-3xl'>
                      Approved amount: 0.00 BUSD
                    </div>
                    <div className='text-[#cd4d00] underline text-sm'>
                      Swap your tokens for BUSD here.
                    </div>
                    <div className='text-center text-md lg:text-xl lg:my-10'>
                      Approve and stake your BUSD here. You can view your
                      ongoing stakes in the Current Stakes & Yield tab.
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2 text-center px-[50px] py-8'>
                    <div className='uppercase text-xl lg:text-3xl'>
                      stake amount
                    </div>
                    <div className='text-3xl lg:text-5xl my-5 lg:my-10'>
                      <input type="number" className='text-center w-72 bg-transparent' placeholder='3,151' />
                    </div>
                    <div>
                      Stakes are not locked. You can unstake at any time.
                    </div>
                  </div>
                </div>
                <div className='absolute left-1/2 lg:left-3/4 -translate-x-1/2 bottom-[-24px] md:bottom-[-40px] flex justify-around'>
                  <button className='max-w-max uppercase rounded-full py-3 md:py-5 px-5 md:px-8 text-[#e3d08f] text-xl lg:text-4xl bg-[#281309] border-2 border-[#867854] shadow-xl shadow-[#281309]'>
                    Approve
                  </button>
                  <button className='max-w-max ml-2 lg:ml-10 uppercase rounded-full py-3 md:py-5 px-5 md:px-8 text-[#e3d08f] text-xl lg:text-4xl bg-[#281309] border-2 border-[#867854] shadow-xl shadow-[#281309]'>
                    stake
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-left text-6xl text-[#e3d08f] relative z-30 px-10 lg:px-36 pb-20'>
          <div className='mb-10 text-center'>Important Information</div>
          <div className='flex justify-center'>
            <div className='container lg:w-[1200px]'>
              <div className='text-xl my-5'>
                Stake or unstake at any time. When a new stake is made, overall
                yield accrual is set to 3.5% until day 20.
              </div>
              <div className='text-xl my-5'>
                Approval is required prior to staking your BUSD. The protocol
                will only request approval for the amount entered.
              </div>
              <div className='text-xl my-5'>
                Staking fee is a flat 10%. Use the Earnings Calculator to
                determine how much a stake will earn daily. All Fee’s will be
                used to invest in other Dapp’s across the Defi Market, returns
                will be deposited in the contract automatically.
              </div>
              <div className='text-xl my-5'>
                Disclaimer: Dividend payouts will take place at a flat rate.
                Payouts continue contingent on Smart Contract health and
                liquidity. For further questions, please read our DOCS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='div current-stake text-center w-full relative z-30 mt-28'>
        <div className='relative z-30 px-10 lg:px-36'>
          <div className='container mx-auto'>
            <div className='relative lg:pl-48 pt-10 mb-20'>
              <img
                src='/images/reward_policy.png'
                className='mb-12 lg:mb-0'
                alt=''
              />
              <div className='relative lg:absolute w-full lg:w-1/2 lg:top-20 lg:right-0 flex justify-center'>
                <div className='w-full max-w-[400px]'>
                  <p className='text-6xl text-[#500101] mb-6'>Dividends</p>
                  <p className='text-2xl text-[#500101] text-justify'>
                    Compounding and collecting earn-ings from dividends reset
                    all stakes to level 1. Creating new stakes has no effect on
                    existing stakes.
                    <br />
                    <br /> Disclaimer: Dividend payouts are fixed and the TVL
                    fluctuations do not effect the daily yield like in
                    traditional miners.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0'>
                <div className='w-full max-w-[560px]'>
                  <p className='text-6xl text-[#500101] mb-10'>Unstake Fees</p>
                  <div className='text-3xl text-[#262626]'>
                    <div className='flex'>
                      <p className='w-1/2 text-left'>Stake Length</p>
                      <p className='w-1/2 text-center'>Unstake Fee</p>
                    </div>
                    <div className='flex'>
                      <p className='w-1/2 text-left'>Day 1-10</p>
                      <p className='w-1/2 text-center'>20%</p>
                    </div>
                    <div className='flex'>
                      <p className='w-1/2 text-left'>Day 10-20</p>
                      <p className='w-1/2 text-center'>18%</p>
                    </div>
                    <div className='flex'>
                      <p className='w-1/2 text-left'>Day 20-30</p>
                      <p className='w-1/2 text-center'>16%</p>
                    </div>
                    <div className='flex'>
                      <p className='w-1/2 text-left'>Day 30-40</p>
                      <p className='w-1/2 text-center'>14%</p>
                    </div>
                    <div className='flex'>
                      <p className='w-1/2 text-left'>Day 40-50</p>
                      <p className='w-1/2 text-center'>12%</p>
                    </div>
                    <div className='flex'>
                      <p className='w-1/2 text-left'>Day 50+</p>
                      <p className='w-1/2 text-center'>10%</p>
                    </div>
                    <br />
                    <p className='text-left'>
                      Dividends earned are also paid out when unstakes take
                      place.
                    </p>
                    <br />
                    <p className='text-left'>
                      Volume in and out of the protocol help the platform
                      thrive. Fees are diversified
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 flex justify-center'>
                <div className='w-full max-w-[560px]'>
                  <p className='text-6xl text-[#500101] mb-10'>Staking</p>
                  <p className='text-3xl text-[#262626]'>
                    10% fee on intial stakes
                    <br />
                    <br />
                    Stakes immediately start earning 3.5% daily
                    <br />
                    <br />
                    Unstake at any time (earnings included)
                    <br />
                    <br />
                    Unstake fees start at 20% and decrease to 12%
                    <br />
                    <br />
                    10% fee on dividend collections
                    <br />
                    <br />
                    No fees on compounds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src='/images/coin.png'
          className='hidden lg:block absolute top-8 animate-wave -right-24'
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

export default Tab2
