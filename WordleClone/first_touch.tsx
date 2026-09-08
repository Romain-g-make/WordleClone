import React, { useState } from 'react';

function App() {
  interface Touche{
    lettre: string;
    estCliquee: boolean;
  }

  const EstCliquee =() => {
    const [EstCliquee, setEstCliquee] = useState<boolean>(false); 
    const Touche = ({lettre, estCliquee = false }: ToucheProps) => {
  return (
 