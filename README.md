Project-3 Seeded
Link to project

Seeded was the 3rd project I made during the GA SEI course. This was a 10 days project where we worked in teams of 3 to produce a fullstack project using React, Express and MongoDB.

The idea of our project was to be a site where you could get all the information you needed about houseplants, where to buy them and how to take care of them. We would also allow users to submit their own plants to add to the collection.






This was the original plan for Seeded which eventually changed throughout the project.

One of the changes that happened was the random feed of plants. Originally we had planned to have a tinder-styled feature where you select yes or no to if you wanted to be brought to the plant's index page. However, during production this ended up being quite gimmicky and didn't quite fit the theme of the project so we scrapped the idea.

We didn’t originally assign specific tasks to each other but instead assigned a priority list using the MoSCoW system. This allowed us to get a better idea of what the main deliverables were and what some of the stretch goals were. After assigning these, we all just split the main tasks to whatever we were comfortable doing once we started. 


Technologies Used
React
We used React for the Frontend of the project. I had experience with React from my last project but since this project was a lot larger than my last one I was able to develop new skills with it such as reading documentation or componentizing my work.

MongoDB
MongoDB was used as the Database. This was my first time using MongoDB and I ended up learning a lot about the different relationships and using NoSql databases.

Express
Express was used for the backend and the routing. I mainly focused on the routing for this project and was able to develop the basics of using Express.

The Approach:

Days 1-3
After wireframing the site and agreeing on all the main deliverables, we decided to all work on core features to achieve the MVPS as soon as possible. For the first couple days we styled the main structure of how we wanted the pages to look, did backend routing, relationships and started seeding the data.

I took charge of styling the glossary page, the about us page and the profile page for the frontend. For the backend, I mainly focused on getting the routing and relationships sorted. The challenge here was working alongside others. Because we all worked at different speeds we quickly found that some people would finish earlier than others and we needed to coordinate a lot more than initially thought. One of the ways we tackled this was by having group standups every morning to see if anybody needed support, we also assigned other tasks that people could work on when finished and waiting for others.

Getting the routes setup was also quite challenging. This was due to me working on this as the rest of the team was still setting up the data models and the different controllers. Luckily, because we had a detailed plan I was able to set up most of the routes without any issues in preparation for the controllers. 



This made setting up the controllers later easier as we already had the routes set up. 








Days 4-7
We had a lot of meetings on Day 4 to discuss functionality of the site and how the backend was going to work. None of us had worked with Express or MongoDB before so we weren't sure how to approach different problems. One of these issues was sorting out how to display data in the API Request. The project was taking shape by now and we only had a couple more MVPs to do before we would start working on stretch goals.

During these days, I would work on the favorites feature and finalize the database seeding. This would be done by adding relationships to the data on the backend as well as sending the requests on the frontend. Regarding the database seeding, I mainly just double checked the wording of all the data before we populated as well as adding some more plant entries.

One bonus feature I added onto the front-end while waiting for others was the search bar feature in the nav. This was modeled after Apple's search feature.

The favorite function was quite challenging to coordinate with my team. Because the detailed plants page was the bulk of the content of our site we all needed to access it at the same time for multiple features. One way we tackled this was having daily standups where we were able to discuss what needed doing and who’s feature is more of a priority. 

To implement the favorite feature I first needed to check if it was already favorited. This would then display the correct coloured heart on the page. 






We would then post the request to toggle if the plant was favorited or not, then using a simple if statement to change the favorite state to reassign the color of the heart. 









Days 8-10
We had finished most of the features we wanted to do by day 8 and just focused on getting the styling finished. We kept to the same pages we worked on during the start of the project. I worked on the glossary, aboutus, search page and profile.

We also worked on fixing any bugs/issues we still had with the project. The main one I solved was the navbar appearing on the homepage. I solved this by using useLocation and not rendering it when the user was on '/'.








Project Walkthrough





This is the plants overview page. From here you can filter through all the plants or use the search feature in the navbar to search for which plant you want to view.

After clicking into a plant to view, this is the page you see.

 
This has a carousel that flips through the various  images that have been uploaded as well as some basic information about the plant. After scrolling down the next page you see is:


This is a more detailed information page where you can see how to care for each plant and some typical problems related to the plant. 

Profile Page



This is the profile page. It automatically chooses one of the plants in your favorites as a display picture. All of the plants that you favorited, commented on or added are displayed here. 


Key Learnings
Learned how to read documentation more independently .
Got more comfortable reading others code and bug fixing.
Learned the basics of MongoDB and Express.
Learned how to do version control with Git.
How to collaborate with a team.

Wins
The main win was learning how to work with others. This was my first time working with others for a larger project and learning how others work and how to solve different conflicts as a team were very valuable experiences.
Another win was getting comfortable using git for version control. I started the project making many mistakes such as coding in the development branch but towards the end I was using the correct branches and pushing my working code more frequently. 

Challenges
We were new to Git and kept running into merge conflicts which took time to resolve.
Reading through code that I hadn't written could take longer than I expected.
MongoDB Relationships were tricky and took me some time to understand.

Future Improvements
Adding an edit and delete button to the different plants you add. We were half-finished with the feature by the time we had to submit. Adding this would give a more complete feel to the website as you could interact with your plants.

