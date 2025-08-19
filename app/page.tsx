import { SalesChart } from '@/components/SalesChart';

export default function HomePage() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard de Vendas</h1>
      <SalesChart />
    </div>
  );
}
