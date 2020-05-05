import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import MatchBoard from './matchboard/MatchBoard.js'
import ControlBoard from './controlboard/ControlBoard.js'
import ControlBoardContextProvider from './contexts/ControlBoardContextProvider'
import ScoreBoardContextProvider from './contexts/ScoreBoardContextProvider'
import ScoreClockContextProvider from './contexts/ScoreClockContextProvider'
import ClockContextProvider from './contexts/ClockContextProvider'

const App = () => {
  return (
    <div className="App">
      <ControlBoardContextProvider>
        <ScoreBoardContextProvider> 
          <ScoreClockContextProvider> 
            <ClockContextProvider>
              <Router>
                <Route exact path='/controlboard' component={ControlBoard}/>        
                <Route exact path='/matchboard' component={MatchBoard}/>              
              </Router>
            </ClockContextProvider>
          </ScoreClockContextProvider> 
        </ScoreBoardContextProvider>
      </ControlBoardContextProvider>
    </div>
  );
}

export default App;
