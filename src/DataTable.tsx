import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Sale } from "./store/productInfoSlice";

interface DataTableProps {
  sales: Sale[];
}

const DataTable = ({ sales }: DataTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>WEEK ENDING</TableHead>
          <TableHead>RETAIL SALES</TableHead>
          <TableHead>WHOLESALE SALES</TableHead>
          <TableHead>UNITS SOLD</TableHead>
          <TableHead>RETAILER MARGIN</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sales.map(
          ({
            weekEnding,
            retailSales,
            wholesaleSales,
            unitsSold,
            retailerMargin,
          }) => (
            <TableRow>
              <TableCell>{weekEnding}</TableCell>
              <TableCell>{retailSales}</TableCell>
              <TableCell>{wholesaleSales}</TableCell>
              <TableCell>{unitsSold}</TableCell>
              <TableCell>{retailerMargin}</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default DataTable;
