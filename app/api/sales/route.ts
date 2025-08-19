import { NextResponse } from 'next/server';

export async function GET() {
  // Dados simulados
  const salesData = [
    { month: 'Janeiro', sales: 100 },
    { month: 'Fevereiro', sales: 200 },
    { month: 'Março', sales: 150 },
    { month: 'Abril', sales: 300 },
    { month: 'Maio', sales: 250 },
  ];

  return NextResponse.json(salesData);
}
