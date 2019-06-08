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
    data.columns = ['Year', 'Province', 'Total number with MB', 'Western', 'Marrocan', 'Dutch Antillies', 'Surinam', 'Turkey', 'Other', 'Dutch (relative)', 'Total Migration Background (relative)', 'Western (relative)', 'Non-Western (relative)']
    
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
    data = data.set_index(['Province', 'Year'])

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
        'No change in crime (neighbourhood', 'Grade for safety (neighbourhood)']

    # Drops the column 'Marges'
    data = data.drop(columns=['Marges'])

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

def df_to_nested_dict(df: pd.DataFrame) -> dict:
    """"
    Creates a nested dict from the multi-index dataframe
    """
    # 
    nested_dict = df.groupby(level=0).apply(lambda df: df.xs(df.name).to_dict(orient='index')).to_dict()
    # pprint(nested_dict)

    return nested_dict



if __name__ == '__main__':
    immi = convert_immigration(f'data/Immigratie_per_gemeente.csv')
    safe = convert_safety(f'data/veiligheidsbeleving_gemeente.csv')    
    
    data_immi = df_to_nested_dict(immi)
    data_safe = df_to_nested_dict(safe)
    
    # Creates a json string from the dict
    json_string_immi = json.dumps(data_immi)
    json_string_safe = json.dumps(data_safe)






