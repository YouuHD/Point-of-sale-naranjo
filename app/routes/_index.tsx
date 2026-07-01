import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button"
import { GiClick } from "react-icons/gi";
import { Fragment } from "react/jsx-runtime";
import MainLayout from "~/components/ui/Layouts/mainLayout";
import CardChart from "~/components/ui/dashboard/cardChart"
import { CiBoxes } from "react-icons/ci";
import { BarChartComponent } from "~/components/ui/dashboard/barChart";
import {ScatterChartComponent } from "~/components/ui/dashboard/scatterChart";
import {LineChartComponent } from "~/components/ui/dashboard/lineChart";
import {ScrollAreaDemo} from "~/components/ui/dashboard/scroll";
import { ScrollArea } from "~/components/ui/general/scrollArea";
import TableCard from "~/components/ui/dashboard/tableCard";
import {Table} from "~/components/ui/dashboard/users.json";
import {Productos} from "~/components/ui/dashboard/productos.json";
import {Inventory} from "~/components/ui/dashboard/inventory.json";
import LinkTo from "~/components/ui/general/Link";

export const meta: MetaFunction = () => {
  return [
    { title: "Point of Sale" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

//Aquí sería hacer un request de la data de la base de datos, por ahora solo es un array de objetos
const chartData = [
  { month: "Enero", desktop: 100 },
  { month: "Febrero", desktop: 150 },
  { month: "Marzo", desktop: 125 },
  { month: "Abril", desktop: 145 },
  { month: "Mayo", desktop: 110 },
  { month: "Junio", desktop: 75 },
]
const chartData2 = [
  { month: "Enero", desktop: 50 , mobile: 60},
  { month: "Febrero", desktop: 145, mobile: 50 },
  { month: "Marzo", desktop: 75, mobile: 180 },
  { month: "Abril", desktop: 150, mobile: 80 },
  { month: "Mayo", desktop: 30, mobile: 90 },
  { month: "Junio", desktop: 160 , mobile: 200},
]
const chartData3 = [
  { month: "Enero", desktop: 186 },
  { month: "Febrero", desktop: 305},
  { month: "Marzo", desktop: 237},
  { month: "Abril", desktop: 73},
  { month: "Mayo", desktop: 209},
  { month: "Junio", desktop: 214 },
]


export default function Index() {

  return (


    <Fragment>
      <MainLayout className="flex flex-col bg-[#f6f6f6] dark:bg-[#252525]" as="main" Header={<Fragment></Fragment>}>
        <div className="grid w-full grid-cols-3  gap-12 p-10">
          <CardChart textTitle="Ventas Totales" textDescription="$12,345 en los útimos 30 días" iconContent={<CiBoxes className="mr-3" />} textFooter="" texContent="" children={<LineChartComponent chartData={chartData3}/>} />
          <CardChart textTitle="Valor de Inventario" textDescription="$12,345 Nivel de existencia en los últimos 30 días" iconContent={<CiBoxes className="mr-3" />} textFooter="" texContent="" children={<BarChartComponent chartData={chartData}/>} />
          <CardChart textTitle="Nuevos Clientes" textDescription="123 nuevos clientes en los útimos 30 días" iconContent={<CiBoxes className="mr-3" />} textFooter="" texContent=""  children={<ScatterChartComponent chartData={chartData2}/>} />
          <CardChart textTitle="Gestión de Usuarios" textDescription="Administra los roles y permisos de tus empleados" iconContent={<CiBoxes className="mr-3" />} textFooter={<LinkTo text="Gestionar" link="/admin/users"/>} texContent="" children={
            <ScrollArea className="h-40 w-full">
              <TableCard data={Table}/>
			      </ScrollArea>}  />
          <CardChart textTitle="Gestión de Producto" textDescription="Agregar o editar productos a tu inventario" iconContent={<CiBoxes className="mr-3" />} textFooter={<LinkTo text="Gestionar" link="/admin/products"/>} texContent="" children={
            <ScrollArea className="h-40 w-full">
              <TableCard data={Productos}/>
			      </ScrollArea>}/>
          <CardChart textTitle="Seguimiento" textDescription="Monitorear los niveles de existencias en tu inventario" iconContent={<CiBoxes className="mr-3" />} textFooter={<LinkTo text="Gestionar" link="/inventory"/>} texContent="" children={
            <ScrollArea className="h-40 w-full">
              <TableCard data={Inventory}/>
			      </ScrollArea>}/>
        </div>
      </MainLayout>
    </Fragment>

  );
}
