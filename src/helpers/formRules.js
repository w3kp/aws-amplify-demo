export default {
  email: [
    {
      type: 'email',
      message: 'The input is not valid e-mail!'
    },
    {
      required: true,
      message: 'Please input your e-mail!'
    }
  ],
  usernameEmail: [
    {
      required: true,
      whitespace: true,
      message: 'Please input your username or e-mail!'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input your password!'
    }
  ],
  username: [
    {
      min: 3,
      whitespace: true,
      message: 'Please input your username with more than 2 characters!'
    },
    {
      required: true,
      whitespace: true,
      message: 'Please input your username!'
    }
  ],
  createEmail: [
    {
      type: 'email',
      message: 'The input is not valid e-mail!'
    },
    {
      required: true,
      whitespace: true,
      message: 'Please input your e-mail!'
    }
  ],
  contactNumber: [
    {
      required: true,
      whitespace: true,
      message: 'Please input your contact number!'
    }
  ],
  firstName: [
    {
      required: true,
      whitespace: true,
      message: 'Please input your first name!'
    }
  ],
  lastName: [
    {
      required: true,
      whitespace: true,
      message: 'Please input your last name!'
    }
  ],
  createPassword: [
    {
      min: 6,
      whitespace: true,
      message: 'Please input your password with more than 5 characters!'
    },
    {
      required: true,
      whitespace: true,
      message: 'Please input your password!'
    }
  ],
  confirmPassword: [
    {
      required: true,
      whitespace: true,
      message: 'Please confirm your password!'
    },
    ({ getFieldValue }) => ({
      validator(rule, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve()
        }

        return Promise.reject('The two passwords that you entered do not match!')
      },
    })
  ],
  billAddress: [
    {
      required: true,
      message: 'Please input your address!'
    }
  ],
  billCity: [
    {
      required: true,
      message: 'Please input your city!'
    }
  ],
  billState: [
    {
      required: true,
      message: 'Please input your state!'
    }
  ],
  billZipCode: [
    {
      required: true,
      whitespace: true,
      message: 'Please input your zip code!'
    }
  ],
  billCountry: [
    {
      required: true,
      message: 'Please input your country!'
    }
  ],
  identificationIdNumber: [
    {
      required: true,
      whitespace: true,
      message: 'Please input your passport/ID number!'
    }
  ],
  amount: [
    {
      required: true,
      message: 'Please input an amount!'
    },
    {
      validator: (rule, value) => {
        if (value === '' || value === undefined || value === null) {
          return Promise.resolve()
        }

        return Number(value) > 0
            ? Promise.resolve()
            : Promise.reject('Amount must be greater than zero!')
      }
    }
  ],
  receivingAddress: [
    {
      required: true,
      whitespace: true,
      message: 'Please input a wallet address!'
    },
  ],
  requested: [
    {
      required: true,
      message: 'Please select an amount!'
    },
  ]
}
