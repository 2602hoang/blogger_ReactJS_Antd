import { FloatButton } from 'antd'
import React from 'react'

function Fotter() {
  return (
    <div className="border-t-2 flex w-full justify-center items-center flex-wrap bg-secondary-bg-color p-8">
      <FloatButton.BackTop  tooltip={<b>Back Top</b>}
        />
    <p className='text-center text-base'>Copyright &copy; 2024 by Huy Hoang <span>Dev</span> | All Rights Reserved</p>
</div>
  )
}

export default Fotter