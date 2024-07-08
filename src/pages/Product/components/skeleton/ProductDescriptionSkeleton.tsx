import Skeleton from 'react-loading-skeleton'

function ProductDescriptionSkeleton() {
  return (
    <div className='flex flex-col lg:flex-row flex-wrap justify-center items-center lg:justify-start lg:items-start gap-y-4 gap-x-8'>

        <div className='flex-1 w-full'>
            <Skeleton height={350} />
        </div>
        <div className='flex-1 w-full'>
            <Skeleton height={30} width={350} />
            <Skeleton height={100} width={300} />
            <Skeleton height={30} width={100} />
            <Skeleton height={100}  />
            <Skeleton height={60} className='mt-4' />
        </div>

    </div>
  )
}

export default ProductDescriptionSkeleton