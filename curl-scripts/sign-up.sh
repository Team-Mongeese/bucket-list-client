# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

# don't use a password you use for any real websites!
curl "https://sheltered-dawn-49797.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PW}"'",
      "password_confirmation": "'"${PW}"'"
    }

  }'

#   Use this code in terminal to run the file:
#   EMAIL=fun3@fun PW=123 PW=123 \
# > sh curl-scripts/auth/sign-up.sh
# put json value into the data object we are creating, using "'"${}"'"
echo
