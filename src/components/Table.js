import React, { useState } from "react";
import "./Table.css";
import data from "../mock-data.json";

const Table = () => {
  const [contacts, setContacts] = useState(data);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Demanda</th>
            <th>Capacidade</th>
            <th>Atendimento Planejado</th>
            <th>Atendimento Realizado</th>
            <th>Desvio</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.Data}</td>
              <td>{contact.Demanda}</td>
              <td>{contact.Capacidade}</td>
              <td>{contact.AtendimentoPlanejado}</td>
              <td>{contact.AtendimentoRealizado}</td>
              <td>{contact.Desvio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
