import { Oval } from "react-loader-spinner";

interface ILoading {
  height: number;
  width: number;
}

export const Loading = ({ height, width }: ILoading) => {
  return (
    <div className="flex justify-center item-center py-16">
      <Oval
        height={height}
        width={width}
        color="#ffcd38"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ffcd38"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </div>
  );
};
