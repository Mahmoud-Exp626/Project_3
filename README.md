# :football: Big10 Football
For this *Data Visualization/Data Engineering Project*, we are working with our designated group on one of the two different track options provided. Our team decided to tell our story with the *Data Visualization Track*.



## Instructions for our selection on this project:

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




