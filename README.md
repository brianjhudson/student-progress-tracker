# DevMountain Student Progress Tracker

## Purpose
This site will track the progress of DevMountain students as they complete projects. Students will fork and clone individual projects from the DevMountain repo, and as they pass tests, the projects will submit the test data to the **/api/report** endpoint on this repo. 

## Static Files
The server will serve a login screen which prompts students for their DevMountain login credentials.

## Proposed Endpoints
### DevMountain Auth `/api/auth`
When students enter their credentials, the site will hit DevMountain's auth database using the DevMountain passport strategy. 

After authorizing, the endpoint will return either an error message or a student's unique id and cohort id. Students will need to input these ids into their project file. 

### Report `/api/report`
This endpoint will accept a student id, cohort id, project id, timestamp, total number of tests, and number of tests passed. These data will be passed automatically from the project files as students run the tests. 

The endpoint will then pass these data to a database and (eventually) to the DevMountain LMS.

A success or error message will be returned.

### Most Recent Student Scores `/api/student/recent/:studentId`
This endpoint accepts a student id parameter and returns the last (most recent) score for each project.  

### Most Recent Cohort Score `/api/cohort/recent/:cohortId`
This endpoint accepts a cohort id and returns the last score for each project.

### Project Information `/api/project/:projectId`
This endpoint accepts a project id and returns an object containing information about each project, including average passing percentage and average elapsed time between first and last score report.  

## More to Come
After the initial site is working, we may add on additional endpoints to provide more data to the LMS. 