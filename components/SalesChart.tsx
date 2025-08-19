"use client";

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export const SalesChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Vendas',
      data: [],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
    }],
  });

  useEffect(() => {
    // Simulando a obtenção de dados de uma API
    const fetchData = async () => {
      const data = await fetch('/api/sales').then(res => res.json());
      setChartData({
        labels: data.map(entry => entry.month),
        datasets: [{
          ...chartData.datasets[0],
          data: data.map(entry => entry.sales),
        }],
      });
    };

    fetchData();
  }, []);

  return <Line data={chartData} />;
};
