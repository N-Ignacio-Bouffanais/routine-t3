import exercises_images from '~/utils/exercises_img';

const Exercices = () => {
  const slideLeft = () => {
    let slider = document.getElementById('slider') as HTMLInputElement;
    slider.scrollLeft = slider.scrollLeft - 204;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider') as HTMLInputElement;
    slider.scrollLeft = slider.scrollLeft + 204;
  };
  return (
    <div className='w-4/5 mt-6'>
      <h2 className='text-slate-50 text-xl py-2 font-semibold'>Exercises:</h2>
      <div className='relative flex items-center'>
        <button className='text-3xl text-white mb-10 font-extrabold cursor-pointer hover:opacity-100' onClick={slideLeft}>＜</button>
        <div className='flex gap-4 overflow-hidden flex-nowrap scroll-smooth' id='slider'>
          {exercises_images.map<JSX.Element>((image: { id: number, src: string, alt: string, name_exercise: string }) => (
            <div className='flex flex-col items-center' key={image.id}>
              <picture className='flex w-48'>
                <img className='flex-none  rounded-lg ' src={image.src} alt={image.alt} width={200} height={200} />
              </picture>
              <p className='text-white font-medium py-3'>{image.name_exercise}</p>
            </div>
          ))}
        </div>
        <button className='text-3xl text-white mb-10 font-extrabold cursor-pointer hover:opacity-100' onClick={slideRight}>＞</button>
      </div>
    </div>
  )
}

export default Exercices