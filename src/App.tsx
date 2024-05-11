import Header from "./Header";
import Logo from "@/assets/stackline_logo.svg";
import ProductInfoSection from "./ProductInfoSection";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { fetchData as fetchProductData } from "./store/productInfoSlice";
import { useEffect } from "react";
import DataTable from "./DataTable";

function App() {
  const dispatch = useDispatch();
  const dataList = useSelector((state: RootState) => state.productInfo.data);
  const data = dataList[0];

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <div className="bg-slate-50">
      <Header logo={<img src={Logo} />} />
      <div className="flex h-full m-10">
        <div className="h- w-[380px] bg-white m-2 shadow-sm">
          <ProductInfoSection data={data} />
        </div>
        <div className="h-full w-full bg-white m-4 shadow-sm">
          <DataTable sales={data.sales} />
        </div>
      </div>
    </div>
  );
}

export default App;
