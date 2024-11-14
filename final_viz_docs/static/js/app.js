// Function to build metadata panels.  Panels titled Football Team Info and Team's Season Info
function buildMetadata(team) {
  // Clear existing metadata in both areas
  d3.select("#table-metadata").html("");
  d3.select("#additional-metadata").html("");

  // Load both datasets simultaneously
  Promise.all([d3.csv("../winloss_financials_joined.csv"),d3.csv("../school_stadium_info.csv")]).then(([financialData, schoolData]) => {
      // Filter data for the selected team
      const financialResult = financialData.filter(row => row.team === team);
      const schoolResult = schoolData.filter(row => row.University === team);

      // Sort the season info data in ascending order
      financialResult.sort((a, b) => a.year.localeCompare(b.year));

      // Make and populate Table
      const table = d3.select("#table-metadata").append("table").attr("class", "table table-striped");
      const thead = table.append("thead").append("tr");
      thead.selectAll("th")
          .data(["Year", "Games", "Record"])
          .enter()
          .append("th")
          .text(d => d);
      const tbody = table.append("tbody");
      financialResult.forEach(d => {
          let row = tbody.append("tr");
          row.append("td").text(d.year);
          row.append("td").text(+d.win + +d.loss);
          row.append("td").text(`${d.win}-${d.loss}`);
      });

      // Display additional school info (from school_stadium_info.csv), excluding the 'University' column
      if (schoolResult.length > 0) {
          Object.entries(schoolResult[0]).forEach(([key, value]) => {
              if (key !== 'University') {
                  d3.select("#additional-metadata").append("p").text(`${key}: ${value}`);
              }
          });
      }
  });
}

// Function to build charts
function buildCharts(team) {
  d3.csv("../winloss_financials_joined.csv").then((data) => {
      const teamsData = data.filter(row => row.team === team);

      // Prepare data for the win rate chart
      const year = teamsData.map(row => row.year);
      const win_rate = teamsData.map(row => +row.win_rate);

      // Build a bar chart for win rate
      const barTrace = {
          x: year,
          y: win_rate,
          type: 'bar',
          name: 'Win Rate',
          //text: win_rate,
          //textposition: 'inside',
          marker: {
              color: 'blue'
          }
      };

      const barLayout = {
          title: `Win Rate: ${team}`,
          xaxis: { title:'Year', tickvals: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022] },
          yaxis: { title:'Win Rate', range: [0, 1] },
          height: 400,
          width: 750
      };

      Plotly.newPlot('win-rate', [barTrace], barLayout);

      // Prepare data for the revenue and expenses chart
      const revenues = teamsData.map(row => +row.revenuesmenteam);
      const expenses = teamsData.map(row => +row.expensesmenteam);

      // Build bar chart for revenue and expenses
      const revenueTrace = {
          x: year,
          y: revenues,
          type: 'bar',
          name: 'Revenue',
          marker: { color: 'green' }
      };

      const expensesTrace = {
          x: year,
          y: expenses,
          type: 'bar',
          name: 'Expenses',
          marker: { color: 'red' }
      };

      const groupedLayout = {
          title: `Financial Overview: ${team}`,
          xaxis: { title: 'Year', tickvals: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022] },
          yaxis: { title: 'USD ($)', range: [0, 150000000] },
          barmode: 'group',
          height: 400,
          width: 750,
          legend: {
              x: 0.8,
              xanchor: 'center',
              y: -0.15,
              yanchor: 'top',
              orientation: 'h'
          }
      };

      Plotly.newPlot('financial-overview', [revenueTrace, expensesTrace], groupedLayout);
  });
}

// Function to run on page load
function init() {
  Promise.all([
      d3.csv("../winloss_financials_joined.csv"),
      d3.csv("../school_stadium_info.csv")
  ]).then(([financialData, schoolData]) => {
      const financialTeams = new Set(financialData.map(row => row.team));
      const schoolTeams = new Set(schoolData.map(row => row.University));
      const combinedTeams = [...new Set([...financialTeams, ...schoolTeams])];

      let dropdownMenu = d3.select("#selDataset");
      dropdownMenu.html("");  // Clear existing options
      combinedTeams.forEach(team => {
          dropdownMenu.append("option").text(team).property("value", team);
      });

      if (combinedTeams.length > 0) {
          const firstTeam = combinedTeams[0];
          buildMetadata(firstTeam);
          buildCharts(firstTeam);
      }
  });
}

// Event handler for dropdown changes
function optionChanged(newTeam) {
  buildMetadata(newTeam);
  buildCharts(newTeam);
}

// Initialize the dashboard
init();
