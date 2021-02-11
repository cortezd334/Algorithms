function tournamentWinner(competitions, results) {
    // Write your code here.
      //competitions nested array [0]=home [1]=away
      //results 0 away won, 1 home won
      //win = 3 points
      let currentBest = ''
      const highestPoints = {[currentBest]: 0}
      let idx = 0
      for(comp of competitions){
          let winningTeam 
          results[idx] === 0 ? winningTeam = comp[1] : winningTeam = comp[0]
          updatePoints(winningTeam, 3, highestPoints)
          
          if(highestPoints[winningTeam] > highestPoints[currentBest]) {
              currentBest = winningTeam;
          }
          idx++
      }
  
    return currentBest;
  }
  
  function updatePoints(winner, points, highestPoints) {
      if(!(winner in highestPoints)) highestPoints[winner] = 0;
      
      highestPoints[winner] += points;
  }

  console.log(tournamentWinner([["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]],  [0, 0, 1]))
  console.log(tournamentWinner([["HTML", "Java"], ["Java", "Python"], ["Python", "HTML"]], [0, 1, 1]))
  console.log(tournamentWinner([["A", "B"]], [0]))
  console.log(tournamentWinner([
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"],
    ["SQL", "C#"],
    ["HTML", "SQL"],
    ["SQL", "Python"],
    ["SQL", "Java"]
  ], [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]))