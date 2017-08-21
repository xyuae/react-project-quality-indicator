## Front end web application: Software Project Quality Indicator

## Project Duration: August 2017 to October 2017
## Introduction
The Quality Indicator, which measures the firmware quality status during and at the end of the project life cycle, are composed of “DO” data and “END IT” data. Currently, the Project Quality Indicator is documented in Excel. However, the excel version lacks flexibility in maintenance and expandability. In addition, the quality indicator should have the capability to be integrated into the quality state model for future expansion. Therefore, a web-based application that record and present the project quality data is required.
Functional requirement
1.	CRUD of Project Information
2.	Present project quality indicator
4.	Show the current status and history of the quality indicator (ex. Radar diagram and history diagram)
5.	Upload and download interface for data in Excel format

## Design
The website is about Overview/Add/List view

## Methodology
Build the project using ReactJS on the front-end for REST API system.
Enter the following code to run the project:
```
git clone https://github.com/xyuae/react-project-quality-indicator.git

cd into the project directory
npm install
npm start
visit http://localhost:3001/ on web-browser
```

## Plan and Milestone
Milestone: Website to create project and store project meta data
- 8/11 – 8/20: Complete router implementation and ui design, finish basic structure of the front-end application
- 8/20- 8/27: Improve form content and function 



## Resource
[Cloning a lightweigth yelp website](http://cache.preserve.io/c81nqh7s/)
[Note on react](./notes/clone_yelp.md)
