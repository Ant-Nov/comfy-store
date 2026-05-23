import {nanoid} from 'nanoid';
import hero1img from '../assets/hero1.webp';
import hero2img from '../assets/hero2.webp';
import hero3img from '../assets/hero3.webp';
import hero4img from '../assets/hero4.webp';
import { Link } from 'react-router-dom';

const images = [
  {
    id: nanoid(),
    img: hero1img,
  },
  {
    id: nanoid(),
    img: hero2img,
  },
  {
    id: nanoid(),
    img: hero3img,
  },
  {
    id: nanoid(),
    img: hero4img,
  },
];

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
      <div>
        <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>We are changing the way people shop</h1>
        
        <p className='mt-8 text-lg leading-8'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ratione nulla tempore ea ex unde. Iste totam ab, veniam laudantium in deleniti. Repudiandae voluptatem omnis harum pariatur accusantium atque et!
        </p>

          <Link to="products" className='btn btn-secondary mt-8'>Our Products</Link>
      </div>

      <div className="carousel carousel-center bg-neutral rounded-box h-100 space-x-4 p-4">

        {
          images.map(item => (
            <div key={item.id} className="carousel-item">
              <img
                src={item.img}
                className="rounded-box w-80 object-cover" />
            </div>
          ))
        }
      </div>
    </div>
  );
};