#ArtHistoryQuiz
This is a website that you can use to study for a low-level art history course. You give it a list of images, accompanied by information about them, and it shows them as virtual flash cards. 

##How to use
For the actual end user, this should be pretty straightforward; just follow the instructions written on the website. If I ever give this to someone when I leave school, it might be a little more complicated for them. So for you, future-starter, here is some information. 

To add, remove, or edit cards, use MASTER.txt. I highly, highly recommend against editing `new.js` or `old.js`. They're just one line long javascript 
file containing one huge list of objects. You really don't want to touch them; MASTER.txt is much easier. First, if you don't have python 
on your computer, install it. Then, make MASTER.txt say whatever you want it to, following the format written there. Then, to update `new.js` and `old.js`
to match, just run maker.py with your python interpreter, and they will be updated. You don't need to do anything else unless I've made a mistake 
in maker.py (which, not to brag, but I probably haven't). Other than that, everything else either doesn't need to be explained or you can read about 
in its file. 

## Git Primer

If, in the course of Priorian events, I must break the bonds that tie me to other programming-types and give this to someone who doesn't know anything
about VCS's, here's how to make this work with git and GitHub. 
###Step 1: Install a git client
You could use the official GitHub client, or some other one. I use git bash, but I'm kinda old-fashioned like that. I'm going to assume, however, 
that you're using git from the command line. You probably aren't, but all these commands (except perhaps `git pull`) will be in your front-end somewhere. 
Since I can't account for every git client, the onus is on you to find them. 
###Step 2: Make a GitHub account (if you haven't already)
If you don't know how to make an account on a website, I'm sorry to say it, but you're out of luck with me. 
###Step 3: Fork this repo
When you're logged into your account, go into this repo and click the "Fork" button in the top right corner. This will put your own copy of this repo 
into your GitHub account. Then, go into your copy of this repo. 
###Step 4: Make gh-pages branch
If the grey dropdown menu above the list of files says that the current branch is "gh-pages", then you can skip this step. If, however, it 
says it's something like "master", then click it, type in "gh-pages" (no caps) and press enter. This will create a new branch called gh-pages; 
this allows this to be published on the public Internet for everyone else to use. Then, click the button right above that that says "Branches: 2." 
Set the default branch to be gh-pages and delete master. 
###Step 5: Clone to your computer
On the right side of this page, there will be a box that's labeled "URL to clone" or something like that. Copy that box, then open up your git client 
on your computer. Type in 
```
git clone [URL]
```
where [URL] is the url you just copied. (In some git clients, the way to copy is with the "insert" button on your keyboard) It might ask for your git 
username and password, it might not. If you follow its directions, it will download onto your local machine so you can edit it. 

###Step 6: Commit your changes
First, let me define my terms. "Commit" is pretty much just the same as saving your code. Once you commit your code, it is saved and you can roll back to it if you make a mistake later. To upload code, you have to commit it first. 
After you edit, including running maker.py to update `new.js` and `old.js` if you need to, open your git client and run
```
git add .
git commit -m "First Commit"
```
The dot after `git add` isn't a typo. 
The bit after `-m` is the commit message. After this one, you might want to give more informative messages (you can have more than one 
paragraph by having each one preceded by a `-m`. See below for standard commit format.) If you want to type a commit out in a longer format 
(which I usually do), you can leave out the `-m` and it will open a text-editor. You probably won't like the one it gives you, but you can change it. 
Or, if you're in a GUI, you don't have to worry about it. This format, however, still stands. For the sake of standards, I suggest you roughly stick 
to it. 

This is a short, one line summary of what you did. 
[This is a blank line]
This is a longer paragraph telling why what you did is good. It can 
be long if you want, but it is good practice to cap each line at 70 
characters so that it can be read on any size screen. 

Once you're done with your commit, save and close your text editor. 
###Step 7: Upload your code
Open your git client and run 
```
git push
```
You may get an error. Read it and do what it says. Know that the remote name is probably "origin" and the branch name is "gh-pages". If it asks for your 
username and password, give it your GitHub credentials. When you've successfully pushed, if you've done everything right and I haven't forgotten anything, 
congratulations! You've changed the website. Keep in mind that this is by no means an exhaustive education on git; this just walks you through the 
bare necessities you need to run the website. There are many more things you can do with git, including syncing between computers, but if you want 
more information, look up "git primer" on the Internet. They'll more than likely explain it better than I can. 
To get to the website from the regular Internet, the URL is www.[your_username].github.io/ArtHistoryQuiz (or whatever you named it. Caps count after 
the /).
If you have a question, send me a git message or comment on one of my other projects or get in touch with me some other way and I'll see what I can do for you. 