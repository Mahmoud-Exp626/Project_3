# :football: Big10 Football
For this project, our team decided to tell the football story with the *Data Visualization Track*.

## Welcome to Big10 Football!
The Big10 is one of the oldest college athletic conferences in the United States, formed in 1896 by the Universities of Chicago, Illinois, Michigan, Minnesota, and Wisconsin and Purdue and Northwestern universities. The Big10 conference currently includes 18 teams.
Our Data covers year 2013 to 2022. 2013 was the league's final season as a 12-team conference before Maryland and Rutgers join the Big Ten Conference for the 2014 season. From 2014 to 2022, the league had 14 teams. 

![photo](https://github.com/user-attachments/assets/f9586e6d-4cdc-4bee-af9d-5405ba8c1c7d)


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




