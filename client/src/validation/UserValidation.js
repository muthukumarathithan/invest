const UserValidation = (values) => {
  const errors = {};

if (!values.name || values.name === "") {
    errors.name = "Enter the Name";
  }


if (!values.email || values.email === "") {
    errors.email = "Enter the Email";
  }

if (!values.password || values.password === "") {
    errors.password = "Enter the Password";
  }


  if (!values.password1 || values.password1 === "") {
    errors.password1 = "Enter the Password1";
  }

  if (!values.alamat || values.alamat === "") {
    errors.alamat = "Alamat harus diisi";
  }

  if (!values.nohp || values.nohp === "") {
    errors.nohp = "No HP harus diisi";
  }

  return errors
};

export default UserValidation;
