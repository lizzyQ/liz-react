lesson learned from my first try of deploy 'creat-react-app' in gh-pages

To me: Stop trying so hard to be a smart ass. Follow the instruction!!
   Since all my other react projects were done in codepen then pushed into github, so somehow My brain convienced me that I only need to push the files inside the 'build' directory. 
   After 'npm run build', I enter in the folder 'cd build' then did 'git init','git add ... remote..master'. Every thing look so good untill I run 'npm run deploy'.Errors keep poping, cost me 2 hours to figure out.
   
   I did end up change the "version" to "0.3.0" in the packagejson file. 
   
   
If you run into same error when deploying the 'creat-react-app' projects:
   "Failed at the XXXX@0.1.0 deploy script 'gh-pages -d build'. Make sure you have the latest version of node.js and npm installed." 
   OR
   "Failed to get remote.origin.url (task must either be run in a git repository with a configured origin remote or must be configured with the "repo" option)."
   OR
   " Registry returned 404 for GET on https://registry.npmjs.org..."
   
   You may want to check
   1. Did have .git inside your project file. (use 'ls -a' in command line to check you have the '.git' file.)
   2. Did push the files into a repository.
   3. The version inside packagejson is above 0.2.0. https://github.com/npm/npm/issues/7858
   
