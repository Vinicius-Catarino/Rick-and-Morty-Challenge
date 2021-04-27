const formatPronounGender = (gender: string) => {
  switch (gender) {
    case "Male":
      return "He";
    case "Female":
      return "She";
    case "unknown ":
      return "unknown";
    default:
      return "";
  }
};

export default formatPronounGender;
