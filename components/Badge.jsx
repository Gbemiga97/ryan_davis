'use client'
import CountUp from "react-countup"


const Badge = ({containerStyles, icon, endCountNum, endCountText, badgeText}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">
        {icon}
      </div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp 
          end={endCountNum}
          delay={1}
          duration={4}
          />
          {endCountText}
        </div>
        <p className="max-w-[70px] leading-none text-[0.9rem] font-medium text-black">
          {badgeText}</p>
      </div>
    </div>
  )
}

export default Badge