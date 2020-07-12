## WebSockets Chat App

The objective of this project is to learn the fundamentals of the React Context API.  
It consists of a language selector which the user can click to switch between English and Spanish to display the user input form and submit button text in their respective languages.
The App uses a LanguageStore class component to wrap and send via this.props.children the current selected language down to the nested children components through the Context.Provider.

## Built With

- Node (JS Runtime)
- Express.js (Web Server)
- Socket.io (WebSockets library)
- HTML / CSS

## App Screenshot

![screenshot](./public/ss.jpg)


## Setup instructions

Open a terminal window, go to the location you'd like to add the project and then run the commands below.

```console
git clone https://github.com/noomdalv/websockets_chat.git
```

```console
cd websockets_chat
```

```console
npm install
```

```console
nodemon index

```

#### Special Thanks to [The Net Ninja](https://www.youtube.com/c/TheNetNinja) for his amazing tutorial.

## Author

👤 **Vladimir Luna**

- Github: [@noomdalv](https://github.com/noomdalv)


## 📝 License

This project is [MIT](lic.url) licensed.
