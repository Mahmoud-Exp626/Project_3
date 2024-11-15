# :football: Welcome to Big Ten Football!
For this project, our team decided to tell a Big Ten football story with the *Data Visualization Track*. Our data covers the years 2013 to 2022. 

## :school: About the Big Ten
The Big Ten is one of the oldest college athletic conferences in the United States, formed in 1896 by the Universities of Chicago, Illinois, Michigan, Minnesota, and Wisconsin and Purdue and Northwestern universities. The Big Ten conference currently includes 18 teams.
Our Data covers year 2013 to 2022. 2013 was the league's final season as a 12-team conference before Maryland and Rutgers join the Big Ten Conference for the 2014 season. From 2014 to 2022, the league had 14 teams. 

![photo](https://github.com/user-attachments/assets/f9586e6d-4cdc-4bee-af9d-5405ba8c1c7d)

## :question: Big Ten Football Questions
- Is the data sufficient to answer our questions?
- Is there a correlation between Revenue & Expenses and football game Win/Loss?
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
- Pennsylvania State University does not have data for 2020 and 2021 due to a change in how the university reports data, where they transitioned to reporting all campuses as a single entity instead of separately

## :pencil2: Data Visualization Track and Big Ten Football

* Visualizations created with JavaScript
* Data stored in and extracted from PostgreSQL
* Multiple Datasets with at least 100 records
* User-driven interactions with dropdowns and text boxes to display JavaScript-powered visualizations


## :desktop_computer: Sample Code

**Some of the code we used for cleaning and creating our visuals:**

- Code for converting CSV to JavaScript
`df = pd.read_csv(csv_file)`
`data = df.to_dict('records')`
`js_data = f'const data = {json.dumps(data, indent=4)};'`
`with open(js_file, 'w') as f:
        f.write(js_data)
`

## :heart: Ethical Considerations
Ethical considerations in this code include ensuring data privacy and security by handling sensitive financial and university data responsibly. It is important to present accurate and fair information, avoiding misleading interpretations of team performance or financial data, and ensuring the visualizations reflect real data context. The code should adhere to accessibility standards, making the visualizations usable for individuals with disabilities, such as providing color choices that are friendly for color-blind users. Additionally, transparency is key, with clear communication of data sources, while ensuring the data is used responsibly and not for harmful purposes. By adhering to these principles, the code promotes inclusive, ethical, and responsible data practices.


## :computer: Sources, References and Contributions

<ins>DATA SOURCES</ins> 
- U.S. Department of Education, Equity in Athletics analysis
  - https://ope.ed.gov/athletics/#/customdata/search
- Kaggle: College Football Team Stats Seasons 2013 to 2023
  - https://www.kaggle.com/datasets/jeffgallini/college-football-team-stats-2019
- ChatGPT for Stadium Information and Ethical considerations
- Penn State Not having data for 2020 and 2021
  - https://knightnewhousedata.org/about-the-data#:~:text=In%20IPEDS%2C%20Pennsylvania%20State%20University,applied%20for%202020%20and%202021.


<ins>REFERENCES FOR HELP WITH CODE</ins>
- Tutors
- ChatGPT

<ins>TEAM CONTRIBUTIONS</ins>
- Gerald
  - Helped clean data
  - Went over Financial data
  - Helped locate data sources
  - Contributed to code
- May
  - Helped clean data
  - Helped locate data sources
  - Created PowerPoint presentation
  - Contributed to code
- Mahmoud
  - Helped clean data
  - Helped locate data sources
  - Contributed to code and presentation
  - Organized meetings
- Tobe
  - Helped clean data
  - Helped locate data sources
  - Contributed to code, including creating an interactive map that wasn't used in presentation
- Katherine
  - Helped clean data
  - Helped locate data sources
  - Contributed to code and presentation
  - Created ReadMe file
 - Jake
   - Helped clean data
   - Helped locate data sources
   - Main contributer to code

