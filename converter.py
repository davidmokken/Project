# Name: David Mokken
# Student Number: 10770798
# Purpose of the file: Converts the csv data into a json string

import csv
import pandas as pd
import json
import os, sys
from pprint import pprint


def convert_immigration(filename):
    """
    Converts the immigration csv to pandas
    """
    # Load the necessary columns from the csv into pandas
    data = pd.read_csv(filename, sep=';')
   
    # Renames the column names
    data.columns = ['Year', 'Province', 'Total number with MB', 'Western', 'Marrocan', \
    'Dutch Antillies', 'Surinam', 'Turkey', 'Other', 'Dutch (relative)', \
    'Total Migration Background (relative)', 'Western (relative)', 'Non-Western (relative)']
    
    # Transforms strings to floats
    data['Year'] = pd.to_numeric(data['Year'], errors='coerce')
    data['Dutch (relative)'] = pd.to_numeric(data['Dutch (relative)'].str.replace(',', '.'), errors='coerce')
    data['Total Migration Background (relative)'] = pd.to_numeric(data['Total Migration Background (relative)'].str.replace(',', '.'), errors='coerce')
    data['Western (relative)'] = pd.to_numeric(data['Western (relative)'].str.replace(',', '.'), errors='coerce')
    data['Non-Western (relative)'] = pd.to_numeric(data['Non-Western (relative)'].str.replace(',', '.'), errors='coerce')

    # Replaces values in the province columns
    data = data.replace("Groningen (PV)", "Groningen")
    data = data.replace("Friesland (PV)", "Friesland")
    data = data.replace("Drenthe (PV)", "Drenthe")
    data = data.replace("Overijssel (PV)", "Overijssel")
    data = data.replace("Flevoland (PV)", "Flevoland")
    data = data.replace("Gelderland (PV)", "Gelderland")
    data = data.replace("Utrecht (PV)", "Utrecht")
    data = data.replace("Noord-Holland (PV)", "Noord-Holland")
    data = data.replace("Zuid-Holland (PV)", "Zuid-Holland")
    data = data.replace("Zeeland (PV)", "Zeeland")
    data = data.replace("Noord-Brabant (PV)", "Noord-Brabant")
    data = data.replace("Limburg (PV)", "Limburg")

    # Creates a multi-index dataframe with province as the first index and year as the second
    data = data.set_index(['Year', 'Province'])

    # Drops the year 2018, since the other dataset does not have a 2018
    data = data.drop(index=2018, level=1)

    return data

def convert_safety(filename):
    """
    Converts the safety feeling csv to pandas
    """
    # Load the necessary columns from the csv into pandas
    data = pd.read_csv(filename, sep=';')

    # Renames the column names
    data.columns = ['Marges', 'Year', 'Province', 'Feels Unsafe (general)', 'Feels unsafe (neighbourhood)', \
        'Belief a lot of crime (neighbourhood)', 'Crime increased (neighbourhood)', 'Crime decreases (neighbourhood)', \
        'No change in crime (neighbourhood)', 'Grade for safety (neighbourhood)']

    # Drops the column 'Marges'
    data = data.drop(columns=['Marges'])

    # Transforms strings to floats
    data['Year'] = pd.to_numeric(data['Year'], errors='coerce')
    data['Feels Unsafe (general)'] = pd.to_numeric(data['Feels Unsafe (general)'].str.replace(',', '.'), errors='coerce')
    data['Feels unsafe (neighbourhood)'] = pd.to_numeric(data['Feels unsafe (neighbourhood)'].str.replace(',', '.'), errors='coerce')
    data['Belief a lot of crime (neighbourhood)'] = pd.to_numeric(data['Belief a lot of crime (neighbourhood)'].str.replace(',', '.'), errors='coerce')
    data['Crime increased (neighbourhood)'] = pd.to_numeric(data['Crime increased (neighbourhood)'].str.replace(',', '.'), errors='coerce')
    data['Crime decreases (neighbourhood)'] = pd.to_numeric(data['Crime decreases (neighbourhood)'].str.replace(',', '.'), errors='coerce')
    data['No change in crime (neighbourhood)'] = pd.to_numeric(data['No change in crime (neighbourhood)'].str.replace(',', '.'), errors='coerce')
    data['Grade for safety (neighbourhood)'] = pd.to_numeric(data['Grade for safety (neighbourhood)'].str.replace(',', '.'), errors='coerce')

    # Replaces values in the province columns
    data = data.replace("Groningen (PV)", "Groningen")
    data = data.replace("Friesland (PV)", "Friesland")
    data = data.replace("Drenthe (PV)", "Drenthe")
    data = data.replace("Overijssel (PV)", "Overijssel")
    data = data.replace("Flevoland (PV)", "Flevoland")
    data = data.replace("Gelderland (PV)", "Gelderland")
    data = data.replace("Utrecht (PV))", "Utrecht")
    data = data.replace("Noord-Holland (PV)", "Noord-Holland")
    data = data.replace("Zuid-Holland (PV)", "Zuid-Holland")
    data = data.replace("Zeeland (PV)", "Zeeland")
    data = data.replace("Noord-Brabant (PV)", "Noord-Brabant")
    data = data.replace("Limburg (PV)", "Limburg")

    # Creates a multi-index dataframe with province as the first index and year as the second
    data = data.set_index(['Province', 'Year'])
    return data

# def df_to_nested_dict(df: pd.DataFrame) -> dict:
def df_to_nested_dict(df, name):
    """"
    Creates a nested dict from the multi-index dataframe and turn it into a json file
    """
    # 
    nested_dict = df.groupby(level=0).apply(lambda df: df.xs(df.name).to_dict(orient='index')).to_dict()
    # pprint(nested_dict)

    with open ("data/" + name + ".json", "w") as infile:
        json.dump(nested_dict, infile)
  

if __name__ == '__main__':
    immi = convert_immigration(f'data/Immigratie_per_gemeente.csv')
    safe = convert_safety(f'data/veiligheidsbeleving_gemeente.csv')    
    
    df_to_nested_dict(immi, 'immi')
    df_to_nested_dict(safe, 'safe')
    





