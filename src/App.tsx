import { ChangeEvent, useEffect, useState } from "react"
import Forecast from "./components/Forecast"
import Search from "./components/Search"
import useForecast from "./hooks/useForecast"
import {forecastType, optionType} from './types/index'

const App = (): JSX.Element => {
  const {
    forecast,
    options,
    term,
    onOptionSelect,
    onSubmit,
    onInputChange,
  } = useForecast()
  return (
    <main className="flex justify-center items-center h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast}/>
      ): (
      <Search term={term} options={options} onInputChange={onInputChange}
      onOptionSelect={onOptionSelect} onSubmit={onSubmit}/>
      )}
    </main>
  )
}

export default App
