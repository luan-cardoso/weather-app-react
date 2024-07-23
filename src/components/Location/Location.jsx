import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LocationContext } from '../../Context/LocationContext';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';

const Location = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      location: ''
    }
  });

  const { location, setLocation } = useContext(LocationContext);
  const onSubmit = (data) => {
    setLocation(data.location);
  };

  return (
    <div>
      <div className='flex items-center justify-center space-x-2 mb-8'>
        <FontAwesomeIcon icon={faLocationDot} size='lg' style={{color: "#c42929"}} className='mt-2'/>
        <p className='text-zinc-200 text-xl font-normal tracking-wider mt-2 first-letter:uppercase'>{location}</p>
      </div>
      <div className='flex justify-center mb-8'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center justify-center bg-zinc-200 rounded-sm'>
            <input 
              className='bg-zinc-200 text-zinc-900 border-0 focus:ring-transparent rounded-md'
              placeholder='Busque outro lugar aqui'
              spellCheck='false'
              type="text"
              {...register('location')}
            />
            <button 
              className='p-1 mr-1' 
              type="submit"><FontAwesomeIcon size='2xl' style={{color: "#18181b"}} icon={faSquareArrowUpRight}/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Location;
