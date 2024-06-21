# SEPA Rulebook Project

This project is designed to compare two XSD files and generate an impact analysis report. It uses Streamlit for the web interface and OpenAI for generating impact summaries and test scenarios.

## Project Structure
sepa_rulebook_project/
│
├── data/
│ ├── old_version/
│ ├── new_version/
│ └── impacts/
│
├── src/
│ ├── parsers/
│ │ └── parse_xsd.py
│ ├── comparers/
│ │ └── compare_elements.py
│ ├── analyzers/
│ │ └── impact_analyzer.py
│ └── utils/
│ └── openai_helper.py
│
├── notebooks/
├── tests/
│ ├── test_parse_xsd.py
│ ├── test_compare_elements.py
│ └── test_impact_analyzer.py
├── static/
│ ├── css/
│ └── js/
├── templates/
│ ├── index.html
│ ├── upload.html
│ └── result.html
│
├── requirements.txt
├── README.md
├── main.py
└── app.py
