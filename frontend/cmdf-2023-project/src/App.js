import './App.css';
import { InputBar } from './components/InputBar';
import { Product } from './components/Product';
import { AddButton } from './components/AddButton';
import { ResourceCard } from './components/ResourceCard';
import { SummaryBox } from './components/SummaryBox';
import { TotalSavingTextBox } from './components/TotalSavingTextBox';
import ScrollBar from './components/scrollBar';
import Landing from './components/landing';
import Summary from './components/summary';
import Resources from './components/resources';
import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";



function App() {

  return (
    <div >
      <Landing></Landing>
      <Summary></Summary>
      <Resources></Resources>
    </div>
  );
}


export default App
