import { FaHeartbeat, FaTemperatureLow } from 'react-icons/fa';
import { GrHomeRounded } from 'react-icons/gr';

export const sensorsMap = [{
    id: 'heartRate',
    title: 'Heart Rate',
    icon:  <FaHeartbeat className='h-5 w-5 md:w-6 md:h-6 text-gray-700' />,
    unit: 'BPM'

},
{
    id: 'bodyTemperature',
    title: 'Body Temperature',
    icon: <FaTemperatureLow className='h-5 w-5 md:w-6 md:h-6 text-gray-700' />,
    unit: '°C'
},
{
    id: 'roomTemperature',
    title: 'Room Temperature',
    icon: <GrHomeRounded className='h-5 w-5 md:w-6 md:h-6 text-gray-700' />,
    unit: '°C'
}]
