import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import "../styles/events.css";
import logo from "../assets/logo.png";

export default function EventsList() {
  const [eventos, setEventos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const eventosPorPagina = 10;

  useEffect(() => {
    fetch("http://localhost:3000/eventos")
      .then(res => res.json())
      .then(data => setEventos(data));
  }, []);

  // Calcular eventos da página atual
  const inicio = (pagina - 1) * eventosPorPagina;
  const fim = inicio + eventosPorPagina;
  const eventosPagina = eventos.slice(inicio, fim);

  const totalPaginas = Math.ceil(eventos.length / eventosPorPagina);

  return (
    <div className="events-container">

      {/* LOGO + TÍTULO LADO A LADO */}
      <div className="title-row">
        <img src={logo} alt="FortEvents Logo" className="logo-img" />
        <h1>Eventos em Fortaleza</h1>
      </div>

      {/* GRID DE EVENTOS */}
      <div className="events-grid">
        {eventosPagina.map(ev => (
          <EventCard key={ev.id} evento={ev} />
        ))}
      </div>

      {/* PAGINAÇÃO */}
      <div className="pagination">
        <button 
          onClick={() => setPagina(pagina - 1)} 
          disabled={pagina === 1}
        >
          ⬅ Página anterior
        </button>

        <span>Página {pagina} de {totalPaginas}</span>

        <button 
          onClick={() => setPagina(pagina + 1)} 
          disabled={pagina === totalPaginas}
        >
          Próxima página ➡
        </button>
      </div>

      {/* VOLTAR AO INÍCIO */}
      <button className="back-home" onClick={() => setPagina(1)}>
        ⬆ Voltar à primeira página
      </button>
    </div>
  );
}
