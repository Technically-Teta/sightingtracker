# Sterling City Scientific Animal Sight Tracker App
 ⚡ learn how to use the Sterling City Animal Sight Tracker App and learn more about our mission. ⚡

## Step by Step instructions  
### Instructions and download for scientific study.

![Green   White Torn Cactus YouTube Channel Art](https://github.com/Technically-Teta/sightingtracker/assets/52463043/07c174d1-a387-4581-8aeb-c59f555e7877)


In 2020, CNN showed a heart-breaking video of a very scary thing, a polar bear searching garbage bins in Iceland for food. Their dire plight and the plight of other endangered animals is one of the many reasons We at Sterling City decided to create our App.
We want to make a difference.
We’re dedicated to conserving polar bears and the sea ice they depend on. Through media, science, and advocacy, we work to inspire people to care about the Arctic, the threats to its future, and the connection between this remote region and our global climate.

* Although our app was created for Zoologists and Scientists anyone dedicated to the preservation of animals may use the app for a fee.



* Add sketches of making the app
* step by step instructions
* backend work- our tables in db are connecting through joins and tables 

### Learn about the Development Process of our app

Please carefull
1. Go to your source directory in your terminal and run the command `git clone https://github.com/Yosolita1978/Template2023React-Vite.git NAMENEWDIRECTORY`

2. To clean the owner git out of the main directory, run the command `rm -rf .git`

3. Then while still within the main directory in your terminal, run the command `git init` to start your own git track 


4. Go to the server folder in the project (`cd server`) and run the command `npm install`

5. Inside your server folder, create an .env file with `touch .env`

⚠️ All these instructions should be inside your server folder ⚠️

6. There are two ways to restore the DB dump file the project already contains: 

A- If you have postgres set up postgres with an User:  
 * just run the command `psql -U postgres -f db.sql`. Make sure that you have your Postgres password on hand. The psql console will ask for your password. 

B- If your initial configuration of postgres doesn't require a User:
* just run the command `psql -f db.sql`

7. Inside your server folder, open the file `.env.example` and copy the correct option for your configuation found there to your new .env file. 

Here is what your `.env` might look like:

```
DB_URI="postgresql://localhost/techtonica"
``` 
For this template, the name of your db should be `techtonica`.

⚠️ If you don't see a `techtonica` db, you can create one. From the terminal, navigate to the psql command line with `psql` and type `create database techtonica;` - don't forget the semicolon!! ⚠️

![You will something like this in your terminal](https://raw.githubusercontent.com/Yosolita1978/screenshoots/a4674c79f61b39547b068044c5e5f2bd8510a4b8/2023/H1/Screen%20Shot%202023-03-22%20at%2011.03.12%20PM.png)

8. Go to the client folder in the project (`cd .. and cd client`) and run the command `npm install`

🔎 The `npm install` command installs the required dependencies defined in the package.json files and generates a node_modules folder with the installed modules.

⚡ Note: Using Vite we can avoid all the package deprecation warnings ⚡

9. If you want to run both servers using concurrently (which is already a npm dependency on the server) you can keep the script in the package.json in the server that reads `"dev": " concurrently 'npm start' 'cd .. && cd client && npm run dev' "`. If you run the command `npm run dev` from within your server, both the client and backend servers will start.

10. Go to localhost:5173 and you should see something like this  💪

![You will something like this in your terminal.](https://raw.githubusercontent.com/Yosolita1978/screenshoots/2f6afdd2318809714071b7625776c195903758ca/2023/H1/Screen%20Shot%202023-03-22%20at%2010.40.36%20PM.png)

⚡ **Notes** ⚡  
* React requires **Node >= 14.0.0** & **npm >= 5.6**
* This template is using icons from `react-icons/io5` and `react-bootstrap` in the frontend. You can see all the frontend dependencies in the package.json on the `client` folder
* Please note that your backend server will run from `port 8080`, and your frontend React server will run from `port 5173` (the default Vite port).

* Confused about why use Vite? 🤔 → Check out the [Create a new React app with Vite](https://scrimba.com/articles/create-react-app-with-vite/)

⚙️ Links that you could need:

* The instructions for [pg](https://node-postgres.com/apis/pool)  
* Setup [postgres correctly](https://github.com/Techtonica/curriculum/blob/main/databases/installing-postgresql.md)


