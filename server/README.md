## A Blogging Platform Front-End
-I built this with alot of love

#### Packages used
bcryptjs - To encrypt our passwords because storing them in plain text is dangerous
body-parser - This is deprecated now...
cors - To help share info. with front-end without browser screaming about 'policy'
dotenv - To help store environment private vars.
express - Framework that is the whole reason why NODE!
jsonwebtoken - Easily authenticates and gives acess to the token un the browser
mongoose - Helps create beautiful models for our backends
nodemon(dev) - Keeps app running during dev.

##### Essentially,
-A user should be able to register, login and create a blog
-Blogs from other users should be visible to the logged in user
-A user should be able to like a blog post
-A user can only edit/delete their own blog post
-Create a middleware too to protect routes!

#### Todo's
-Create a folder, cd into that folder then clone the 2 repos.
-Split terminals and cd into client and server respectfully
-Type npm install in both environments
-Add .env file for your secret variables i.e mongodb atlas url, your desired port etc 

# Remember to 'npm install' after cloning this beautiful repo :)