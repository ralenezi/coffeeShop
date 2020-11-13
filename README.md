# My awesome coffee shop

## Check it out at http://ralenezi.github.io/coffeeShop

### Steps:

<li> run <code> npm install gh-pages --save-dev </code></li>
<li>add to package.json:
<code>"homepage": "http://{username}.github.io/{repo-name}"</code>
</li>
<li>add to scripts: {
<code>
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
</code>
}
</li>
<li> after every push <code>npm run deploy</code> </li>
<i>If you got an error try running <code>npm add @babel/runtime</code> </i><br>
<b>PS: you can use yarn instead of npm </b>
