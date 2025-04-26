import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, DollarSign, ArrowLeft } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';

const BookingRequestPage = () => {
  const { artistId } = useParams();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Placeholder for booking submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Success handling would go here
    } catch (error) {
      // Error handling would go here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Link 
          to={`/contractor/artists/${artistId}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Voltar para o perfil do artista
        </Link>

        <Card>
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Solicitar Apresentação
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="Data"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                icon={<Calendar className="h-4 w-4 text-gray-400" />}
              />

              <FormInput
                label="Horário"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                icon={<Clock className="h-4 w-4 text-gray-400" />}
              />
            </div>

            <FormInput
              label="Local do Evento"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              placeholder="Nome do estabelecimento ou local"
              required
              icon={<MapPin className="h-4 w-4 text-gray-400" />}
            />

            <FormInput
              label="Endereço"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Endereço completo do evento"
              required
            />

            <FormInput
              label="Orçamento"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Valor em R$"
              required
              icon={<DollarSign className="h-4 w-4 text-gray-400" />}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Detalhes do Evento
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                className="w-full rounded-md shadow-sm border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                placeholder="Descreva os detalhes do evento, requisitos específicos, etc."
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                isLoading={isSubmitting}
              >
                Enviar Solicitação
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default BookingRequestPage;