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

- Who wanna be listed here? Feel free to message me! 😉

# How it works

By implementing fomikon, fomikon returns the number depending on if it's the input field.

for example

- user clicked the input => 2
- user type wrong email address and move to the next input => 3
- user fixed the email => 0

And there is a function that checks if all input fields are validated.
So, You can use this function to activate form submit button.

# Usage

## Installation

```bash
$ npm i fomikon
```

```javascript
import Fomikon from "fomikon";
```

# Functions

```javascript
const fomikon = new Fomikon();
```

```javascript
fomikon.atOnFocus();
```

```javascript
fomikon.atOnBlur();
```

```javascript
fomikon.atUseEffect();
```

```javascript
fomikon.atButtonDisable();
```

## Example

```javascript
import React, { useState , useEffect} from "react";

export default function FormExample() {
  // Create state of the input
  const [email, setEmail] = useState("");

  // Create state for the validation
  //note* Please set 0 if the email is required.
  // FOMIKON will change the number depending on the status of the input.
  const [emailValidation, setEmailValidation] = useState(1);

  const fomikon = new Fomikon();

  //You can specify the regex for the each validation here
  //Regex is very powerful tool. So I recommend you to learn basic if you don't know anything. 👴
  const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Create array data and set it in each functions FOMIKON offers.
  const fomikonMail = [
    email,
    setEmail,
    emailValidation,
    setEmailValidation,
    { require: true, regex: mailRegex },
  ];

// Maybe you should use memo or useMemo or something like that if you think about performance.

  useEffect{()=> {
    fomikon.atUseEffect(fomikonMail)
  },[ email,
    setEmail,
    emailValidation,
    setEmailValidation, regex]}

  const submitHandler = () => {
    const data = { email: email };
    console.log(data);
  };
  return (
    <div>
      <input
        type="email"
        placeholder="email"
        onFocus={() => {
          fomikon.atOnFocus(fomikonMail);
        }}
        onBlur={() => {
          fomikon.atOnBlur(fomikonMail);
        }}
      />
      <button onClick={submitHandler}　disable={()=> {
        fomikon.atButtonDisable(email)
      }} >SUBMIT</button>
    </div>
  );
}
```

Disable esLint chant for the Lazy developer🧙‍♂️

```javascript
// eslint-disable-next-line
```

👷Work in progress 👷
