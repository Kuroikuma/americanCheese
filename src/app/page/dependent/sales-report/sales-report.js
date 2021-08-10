import React, { useState } from "react";
import SalesReportView from "./sales-report.view";

const columnas = [
  { name: "Producto" },
  { name: "Lunes" },
  { name: "Martes" },
  { name: "Miércoles" },
  { name: "Jueves" },
  { name: "Viernes" },
  { name: "Sábado" },
  { name: "Domingo" },
  { name: "Total Semanal" },
];

const filas = [
  {
    Producto: "Pizza",
    Lunes: 4,
    Martes: 2,
    Miercoles: 4,
    Jueves: 8,
    Viernes: 10,
    Sabado: 11,
    Domingo: 16,
    totalSemanal: 0,
  },
  {
    Producto: "Calsones",
    Lunes: 6,
    Martes: 3,
    Miercoles: 5,
    Jueves: 9,
    Viernes: 11,
    Sabado: 12,
    Domingo: 17,
    totalSemanal: 0,
  },
];
const total = [
  {
    Producto: "Total",
    Lunes: 0,
    Martes: 0,
    Miercoles: 0,
    Jueves: 0,
    Viernes: 0,
    Sabado: 0,
    Domingo: 0,
    totalSemanal: 0,
  },
];
function sumaTotal() {
  for (let i = 0; i < filas.length; i++) {
    total[0].Lunes = total[0].Lunes + filas[i].Lunes;
    total[0].Martes = total[0].Martes + filas[i].Martes;
    total[0].Miercoles = total[0].Miercoles + filas[i].Miercoles;
    total[0].Jueves = total[0].Jueves + filas[i].Jueves;
    total[0].Viernes = total[0].Viernes + filas[i].Viernes;
    total[0].Sabado = total[0].Sabado + filas[i].Sabado;
    total[0].Domingo = total[0].Domingo + filas[i].Domingo;
  }
}
sumaTotal();

function SalesReport() {
  const [decreases, setDecreases] = useState(false);
  return (
    <SalesReportView
      columnas={columnas}
      filas={filas}
      decreases={decreases}
      setDecreases={setDecreases}
      total={total}
    />
  );
}
export default SalesReport;
