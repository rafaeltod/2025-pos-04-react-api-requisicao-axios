"use client";

import React, { useState } from "react";
import dados, { TarefaInterface } from "@/data";  // Importando os dados e a interface
import Cabecalho from "@/componentes/Cabecalho";
import ModalTarefa from "@/componentes/ModalTarefa";
import Link from "next/link"; // <-- Adicionado

// Componente para exibir uma tarefa
const Tarefa: React.FC<{ titulo: string; concluido?: boolean; id: number; onToggle: (id: number) => void }> = ({ titulo, concluido, id, onToggle }) => {
  const classeCard = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
    concluido ? "bg-gray-800 hover:border-gray-800" : "bg-gray-400 hover:border-gray-400"
  }`;

  const classeCorDoTexto = concluido ? "text-amber-50" : "";

  return (
    <div className={classeCard} onClick={() => onToggle(id)}>
      <h3 className={`text-xl font-bold ${classeCorDoTexto}`}>{titulo}</h3>
      <p className={`text-sm ${classeCorDoTexto}`}>{concluido ? "Concluída" : "Pendente"}</p>
    </div>
  );
};

// Componente para listar todas as tarefas
const Tarefas: React.FC<{ tarefas: TarefaInterface[]; onToggle: (id: number) => void }> = ({ tarefas, onToggle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          id={tarefa.id}
          titulo={tarefa.title}
          concluido={tarefa.completed}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

// Componente principal da página Home
const Home: React.FC = () => {
  const [tarefas, setTarefas] = useState<TarefaInterface[]>(dados);
  const [showModal, setShowModal] = useState<boolean>(false);

  // Função para alternar o estado de conclusão de uma tarefa
  const toggleConcluida = (id: number) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa
      )
    );
  };

  // Função para adicionar nova tarefa
  const handleAddTarefa = (newTarefa: TarefaInterface) => {
    setTarefas((prevTarefas) => [...prevTarefas, newTarefa]);
  };

  // Função para mostrar o modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <Cabecalho onShowModal={handleShowModal} />
      {/* Link para a página de tarefas */}
      <div className="mb-4">
        <Link
          href="/tarefas/"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Ir para Tarefas
        </Link>
      </div>
      <Tarefas tarefas={tarefas} onToggle={toggleConcluida} />

      {showModal && (
        <ModalTarefa
          onClose={handleCloseModal}
          onAddTarefa={handleAddTarefa}
        />
      )}
    </div>
  );
};

export default Home;