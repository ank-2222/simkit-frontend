import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Region as RegionProps } from "@medusajs/medusa";
import { useRegions } from "medusa-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Region({setRegion }: any) {
  const { regions } = useRegions();
  const handleSelectChange = (value: string) => {
    const selectedRegion = regions?.find((r: RegionProps) => r.id === value);
    localStorage.setItem("region", JSON.stringify({region_id:selectedRegion?.id,currency_code:selectedRegion?.currency_code}));
    setRegion({region_id:selectedRegion?.id,currency_code:selectedRegion?.currency_code});
  };
  return (
    <div>
      <div className="my-8">
        <Select  onValueChange={handleSelectChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            {regions?.map((region: RegionProps) => (
              <SelectItem key={region.id} value={region.id}>
                {region.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Region;
