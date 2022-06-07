# Atelier

Front end work for a retail web-portal

## Installation
1. Clone this repository ([instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))
2. In a command-line shell, navigate to the directory where you cloned this repository with the `cd` command
3. While in the repository root directory, install the app dependencies with `npm install`
4. Create a file in the repository root called `config.js` with these contents:
```js
module.exports = { TOKEN: 'GitHubPersonalAccessToken' };
```
5. Replace `GitHubPersonalAccessToken` with your token ([instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token))
6. Create a static module bundle using webpack with `npm run build`
7. Start the Atelier application server with `npm start`
8. Type **http://localhost:3000** in the address bar of your browser to open the app
