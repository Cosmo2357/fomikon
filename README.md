# 👾FOMIKON / Form validation library for React

<p align="center">
<strong>😊Feel to cantact me if you wanna join the project!</
</p>

# Fomikon

Fomikon makes your stressful form validation work easy.
It returns the number the number depending on the status during form validation.  
For example

- user clicked the input => 2
- user type wrong email address and move to the next input => 3
- user fixed the email => 0

number changed depending on if it's the input field is required to fill and if it's matched with the validation rule.

And there is a function that checks if all input fields are validated.
so You can use This function to activate form submit button.

## 4 Main Functions

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

# Author

- Yuhki Hayashi

[Apache 2.0 License.](https://github.com/cosmo2357/fomikon/LICENSE)

# Contributors

###

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
