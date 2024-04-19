import { FieldTimeOutlined } from '@ant-design/icons';
import { Button, FloatButton } from 'antd'
import React, { useEffect, useState } from 'react'

function Fotter() {
  //   const onPanelChange = (value, mode) => {
  //     console.log(value.format('YYYY-MM-DD'), mode);
  // };
  const [time, setTime] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayOfWeek = daysOfWeek[now.getDay()];
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth() returns zero-based month index
      const year = now.getFullYear().toString();
      const timeString = `\t Time ${hours}:${minutes}:${seconds}` + `\n` + `` + `||\n\n\n\n\n\t\t` +
        `${dayOfWeek},${day}/${month}/${year}`
        ;
      setTime(timeString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="border-t-2 flex-col flex w-full justify-center items-center flex-wrap bg-secondary-bg-color p-8">
      <FloatButton.BackTop style={{ height: "60px", width: "60px" }} tooltip={<b>Back Top</b>}
      />
      <Button
      target="_blank"
      href='https://24timezones.com/Ho-Chi-Minh/time'
      type='text' icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      } className="text-white flex justify-center items-center text-center  border-2 text-sm rounded-lg border-red-700">{time}</Button>
      <p className='text-center text-base'>Copyright &copy; 2024 by Huy Hoang <span>Dev</span> | All Rights Reserved</p>
    </div>
  )
}

export default Fotter