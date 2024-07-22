'use client';
import CountUp from 'react-countup';

const AnimatedCounter = ({amount }: {amount : number}) => {
  return (
    <div>
        <CountUp end={amount}
        duration={2}
        prefix='$'
        decimals={2}
        />
        </div>
  )
}

export default AnimatedCounter