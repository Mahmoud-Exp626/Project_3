# :football: Welcome to Big Ten Football!
For this project, our team decided to tell a Big Ten football story with the *Data Visualization Track*. Our data covers years 2013 to 2022. How many wins and losses did each team have for the years 2013 to 2002? What is each university's win/loss rate? Does a university generate more revenue than they expend?

## About the Big Ten
The Big10 is one of the oldest college athletic conferences in the United States, formed in 1896 by the Universities of Chicago, Illinois, Michigan, Minnesota, and Wisconsin and Purdue and Northwestern universities. The Big10 conference currently includes 18 teams.
Our Data covers year 2013 to 2022. 2013 was the league's final season as a 12-team conference before Maryland and Rutgers join the Big Ten Conference for the 2014 season. From 2014 to 2022, the league had 14 teams. 

![photo](https://github.com/user-attachments/assets/f9586e6d-4cdc-4bee-af9d-5405ba8c1c7d)



OUTLIERS TO CONSIDER - RUTGERS AND MARYLAND WEREN'T PART OF BIG10 FOR 2013. PENN STATE IS MISSING TWO YEARS BECAUSE THEY WERE SUSPENDED 

### Data Visualization Track
For this track, your group will tell a story using data visualizations.
* Your project must include visualizations created with Python, JavaScript, or a library not covered in class.
* Data must be stored in and extracted from at least one database (PostgreSQL, MongoDB, SQLite, etc).
* Your project must be powered by a dataset with at least 100 records.
* Your project must include some level of user-driven interaction (HTML menus, dropdowns, or text boxes to display JavaScript-powered visualizations).
* If possible, your final visualization should ideally include at least three views.

### Description of the files in this repository:


### Some of the code we used for cleaning and creating our visuals:

- Code for converting CSV to JavaScript
`df = pd.read_csv(csv_file)`
`data = df.to_dict('records')`
`js_data = f'const data = {json.dumps(data, indent=4)};'`
`with open(js_file, 'w') as f:
        f.write(js_data)
`


DATA SOURCES
- U.S. Department of Education, Equity in Athletics analysis
  - https://ope.ed.gov/athletics/#/customdata/search
- Kaggle: College Football Team Stats Seasons 2013 to 2023
  - https://www.kaggle.com/datasets/jeffgallini/college-football-team-stats-2019
- ChatGPT for Stadium Information


REFERENCES FOR HELP WITH CODE
- Tutors
- ChatGPT

