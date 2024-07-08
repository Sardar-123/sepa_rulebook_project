# SEPA Rulebook Project

## Overview
This project analyzes changes between different versions of SEPA PACS.008 Credit Transfer Messages and generates impact summaries and BDD test scenarios.

## Setup
1. Clone the repository.
2. Install dependencies:
    ```
    pip install -r requirements.txt
    ```

3. Add your Gemini API key to `src/analyzers/impact_analyzer.py`.

## Running the Project
To run the project, execute:
python main.py


## Running Tests
To run unit tests, execute:
python -m unittest tests/test_parse_xsd.py------ for unique
python -m unittest discover tests------ for all

