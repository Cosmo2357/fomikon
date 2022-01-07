<p align="center">
<img src="https://user-images.githubusercontent.com/37522195/148510942-f689f58f-ed82-4ce6-94e4-76aba2f8ee82.jpg"/>

<strong>😊Feel to contact me if you wanna join the project!<strong>

</p>

# 👾FOMIKON👾 Form validation library for React

Fomikon makes your stressful form validation work easy.
It returns the number depending on the status during form validation.

[Apache 2.0 License.](https://github.com/cosmo2357/fomikon/LICENSE)

# Author

- Yuhki Hayashi

# Contributors

- Who wanna be listed here?😏 Feel free to send me a message!😊

# How it works

- user clicked the input => 2
- user type wrong email address and move to the next input => 3
- user fixed the email => 0

number changed depending on if it's the input field is required to fill and if it's matched with the validation rule.

And there is a function that checks if all input fields are validated.
so You can use This function to activate form submit button.

# Usage

## Installation

```bash
$ npm i fomikon
```

```javascript
import Fomikon from "fomikon";
```

```javascript
const fomikon = new Fomikon();
```

# 4 Main useful Functions

```javascript
atOnFocus();
```

```javascript
atOnBlur();
```

```javascript
atUseEffect();
```

```javascript
atButtonDisable();
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

👷Work in progress 👷
