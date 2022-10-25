module.exports.signUpErrors = (err) => {
  const errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo")) {
    errors.pseudo = "Pseudo incorrect";
  }

  if (err.message.includes("email")) {
    errors.email = "Email incorrect";
  }

  if (err.message.includes("password")) {
    errors.password = "Le mot de passe doit faire plus de 6 caractères";
  }

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo")) {
    errors.pseudo = "Ce pseudo est déja pris";
  }

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email")) {
    errors.email = "Cet email est déja enregistré";
  }

  return errors;
};

module.exports.signInErrors = (err) => {
  const errors = { email: "", password: "" };

  if (err.message.includes("email")) {
    errors.email = "L'email est incorrect";
  }

  if (err.message.includes("password")) {
    errors.password = "Le mot de passe et incorrect";
  }

  return errors;
};

module.exports.uploadErrors = (err) => {
  const errors = { format: "", maxSize: "" };

  if (err.message.includes("Invalid File")) {
    errors.format = "Format incompatible";
  }

  if (err.message.includes("Max size")) {
    errors.maxSize = "Le fichier dépasse 5 Mo";
  }

  return errors;
};
