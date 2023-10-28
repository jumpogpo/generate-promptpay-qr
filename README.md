<p align="center">
  <a href="https://www.kasikornbank.com/special/promptpay/pages/index.aspx" target="blank"><img src="https://www.finnomena.com/wp-content/uploads/2016/10/promt-pay-logo.jpg" width="300" height="150" alt="Angpao Logo" /></a>
</p>

## 👋 Description
This project is aimed at creating a QR Code for PromptPay transactions with various banks, allowing users to input their phone number and desired amount. It is compatible with all banks, such as KBank and SCB, among others.

## 🧃 Preface

<p>I want to create a program that generates a QR Code and displays it on the terminal for receiving payments. So, I developed this project.</p>

## 📝 How to use?

- Clone this project following the installation instructions.
- Installing all the necessary packages.
- Run the program.

## 📚 Installation

```bash
# Clone project
$ git clone https://github.com/jumpogpo/generate-promptpay-qr.git
$ cd generate-promptpay-qr

# Install packages
$ npm install
```

## 📺 Running the app

```bash
# build
$ npm run build

# run
# Example node ./dist/index.js 0123456789 100
$ node ./dist/index.js phoneNumber amount
```

## 🤝 Reference

- TypeScript - [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- promptpay-qr - [https://www.npmjs.com/package/promptpay-qr](https://www.npmjs.com/package/promptpay-qr)