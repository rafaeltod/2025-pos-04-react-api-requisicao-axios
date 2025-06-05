import React, { useState } from "react";
import { TarefaInterface } from "@/data";

interface ModalTarefaProps {
  onClose: () => void;
  onAddTarefa: (newTarefa: TarefaInterface) => void;
}

const ModalTarefa: React.FC<ModalTarefaProps> = ({ onClose, onAddTarefa }) => {
  const [titulo, setTitulo] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = () => {
    const newTarefa = {
      id: Math.random(), // Um ID simples gerado aleatoriamente, você pode usar outro método
      title: titulo,
      completed: completed,
    };
    onAddTarefa(newTarefa);
    onClose(); // Fecha o modal após adicionar a tarefa
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Nova Tarefa</h2>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="border p-2 mb-4 w-full"
          placeholder="Título da tarefa"
        />
        <div className="mb-4">
          <label className="mr-2">Concluída</label>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded-md mr-2"
        >
          Adicionar
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white p-2 rounded-md"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalTarefa;