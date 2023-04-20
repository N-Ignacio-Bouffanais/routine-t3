import exercises_images from '~/utils/exercises_img';

const Exercices = () => {
  return (
    <div className=''>
      <h2 className='text-slate-50 text-xl py-2 font-semibold'>Exercises:</h2>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4'>
        {exercises_images.map<JSX.Element>((image: { id: number, src: string, alt: string, name_exercise: string }) => (
          <div key={image.id}>
            <picture >
              <img className='rounded-lg hover:scale-105' src={image.src} alt={image.alt} width={300} height={300}/>
            </picture>
            <p className='text-white font-medium py-3'>{image.name_exercise}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exercices