import React from "react";
import "./sales-report.styles.css";
import html2pdf from "html2pdf.js";
import { Helmet } from "react-helmet";
import imagepdf from "../../../../assets/image/pdf.png";
import { PersistentDrawerLeft } from "../../../components/sidebar-lateral/sidebar";
import imagesearch from "../../../../assets/image/lupa.png";

function pdf() {
  const $archivopdf = document.body;
  html2pdf()
    .set({
      margin: 1,
      filename: "Reporte de Ventas.pdf",
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 3, // A mayor escala, mejores gráficos, pero más peso
        letterRendering: true,
      },
      jsPDF: {
        unit: "in",
        format: "a3",
        orientation: "landscape", // landscape o portrait
      },
    })
    .from($archivopdf)
    .save();
}

const SalesReportView = (props) => {
  const { columnas } = props;
  const { filas } = props;
  const { total } = props;
  const { decreases, setDecreases } = props;
  return (
    <PersistentDrawerLeft titulo="Reporte De Venta" setDecreases={setDecreases}>
      <Helmet>
        <title> Reporte de venta</title>
      </Helmet>
      <div className="report-table">
        <div className="report-tittle">Informe General de Ventas</div>
        <div className="search">
          <input type="text" placeholder="buscar" required />
          <button className="button-search">
            <img className="image-search" src={imagesearch} alt="" />
          </button>
        </div>
        <button className="button-pdf" onClick={pdf}>
          <img className="image-button" src={imagepdf} />
        </button>
        {columnas.map((columnas) => (
          <div className="report-columns">{columnas.name}</div>
        ))}
        {filas.map((fila) => (
          <>
            <div className="report-filas">{fila.Producto}</div>
            <div className="report-filas">{fila.Lunes}</div>
            <div className="report-filas">{fila.Martes}</div>
            <div className="report-filas">{fila.Miercoles}</div>
            <div className="report-filas">{fila.Jueves}</div>
            <div className="report-filas">{fila.Viernes}</div>
            <div className="report-filas">{fila.Sabado}</div>
            <div className="report-filas">{fila.Domingo}</div>
            <div className="report-filas">
              {fila.Lunes +
                fila.Martes +
                fila.Miercoles +
                fila.Jueves +
                fila.Viernes +
                fila.Sabado +
                fila.Domingo}
            </div>
          </>
        ))}
        {total.map((total) => (
          <>
            <div className="report-total">{total.Producto}</div>
            <div className="report-total">{total.Lunes}</div>
            <div className="report-total">{total.Martes}</div>
            <div className="report-total">{total.Miercoles}</div>
            <div className="report-total">{total.Jueves}</div>
            <div className="report-total">{total.Viernes}</div>
            <div className="report-total">{total.Sabado}</div>
            <div className="report-total">{total.Domingo}</div>
            <div className="report-total">
              {total.Lunes +
                total.Martes +
                total.Miercoles +
                total.Jueves +
                total.Viernes +
                total.Sabado +
                total.Domingo}
            </div>
          </>
        ))}
      </div>
    </PersistentDrawerLeft>
  );
};

export default SalesReportView;
