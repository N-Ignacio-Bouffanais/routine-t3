import exercises_images from '~/utils/exercises_img';

const Exercices = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider') as HTMLInputElement;
    slider.scrollLeft = slider.scrollLeft - 140;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider') as HTMLInputElement;
    slider.scrollLeft = slider.scrollLeft + 140;
  };
  return (
    <div className='w-4/5 my-12'>
      <div className='relative flex items-center'>
        <button className='text-xl text-white mb-10 font-bold cursor-pointer hover:opacity-100' onClick={slideLeft}>＜</button>
        <div className='flex gap-3 overflow-hidden flex-nowrap scroll-smooth' id='slider'>
          {exercises_images.map<JSX.Element>((image: { id: number, src: string, alt: string, name_exercise: string }) => (
            <div className='flex flex-col items-center' key={image.id}>
              <picture className='flex w-32 hover:scale-105'>
                <img className='flex-none  rounded-lg ' src={image.src} alt={image.alt} width={128} height={128} />
              </picture>
              <p className='text-white font-medium py-3'>{image.name_exercise}</p>
            </div>
          ))}
        </div>
        <button className='text-xl text-white mb-10 font-bold cursor-pointer hover:opacity-100' onClick={slideRight}>＞</button>
      </div>
    </div>
  )
}

export default Exercices