// input validation method
export default function errorFinder(formData) {
  const errs = [];
  for (let f in formData) {
    console.log(f);
    const inputType = f.replace("_", " ");
    const val = formData[f];
      if (f === "email") {
        const re =
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b$/;
        if (!re.test(val)) {
          errs.push(inputType)
        }
      }
      if (f === "password") {
        const reg =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!reg.test(val)) {
           errs.push(inputType)
        }
      }
      if (f === "first_name" || f === "last_name") {
        const reg = /^[a-zA-Z ]{2,}$/;
        if (!reg.test(val)) {
           errs.push(inputType)
        }
      }
      if (f === "telephone") {
        const reg = /^[0-9]{10}$/;
        if (!reg.test(val)) {
           errs.push(inputType)
        }
      }
    }
  return errs;
}
