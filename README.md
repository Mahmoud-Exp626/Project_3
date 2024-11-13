# :football: Welcome to Big Ten Football!
For this project, our team decided to tell a Big Ten football story with the *Data Visualization Track*. Our data covers the years 2013 to 2022. 

## :school: About the Big Ten
The Big Ten is one of the oldest college athletic conferences in the United States, formed in 1896 by the Universities of Chicago, Illinois, Michigan, Minnesota, and Wisconsin and Purdue and Northwestern universities. The Big Ten conference currently includes 18 teams.
Our Data covers year 2013 to 2022. 2013 was the league's final season as a 12-team conference before Maryland and Rutgers join the Big Ten Conference for the 2014 season. From 2014 to 2022, the league had 14 teams. 

![photo](https://github.com/user-attachments/assets/f9586e6d-4cdc-4bee-af9d-5405ba8c1c7d)

## :question: Big Ten Football Questions
- Is the data sufficient to answer our questions?
- Is there a correlation between head coach salary and football game win/loss?
- Does the school size impact season success?
- Are there any outliers to consider?
- Does success of previous years/seasons impact the number of applications for the following academic year?

## :bar_chart: What Data Did We Use?
- Big Ten College Football Years 2013 - 2022
- School Stadium Info
- Win/Loss 
- Financials

## :chart_with_upwards_trend: Big Ten Visuals :chart_with_downwards_trend:

### Win/Loss Rate

<img width="421" alt="image" src="https://github.com/user-attachments/assets/6b249159-1367-4111-8e02-8d92d6b3a991">

### Financial Revenue vs Expenses

<img width="413" alt="image" src="https://github.com/user-attachments/assets/84ee735e-cda2-49d0-865e-7ed481eb5ba1">

### Team's Season Info

<img width="185" alt="image" src="https://github.com/user-attachments/assets/8c21b326-607b-43a7-94f6-bf30ed2e6770">

### Football Team Info

<img width="237" alt="image" src="https://github.com/user-attachments/assets/0dd2d59f-31b4-4bce-b19f-ac37d48c1331">

## :warning: Outlier Data
Select a university and see blank data? Don't worry! 
- Rutgers and Maryland were not a part of the Big Ten for 2013
- Pennsylvania State University was sanctioned for years

## Data Visualization Track and Big Ten Football

* Visualizations created with JavaScript
* Data stored in and extracted from PostgreSQL
* Multiple Datasets with at least 100 records
* User-driven interactions with dropdowns and text boxes to display JavaScript-powered visualizations


## Sample Code

**Some of the code we used for cleaning and creating our visuals:**

- Code for converting CSV to JavaScript
`df = pd.read_csv(csv_file)`
`data = df.to_dict('records')`
`js_data = f'const data = {json.dumps(data, indent=4)};'`
`with open(js_file, 'w') as f:
        f.write(js_data)
`


<ins>DATA SOURCES</ins> 
- U.S. Department of Education, Equity in Athletics analysis
  - https://ope.ed.gov/athletics/#/customdata/search
- Kaggle: College Football Team Stats Seasons 2013 to 2023
  - https://www.kaggle.com/datasets/jeffgallini/college-football-team-stats-2019
- ChatGPT for Stadium Information


<ins>REFERENCES FOR HELP WITH CODE</ins>
- Tutors
- ChatGPT

