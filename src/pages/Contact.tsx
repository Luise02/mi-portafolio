import { useRef, useState } from 'react';
import axios from 'axios';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'react-toastify';



const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(formRef.current!);
    const data = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    };

    try {
      const res = await axios.post<{ success: boolean }>('http://localhost:5000/send-email', data);
      if (res.data.success) {
        toast.success('✅ Mensaje enviado exitosamente.');
        formRef.current?.reset();
        setTimeout(() => setStatus(''), 5000); // limpia después de 5 segundos (ajustable)        
      } else {
        toast.error('❌ Hubo un error al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error de envío:', error);
      toast.error('❌ Error al conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">Contáctame</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <input
          name="name"
          type="text"
          placeholder="Nombre"
          className="w-full p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows={4}
          className="w-full p-3 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-semibold ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          } text-white transition`}
        >
          {loading && (
    <ImSpinner2 className="animate-spin text-xl" />
  )}
  {loading ? 'Enviando...' : 'Enviar'}
        </button>
        {status && (
          <p className="text-center text-sm text-green-600 dark:text-green-400">{status}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
