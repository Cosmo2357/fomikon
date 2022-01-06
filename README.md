# 👾FOMIKON / Form validation library for React

<p align="center">
<strong>make your form validation easy and flexible with FOMIKON 宇宙</
</p>

# Authors

- Yuhki Hayashi

<a href="/">Apache 2.0 License.</a>

## Install

```bash
$ npm i fomikon
```

## How to Use

```javascript
import Fomikon from "fomikon";
```

```javascript
const fomikon = new Fomikon();
```

## Example

```javascript
import React, { useState } from "react";

export default function FormExample() {
  // Create state of the input
  const [email, setEmail] = useState("");

  // Create state for the validation
  //* note Please set 0 if the email is required.
  // FOMIKON will change the number depending on the status of the input.
  const [emailValidation, setEmailValidation] = useState(1);

  const fomikon = new Fomikon();

  //You can specify the regex for the each validation here
  const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const fomikonMail = [
    email,
    setEmail,
    emailValidation,
    setEmailValidation,
    { require: true, regex: mailRegex },
  ];

  return <div></div>;
}
```

Disable esLint

```javascript
// eslint-disable-next-line
```

👷Sorry... I'm still working on it 👷
