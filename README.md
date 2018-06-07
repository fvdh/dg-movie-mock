#Task:
Display a vertical list of ten movies which can also be filtered by decade.

A UI mockup can be found in the included moviemock.sketch file (or moviemock.pdf if you don't have Sketch).
Only one movie is shown in the mockup, but use that as a template for the other 9.

Using the first 10 results of this api search for batman movies:
http://www.omdbapi.com/?s=Batman

Take those results and look up details for each movie returned using this api pattern:
http://www.omdbapi.com/?i=tt0372784 (where i = the imdb id found above)

Images will be blocked from hotlinking. Manually download all of those images to the project first, then reference them locally (parse the url string from the response).

Build using Angular.js version [1.5.8](https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.min.js) and SASS compiled to CSS. Build at least one AngularJS component. Make sure your code is supported by Chrome, FF, and IE11.

Publish your completed project to a github repo provide us with a link.
