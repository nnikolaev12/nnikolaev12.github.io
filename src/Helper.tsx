export const formatDate = (date: string | any) => {
  const dateObj = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateObj);

  return formattedDate;
};

export const jumpToSection = (section_id: string) => {
  const element = document.getElementById(section_id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
