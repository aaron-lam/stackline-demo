import { Badge } from "@/components/ui/badge";
import { ProductInfo } from "./store/productInfoSlice";

interface ProductInfoSectionProps {
  data: ProductInfo;
}

const ProductInfoSection = ({ data }: ProductInfoSectionProps) => {
  const { image, title, subtitle, tags } = data ?? {};
  return (
    <div className="w-full min-w-[200px]">
      <div className="flex flex-col items-center p-4">
        <img src={image} className="w-[200px]" />
        <div className="text-xl">{title}</div>
        <div className="text-xs text-gray-400">{subtitle}</div>
      </div>
      <div className="flex border-t border-b p-4 gap-4 flex-wrap">
        {tags?.map((tagName) => (
          <Badge variant="outline" className="w-fit">
            {tagName}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProductInfoSection;
