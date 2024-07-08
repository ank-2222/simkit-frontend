import Skeleton from "react-loading-skeleton";

function ProductDisplaySkeleton() {
  return (
    <div className="w-fit m-auto">
      <Skeleton height={30} width={200} />
      <Skeleton height={40}  />
      <Skeleton height={40} className="w-[100%] "/>
      <div className="flex flex-wrap justify-center items-center lg:justify-start lg:items-start gap-y-4 lg:gap-x-4 mt-[20px]">
      <div>
          <Skeleton height={200} />
          <Skeleton height={30} width={350} />
          <Skeleton height={50} width={300} />
          <Skeleton height={30} width={100} />
          <Skeleton height={30}  />
        </div>
        <div>
          <Skeleton height={200} />
          <Skeleton height={30} width={350} />
          <Skeleton height={50} width={300} />
          <Skeleton height={30} width={100} />
          <Skeleton height={30}  />
        </div>
        <div>
          <Skeleton height={200}  />
          <Skeleton height={30} width={350} />
          <Skeleton height={50} width={300} />
          <Skeleton height={30} width={100} />
          <Skeleton height={30}  />
        </div>
      </div>
    </div>
  );
}

export default ProductDisplaySkeleton;
