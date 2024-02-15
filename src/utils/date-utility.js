const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = new Date(dateString).toLocaleString("en-US", options);
  return formattedDate;
};

export { formatDate };
